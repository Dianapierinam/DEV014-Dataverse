import { filterData, sortData,computeStats } from '../src/dataFunctions.js';
import data from './data.js';

console.log(data);

describe('filterData', () => {
  it('filtrar data por elementos', () => {
    // Definir los datos de prueba
    const testData = [
      { name: 'Harry Potter', facts: { casaDeOrigen: 'gryffindor' } },
      { name: 'Luna Lovegood', facts: { casaDeOrigen: 'ravenclaw' } },
      { name: 'Severus Snape', facts: { casaDeOrigen: 'slytherin' } }
    ];

    // Llamar a la función filterData con los datos de prueba
    const filteredData = filterData(testData, 'casaDeOrigen', 'gryffindor');

    // Verificar si los datos filtrados son correctos
    expect(filteredData).toEqual([
      { name: 'Harry Potter', facts: { casaDeOrigen: 'gryffindor' } }
    ]);
  });
});


describe('sortData', () => {
  it('sorts the data by a given criteria and order', () => {
    // Definir los datos de prueba sin las edades
    const testData = [
      { name: 'Luna Lovegood' },
      { name: 'Harry Potter' },
      { name: 'Severus Snape' }
    ];

    // Llamar a la función sortData con los datos de prueba
    const sortedDataAsc = sortData(testData, 'name', 'asc');
    const sortedDataDesc = sortData(testData, 'name', 'desc');

    // Verificar si los datos están ordenados correctamente en orden ascendente
    expect(sortedDataAsc).toEqual([
      { name: 'Harry Potter' },
      { name: 'Luna Lovegood' },
      { name: 'Severus Snape' }
    ]);

    // Verificar si los datos están ordenados correctamente en orden descendente
    expect(sortedDataDesc).toEqual([
      { name: 'Severus Snape' },
      { name: 'Luna Lovegood' },
      { name: 'Harry Potter' }
    ]);
  });
});


describe('computeStats', () => {
  it('calculates the average year of birth from the provided data', () => {
    // Definir los datos de prueba
    const testData = [
      { name: 'Harry Potter', facts: { yearOfBirth: '1990' } },
      { name: 'Luna Lovegood', facts: { yearOfBirth: '1985' } },
      { name: 'Severus Snape', facts: { yearOfBirth: '1995' } }
    ];

    // Llamar a la función computeStats con los datos de prueba
    const averageYear = computeStats(testData);

    // Verificar si el cálculo del año promedio es correcto
    expect(averageYear).toBe(1990); // El resultado esperado se redondea a 1990
  });
});
