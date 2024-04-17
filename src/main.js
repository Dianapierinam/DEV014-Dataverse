import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js';


//constantes y variable//
const selectFilter = document.querySelector('#filtrarCasa');
const selectFilterRaza = document.querySelector('#filtrarPorRaza');
const filterButton = document.querySelector('#filterButton'); 
const sort = document.querySelector('#order');
const closeBtn = document.querySelector("#close-btn");
const closeCheckbox = document.querySelector("#check");
const owlButton = document.querySelector("#clearData");
const calculationElement = document.querySelector('#calculation');
const buttonReturn = document.getElementById('return');
const textpromedio = document.getElementById('textpromedio');
const mensaje = document.getElementById('mostrar-mensaje');

//Carga inicial//
renderItems(data);

//eventos//
selectFilter.addEventListener('change', (event) => onFilterChange(event));
selectFilterRaza.addEventListener('change', (event) => onFilterChange(event));
sort.addEventListener('change', (event) => onFilterChange(event));
closeBtn.addEventListener('click', closeFilter);
document.addEventListener('DOMContentLoaded', showAverageYear);
buttonReturn.addEventListener('click', onReturn);
owlButton.addEventListener('click', function() {
  toggleMostrar('root', 'mostrar-data'); 
  toggleMostrar("embedim--snow", "mostrar"); 
  toggleMostrar("calculation", "mostrar-grafica"); 
  toggleMostrar("return","elpromedio");
  toggleMostrar("mostrar-grafica", "mostrar-mensaje");

  const cardList = document.getElementById('card-list');


  if(cardList.children.length === 0 && calculationElement.classList.length === 0) {
    addClass(mensaje, "mostrar-mensaje");
  } else {
    removeClass(mensaje, "mostrar-mensaje");
  }
});

function onReturn(){
  owlButton.click();
}

function closeFilter() {
  closeCheckbox.click();
}

function toggleMostrar(id, clase) {
  const element = document.getElementById(id);
  const classes = element.classList;

  if (!classes.contains(clase)) {
    addClass(element, clase);
  } else {
    element.classList.remove(clase);
    removeClass(element, clase);
  }
}

function addClass(element, elementClass) {
  element.classList.add(elementClass);
}

function removeClass(element, elementClass) {
  element.classList.remove(elementClass);
}

function showAverageYear() {
  const averageYear = computeStats(data);
  if (calculationElement) {
    textpromedio.innerHTML = averageYear;
  }
}

function onFilterChange(event) {
  const datosFiltrados = filtrar(data);
  const datosOrdenados = sortData(datosFiltrados, 'name', event.target.value);

  if (datosOrdenados.length === 0) {
    addClass(mensaje, 'mostrar-mensaje');
  } else {
    removeClass(mensaje, 'mostrar-mensaje');
  }

  renderItems(datosOrdenados);
}

function filtrar() {
  let datosFiltrados = data;
  if (selectFilter.value) {
    datosFiltrados = filterData(datosFiltrados, 'casaDeOrigen', selectFilter.value);
  }
  if (selectFilterRaza.value) {
    datosFiltrados = filterData(datosFiltrados, 'raza', selectFilterRaza.value);
  }
  return datosFiltrados;
}


filterButton.addEventListener("click", borrarFiltros);
function borrarFiltros() {
  selectFilter.value = ""; 
  selectFilterRaza.value = ""; 
  sort.value = "";
  removeClass(mensaje, "mostrar-mensaje");
  renderItems(data); 
}