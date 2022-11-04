
function arrayD(data) {
   const datos = data.pokemon;
   return datos;
}
const ordenarAz = (data) => {
  let arrayAOrdenar= data;
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
const ordenarZa = (data) => {
  let arrayDesordenar = data;
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

const nombres = function(data, input) {
  let datosNombres = data.pokemon;
  let todos = datosNombres.filter( name => {
     return name.name === input;
   })
   return todos;
}
const tipoHierba =  function(data, input) {
  let todos = data.pokemon.filter( type => { 
     let todas = (type.type[0] === input || (type.type[1] === input));
     return todas;
 })
  return todos;
}


export {arrayD, ordenarAz, ordenarZa, nombres,tipoHierba};
