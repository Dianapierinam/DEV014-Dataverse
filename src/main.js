import { renderItems } from './view.js';
import data from './data/dataset.js';

const root = document.getElementById('root'); // Asegúrate de tener un elemento con id="root" en tu HTML
const ulElement = renderItems(data);
root.appendChild(ulElement);

