// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data,filterBy,value) => {
  return data.filter(personaje => personaje['facts'][filterBy] === value);
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'name') {
    if (sortOrder === 'asc') {
      return data.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return data.slice().sort((a, b) => b.name.localeCompare(a.name));
    }
  } else {
    if (sortOrder === 'desc') {
      return data.slice().sort((a, b) => b[sortBy] - a[sortBy]);
    } else {
      return data.slice().sort((a, b) => a[sortBy] - b[sortBy]);
    }
  }
}

export const computeStats = (data) => {
  const validYears = data.map((item) => {
    const yearOfBirth = item.facts.yearOfBirth;

    if (yearOfBirth && !isNaN(yearOfBirth)) {
      return parseInt(yearOfBirth); 
    }
    return null; 
  }).filter((year) => year !== null); 

  const totalPeople = validYears.length;
  const totalYearSum = validYears.reduce((sum, year) => {
    sum += year; 
    return sum;
  }, 0);

  const averageYear = (totalYearSum / totalPeople);
  const averageYearInteger = parseInt(averageYear);
  return averageYearInteger;
};










