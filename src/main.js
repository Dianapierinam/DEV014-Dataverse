import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js';


//constantes y variable//
const selectFilter = document.getElementById('filtrarCasa');
const selectFilterRaza = document.getElementById('filtrarPorRaza');
const filterButton = document.getElementById('filterButton'); 
const sort = document.getElementById('order');
const closeBtn = document.querySelector("#close-btn");
const closeCheckbox = document.getElementById("check");
const owlButton = document.getElementById("clearData");
const calculationElement = document.getElementById('calculation');




//Carga inicial//
renderItems(data);


//eventos//
selectFilter.addEventListener('change', onFilterChange);
selectFilterRaza.addEventListener('change', onFilterChange);
sort.addEventListener('change', onFilterChange);
closeBtn.addEventListener('click', closeFilter);
document.addEventListener('DOMContentLoaded', showAverageYear);
owlButton.addEventListener('click', function() {
  toggleMostrar('root', 'mostrar-data',); //Este es para mostrar y no mostrar la data
  toggleMostrar("embedim--snow", "mostrar"); //Este es para mostrar y no mostrar la nieve
  toggleMostrar("calculation", "mostrar-grafica",); //Este es para mostrar y no mostrar la gráfica
});


// Obtener el boton de X
// Agregar un evento click a este boton X


function closeFilter() {
  closeCheckbox.click();
}

function toggleMostrar(id, clase) {
  const element = document.getElementById(id);
  const classes = element.classList;
  
  if (classes.length === 0) {
    element.classList.add(clase);
  } else {
    element.classList.remove(clase);
  }
}

function showAverageYear() {
  const averageYear = computeStats(data);
  if (calculationElement) {
    calculationElement.textContent = `El promedio de los años de nacimiento es: ${averageYear}`;
  }
}

function onFilterChange() {
  const datosFiltrados = filtrar(data);
  const datosOrdenados = sortData(datosFiltrados, 'name', sort.value); 
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
  sort.value = "desc";
  sort.value = "asc";
  
  
  renderItems(data); 
}