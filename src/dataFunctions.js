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
  const validYears = data.map((item) => {
    const yearOfBirth = item.facts.yearOfBirth;

    // Verificar si el año de nacimiento es válido
    if (yearOfBirth && !isNaN(yearOfBirth)) {
      return parseInt(yearOfBirth); // Retornar el año de nacimiento como número
    }
    return null; // Retornar null para los años de nacimiento inválidos
  }).filter((year) => year !== null); // Filtrar los años de nacimiento válidos (no null)

  const totalPeople = validYears.length;
  const totalYearSum = validYears.reduce((sum, year) => {
    sum += year; // Sumar el año de nacimiento al total
    return sum;
  }, 0);

  const averageYear = (totalYearSum / totalPeople).toFixed(2);
  return averageYear;
};



