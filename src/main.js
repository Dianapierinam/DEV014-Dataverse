import { filterData } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js';


//constantes y variable//
const selectFilter = document.getElementById('filtrarCasa');


//Carga inicial//
renderItems(data);


//eventos//
selectFilter.addEventListener('change',() => {
  const newData = filterData(data,'casaDeOrigen',selectFilter.value);
  console.log(newData);
  renderItems(newData);
});











