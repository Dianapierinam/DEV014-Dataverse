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
const bootnretun = document.getElementById('return');
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
bootnretun.addEventListener('click', buttonReturn);
owlButton.addEventListener('click', function() {
  toggleMostrar('root', 'mostrar-data'); //Este es para mostrar y no mostrar la data
  toggleMostrar("embedim--snow", "mostrar"); //Este es para mostrar y no mostrar la nieve
  toggleMostrar("calculation", "mostrar-grafica"); //Este es para mostrar y no mostrar la gráfica
  toggleMostrar("return","elpromedio");
  toggleMostrar("mostrar-grafica","mostrar-mensaje");

  if(calculationElement.classList.contains("mostrar-mensaje")) {
    removeClass(mensaje, "mostrar-mensaje");
  } else {
    addClass(mensaje, "mostrar-mensaje");
  }
});

function buttonReturn(){
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
  // Realizar acciones basadas en el evento recibido
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
  
  datosFiltrados = sortData(datosFiltrados, 'name', sort.value);

  return datosFiltrados;
}


filterButton.addEventListener("click", borrarFiltros);
function borrarFiltros() {
  selectFilter.value = ""; 
  selectFilterRaza.value = ""; 
  sort.value = "";
  renderItems(data); 
}
