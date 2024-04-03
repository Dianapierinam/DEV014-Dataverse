export const renderItems = (data) => {
  const cardContainer = document.createElement('div'); // Crear un contenedor para las tarjetas
  cardContainer.classList.add('card-container'); // Agregar la clase 'card-container' al contenedor

  data.forEach(personaje => {
    const cardElement = document.createElement('div');
    const liImg = document.createElement('img');
    const liDescription = document.createElement('p');

    cardElement.textContent = personaje.name;
    liImg.src = personaje.imageUrl;
    liDescription.textContent = personaje.shortDescription;
    cardElement.classList.add('card');
    cardElement.appendChild(liImg);
    cardElement.appendChild(liDescription);
    cardContainer.appendChild(cardElement); // Agregar la tarjeta al contenedor
  });

  return cardContainer; // Devolver el contenedor que contiene todas las tarjetas
}



