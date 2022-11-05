import pokemon from '../src/data/pokemon/pokemon.js';
import {arrayD, filterTipos, nombres, ordenarAz, ordenarZa} from '../src/data.js';

describe('arrayD', () => {
  it('Debería ser una function', () => {
    expect(typeof arrayD).toBe('function');
  });
  it('Debería retornar un array con 251 pokemones', () => {
    expect(arrayD(pokemon)).toHaveLength(251);
  });
});

describe('ordenarAz', () => {
  it('Debería ser una function', () => {
    expect(typeof ordenarAz).toBe('function');
  });
  it('Debería retornar un array ordenado de la A a la Z', () => {
     const nombrePruebas = [
      {name: "Luisa"}, {name: "Luisa"}, {name: "Maria"}, {name:"Christian"}  
    ]
      const resultado = [{name:"Christian"}, {name: "Luisa"}, {name: "Luisa"}, {name: "Maria"}]  
      expect(ordenarAz(nombrePruebas)).toEqual(resultado)
   })
})
 
 describe('ordenarZa', () => {
  it('Debería ser una function', () => {
    expect(typeof ordenarZa).toBe('function');
  });
  it('Debería retornar un array ordenado de la Z a la A', () => {
     const nombres = [
      {name:"Christian"}, {name: "Maria"}, {name: "Luisa"},  {name: "Maria"}  
    ]
    const resultado = [{name: "Maria"}, {name: "Maria"}, {name: "Luisa"}, {name: "Christian"}]  
    expect(ordenarZa(nombres)).toEqual(resultado)
   })
 })

 describe('nombres', () => {
  it('Debería ser una function', () => {
    expect(typeof nombres).toBe('function');
  });
  it('Deberia retornar la información de lo que solicita en el input', () => {
    const data = {
      pokemon: [
      {name:"Christian"}, {name: "Maria"}, {name: "Luisa"}
    ]}
    const busqueda = "Maria";
    const resultado = [{name:"Maria"}];
    expect(nombres(data, busqueda)).toEqual(resultado)
  })
});
describe('filterTipos', () => {
  it('Debería ser una function', () => {
    expect(typeof filterTipos).toBe('function');
  });
  it('Deberia retornar la opción que se selecciona', () => {
    const data = {
      pokemon: [
      {name:"Christian",type:["water", "ice"]}, 
      {name: "Maria", type:["fire","flying"]}, 
      {name: "Luisa", type:["rock","water"]}
    ]}
    let selección = "water";
    const resultado = [{name:"Christian",type:["water", "ice"]}, {name: "Luisa", type:["rock","water"]}];
    expect(filterTipos(data, selección)).toEqual(resultado)
  })
});
