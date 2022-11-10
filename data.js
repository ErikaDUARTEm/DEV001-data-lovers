//función de mostrar la data
function arrayD(data) {
   const datos = data.pokemon;
   return datos;
}
//función de ordenar de la A-Z
const ordenarAz = (data) => {
  let arrayAOrdenar= data;
  const ordenar = arrayAOrdenar.sort((a, b) => {
    if(a.name < b.name) {
      return -1;
  }
    if (a.name > b.name) {
      return 1;
  } else {
      return 0;
     }
  });
  return ordenar;
};
//función de ordenar de la Z-A
const ordenarZa = (data) => {
  let arrayDesordenar = data;
  const ordenar = arrayDesordenar.sort((a, b) => {
    if(a.name > b.name) {
      return -1;
  }
    if (a.name < b.name) {
      return 1;
  } else {
      return 0;
   }
 })
  return ordenar;
};
//función de filtrar por nombre para el buscador
const nombres = function(data, input) {
  let datosNombres = data.pokemon;
  let todos = datosNombres.filter( name => {
     return name.name === input;
  })
   return todos;
};
//función de filtrar por tipos para el select
const filterTipos = (data, input) => {
  let datosTipos = data.pokemon;
  let todos = datosTipos.filter(type => { 
     let todas = (type.type[0] === input || (type.type[1] === input));
     return todas;
 })
  return todos;
};

export {arrayD, ordenarAz, ordenarZa, nombres,filterTipos};