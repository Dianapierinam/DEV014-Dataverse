// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data,filterBy,value) => {
  return data.filter(personaje => personaje['facts'][filterBy] === value);
};

export const filterDataByOrder = (data,filterBy,value) => {
  return data.filter(asc => asc['facts'][filterBy]=== value);
}

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'name') {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    }
  } else {
    if (sortOrder === 'desc') {
      return data.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      return data.sort((a, b) => (b[sortBy] - a[sortBy]));
    }
  }
}

export const computeStats = (data) => {
  const totalPeople = data.length;
  const totalYearSum = data.reduce((sum, item) => {
    const yearOfBirth = item.facts.yearOfBirth;

    // Verificar si el año de nacimiento es válido
    if (yearOfBirth && !isNaN(yearOfBirth)) {
      sum += parseInt(yearOfBirth); // Sumar el año de nacimiento al total
    }
    return sum;
  }, 0);
  const averageYear = (totalYearSum / totalPeople).toFixed(2)
  return averageYear;
};



