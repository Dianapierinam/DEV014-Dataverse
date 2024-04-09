//import * as datos from "./data/dataset.js";

export const renderItems = (data) => {
  const root = document.getElementById('root');
  const cardListElement = document.createElement('ul');

  cardListElement.classList.add('cardList');

  //Aplicar el atributo al elemento li
  //cardListElement.setAttribute('itemtype')

  // Verifica si el nodo 'root' tiene hijos y los elimina si existen
  if (root.hasChildNodes()) {
    root.innerHTML = ''; // Elimina todos los hijos del nodo 'root'
  }


  data.forEach(personaje => { 
    const cardElement = document.createElement('li');
    const liName = document.createElement('h1');
    const liImg = document.createElement('img');
    const liDescription = document.createElement('p');


    liName.textContent = personaje.name;
    liDescription.textContent = personaje.shortDescription;
    liImg.src = personaje.imageUrl;
  
    cardElement.classList.add('card');
    
    cardElement.appendChild(liImg);
    cardElement.appendChild(liName);
    cardElement.appendChild(liDescription);
    
    cardListElement.appendChild(cardElement);
  });

  root.appendChild(cardListElement);
  return cardListElement
}

