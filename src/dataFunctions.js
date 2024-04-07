// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data,filterBy,value) => {
  return data.filter(personaje => personaje['facts'][filterBy] === value);
};

export const filterDataByRaza = (data,filterBy,value) => {
  return data.filter(raza => raza['facts'][filterBy] === value);
};




