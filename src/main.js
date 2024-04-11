import { filterData, sortData  } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js';


//constantes y variable//
const selectFilter = document.getElementById('filtrarCasa');
const selectFilterRaza = document.getElementById('filtrarPorRaza');
const filterButton = document.getElementById('filterButton'); 
const sort = document.getElementById('order');



//Carga inicial//
renderItems(data);


//eventos//
selectFilter.addEventListener('change', onFilterChange);
selectFilterRaza.addEventListener('change', onFilterChange);
sort.addEventListener('change', onFilterChange);

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


//sort.addEventListener('change',() => {
//  const newData = sortData(data, 'name', sort.value);
//  renderItems(newData);
//});


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

