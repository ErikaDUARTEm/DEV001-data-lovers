import pokemon from './data/pokemon/pokemon.js';
const data = pokemon;
export const datos2= data.pokemon;

function arrayD() {
   const datos = data.pokemon;
   return datos;
}
const ordenarAz = (arrayAOrdenar = datos2) => {
  const ordenar = arrayAOrdenar.sort((a, b) =>{
    if(a.name < b.name) {
      return -1;
    }
    if (a.name > b.name){
      return 1;
    } else {
      return 0;
     }
  });
  return ordenar;
}
const ordenarZa = (arrayDesordenar = datos2) => {
  const ordenar = arrayDesordenar.sort((a, b) =>{
    if(a.name > b.name) {
      return -1;
    }
    if (a.name < b.name){
      return 1;
    } else {
      return 0;
     }
  });
  return ordenar;
}



export {arrayD, ordenarAz, ordenarZa};