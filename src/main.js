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
const textpromedio = document.getElementById('textpromedio')





//Carga inicial//
renderItems(data);


//eventos//
selectFilter.addEventListener('change', (event) => onFilterChange(event));
selectFilterRaza.addEventListener('change', (event) => onFilterChange(event));
sort.addEventListener('change', (event) => onFilterChange(event));
closeBtn.addEventListener('click', closeFilter);
document.addEventListener('DOMContentLoaded', showAverageYear);
bootnretun.addEventListener('click', bootnretunn);
owlButton.addEventListener('click', function() {
  toggleMostrar('root', 'mostrar-data'); //Este es para mostrar y no mostrar la data
  toggleMostrar("embedim--snow", "mostrar"); //Este es para mostrar y no mostrar la nieve
  toggleMostrar("calculation", "mostrar-grafica"); //Este es para mostrar y no mostrar la gráfica
  toggleMostrar("return","elpromedio");
  showMessage();//Eliminar mensaje"no se encontraron resultado"
});

function bootnretunn(){
  owlButton.click();
}


// Obtener el boton de X
// Agregar un evento click a este boton X


function closeFilter() {
  closeCheckbox.click();
}

function toggleMostrar(id, clase) {
  const element = document.getElementById(id);
  const classes = element.classList;
  
  if (clase !== "mensaje") { // Verifica si la clase es "mensaje"
    if (classes.length === 0) {
      element.classList.add(clase);
    } else {
      element.classList.remove(clase);
    }
  }
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
  renderItems(datosOrdenados);
  showMessage(); 
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

function showMessage() {
  const messageElement = document.getElementById("mensaje");
  if (!messageElement) {
    return;
  }

  const datosFiltrados = filtrar(); // Suponiendo que tienes una función filtrar() definida

  if (datosFiltrados.length === 0 && !calculationElement.classList.contains("mostrar-grafica")) {
    messageElement.innerText = "No se encontraron resultados.";
  } else {
    messageElement.innerText = ""; // Limpiar el mensaje si hay resultados o si se está mostrando la sección de cálculo del promedio
  }
}
