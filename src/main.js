import { filterData, sortData, computeStats  } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js';


//constantes y variable//
const selectFilter = document.getElementById('filtrarCasa');
const selectFilterRaza = document.getElementById('filtrarPorRaza');
const filterButton = document.getElementById('filterButton'); 
const sort = document.getElementById('order');
const closeBtn = document.querySelector("#close-btn");
const closeCheckbox = document.getElementById("check");


//Carga inicial//
renderItems(data);

//eventos//
selectFilter.addEventListener('change', onFilterChange);
selectFilterRaza.addEventListener('change', onFilterChange);
sort.addEventListener('change', onFilterChange);
closeBtn.addEventListener('click', closeFilter);

// Obtener el boton de X
// Agregar un evento click a este boton X

function closeFilter() {
  closeCheckbox.click();
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
  sort.value = "";
  
  
  renderItems(data); 
}

const clearDataImage = document.getElementById('clearData');
clearDataImage.addEventListener('click', () => {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = '';
});

// Guardar la data original al cargar la página
const dataOriginal = document.getElementById('root').innerHTML;
const returnButton = document.getElementById('return');
returnButton.addEventListener('click', () => {
  // Obtener referencia al elemento root
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = dataOriginal;
  
});
document.addEventListener('DOMContentLoaded', () => {
// Guardar la data original al cargar la página
  const dataTitulo = document.getElementById('root').innerHTML;
  const returnHarry = document.getElementById('returnTitulo');
  returnHarry.addEventListener('click', () => {
  // Obtener referencia al elemento root
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = dataTitulo;
  
  });

  const averageYear = computeStats(data); // Calcular el promedio de los años de nacimiento
  const calculationElement = document.querySelector('#calculation'); // Donde se mostrará el resultado

  if (calculationElement) { //Si el elemento existe
    calculationElement.textContent = `El promedio de los años de nacimiento es: ${averageYear}`; 
  } 
});
