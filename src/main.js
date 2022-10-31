import {arrayD, ordenarAz, ordenarZa, datos2} from './data.js';
const $ = (selector) => document.querySelector(selector);
const tarjetas = (pokemon) => {
   const card =`
   <article class="card">
   <div class="card-imagen">
      <img src="${pokemon.img}">
   </div>
   <div class="card-body-title">
      <p>${pokemon.name}</p>
   </div>
   </article>`
   return(card);
 }
arrayD().forEach(element => {   
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));  
});

$(".ordenar").addEventListener("click", () => {
   $(".flex").innerHTML = "";
   const arrayOrdenado = ordenarAz();
   arrayOrdenado.forEach(element => {
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
 })
});
$(".ordenar2").addEventListener("click", () => {
   $(".flex").innerHTML = "";
   const arrayDesordenado = ordenarZa();
   arrayDesordenado.forEach(element => {
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
   })  
});
const dato = datos2;
const tipos = (pokemon) => {
   const cardtipos =`
   <article class="cardTipos">
   <div class="cardTipos-imagen">
      <img src="${pokemon.img}">
   </div>
   <div class="cardTipos-title">
      <p>${pokemon.name}  ${pokemon.num}</p>
   </div>
   <div class="tipo">
      <p>Tipo: ${pokemon.type}</p>
   </div>
   <div class ="resistencia">
      <p>Fortalezas: ${pokemon.resistant}</p>
   </div>
   <div class ="about">
      <p>Descripción: ${pokemon.about}</p>
   </div>
   </article>`
   return(cardtipos);
 }

 const tipoHierba =  function() {
   let todos = dato.filter( type => { 
      let todas = (type.type[0] === "grass") || (type.type[1] === "grass");
      return todas;
  })
   return todos;
}
tipoHierba();
 //console.log(tipoHierba());

 const buscador = $(".buscador");
 const nombres = function() {
   let todos = dato.filter( name => {
      return name.name === buscador.value;   
    })
    return todos;
 }
const nombres2 = () => {
   nombres().forEach (element => {
   $(".flex").innerHTML =""; 
   $(".flex").insertAdjacentHTML("beforeend",tipos(element));
  }) 
}
  $(".buscador").addEventListener("keydown", nombres2);
console.log(nombres2());
/*const fortalezas = dato.find( resistant => {
    return resistant.resistant[0];
 });
 console.log(fortalezas);*/