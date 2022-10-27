import pokemon from './data/pokemon/pokemon.js';
const data = pokemon;
export const datos2= data.pokemon;
function arrayD() {
   const datos = data.pokemon;
   return datos;
}
const ordenarAz = () => {
  const ordenar = datos2.sort((a, b) =>{
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
 //Filtra la data
  /*filterData(data, condition){
  
  }*/
/*calculos estadisticos
  computeStats(data);
*/
export {arrayD, ordenarAz};