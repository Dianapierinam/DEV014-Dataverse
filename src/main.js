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

function onFilterChange() {
  const datosFiltrados = filtrar(data);
  renderItems(datosFiltrados);
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


sort.addEventListener('change',() => {
  const newData = sortData(data, 'name', sort.value);
  renderItems(newData);
});



filterButton.addEventListener("click", borrarFiltros);

function borrarFiltros() {
  selectFilter.value = ""; 
  selectFilterRaza.value = ""; 
  sort.value = "asc";
  sort.value = "desc";
  
  renderItems(data); 
}



