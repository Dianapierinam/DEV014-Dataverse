import { filterData, filterDataByRaza  } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js';


//constantes y variable//
const selectFilter = document.getElementById('filtrarCasa');
const selectFilterRaza = document.getElementById('filtrarPorRaza');


//Carga inicial//
renderItems(data);


//eventos//
selectFilter.addEventListener('change',() => {
  const newData = filterData(data,'casaDeOrigen',selectFilter.value);
  renderItems(newData);
});

selectFilterRaza.addEventListener('change', () => {
  const newData = filterDataByRaza(data, 'raza', selectFilterRaza.value); 
  renderItems(newData);
});









