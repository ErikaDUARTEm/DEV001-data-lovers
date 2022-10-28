import {arrayD, ordenarAz, ordenarZa} from '../src/data.js';

describe('arrayD', () => {
  it('Debería ser una function', () => {
    expect(typeof arrayD).toEqual('function');
  });
  it('Debería retornar un array con 251 pokemones', () => {
    expect(arrayD()).toHaveLength(251);
  });
});

describe('ordenarAz', () => {
  it('Debería ser una function', () => {
    expect(typeof ordenarAz).toBe('function');
  });
  it('Debería retornar un array ordenado de la A a la Z', () => {
     const nombrePruebas = [
      {name: "Maria"}, {name: "Luisa"}, {name:"Christian"}  
    ]
    const resultado = [{name:"Christian"}, {name: "Luisa"}, {name: "Maria"}]  
    expect(ordenarAz(nombrePruebas)).toEqual(resultado)
   })
 });
 
 describe('ordenarZa', () => {
  it('Debería ser una function', () => {
    expect(typeof ordenarZa).toBe('function');
  });
  it('Debería retornar un array ordenado de la Z a la A', () => {
     const nombres = [
      {name:"Christian"}, {name: "Luisa"}, {name: "Maria"}  
    ]
    const resultado = [{name: "Maria"}, {name: "Luisa"}, {name: "Christian"}]  
    expect(ordenarZa(nombres)).toEqual(resultado)
   })
 });