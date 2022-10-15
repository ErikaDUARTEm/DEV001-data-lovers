import pokemon from './data/pokemon/pokemon.js';
const data = pokemon;
const arrayD = data.pokemon;

export function personajes(pokemon){
  return [pokemon.name, pokemon.img, pokemon.resistant, 
    pokemon.weaknesses, pokemon.encounter["base-capture-rate"], 
    pokemon.encounter["base-flee-rate"]]
}

/*export function fortaleza(pokemon){
  return [pokemon.resistant];
}

export function debil(pokemon){
  return [pokemon.weaknesses];
}*/
  //Filtra la data
/*filterData(data, condition) {

  }
//ordena la data
  sortData(data, sortBy, sortOrder)
  arrayD.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB){
        return -1;
      }
      if (nameA > nameB){
        return 1;
      } else {
        return 0;
      }
    }); 

//calculos estadisticos
  computeStats(data)
}*/
export default pokemon;