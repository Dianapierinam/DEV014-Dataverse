export const renderItems = (data) => {
  const root = document.getElementById('root');
  const cardListElement = document.createElement('ul');
  cardListElement.setAttribute('id', 'card-list');
  cardListElement.classList.add('cardList');
  

  if (root.hasChildNodes()) {
    root.innerHTML = ''; 
  }
  data.forEach(personaje => { 
    const cardElement = document.createElement('li');
    const liName = document.createElement('h1');
    const liImg = document.createElement('img');
    const liDescription = document.createElement('p');
    cardElement.setAttribute('itemtype', 'Person');
    cardElement.setAttribute('itemscope', '');
    liName.setAttribute('itemprop', "name");
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