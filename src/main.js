import pokemon from './data/pokemon/pokemon.js';
import {arrayD, ordenarAz, ordenarZa, nombres, filterTipos} from './data.js';

const $ = (selector) => document.querySelector(selector);
// tarjetas de la pantalla principal
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
};
// recorre data y crea las tarjetas de la pantalla principal
arrayD(pokemon).forEach(element => {   
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));  
});
  // evento que activa el botón de ordenar de la Az
$(".ordenar").addEventListener("click", () => {
   $(".flex").innerHTML = "";
   const arrayOrdenado = ordenarAz(pokemon.pokemon);
   arrayOrdenado.forEach(element => {
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
 })
});
// evento que activa el botón de ordenar de la Za
$(".ordenar2").addEventListener("click", () => {
   $(".flex").innerHTML = "";
   const arrayDesordenado = ordenarZa(pokemon.pokemon);
   arrayDesordenado.forEach(element => {
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
   })  
});
// tarjeta que se abre al buscar por nombre.
const tarjetasDetalles = (pokemon) => {
   const cardtipos =`
   <article class="cardTipos">
   <div><i class="fa-solid fa-x" id="cerrar"></i></div>
   <div class="cardTipos-imagen">
      <img src="${pokemon.img}">
   </div>
   <div class="cardTipos-title">
      <p>${pokemon.name}  ${pokemon.num}</p>
   </div>
   <div class="tipo">
     <p> Tipo: ${pokemon.type}.</p>
     <p> Altura: ${pokemon.size.height} Peso: ${pokemon.size.weight}</p>
   </div>
   <div class ="resistencia">
      <p>Fortalezas: ${pokemon.resistant}</p>
   </div>
   <div class = "debilidades">
      <p> Debilidades: ${pokemon.weaknesses}</p>
   </div>
   <div class ="about">
      <p>Descripción:<br> ${pokemon.about}</p>
   </div>
   </article>`
   return(cardtipos);
};
const buscador = $(".buscador");
// Esta funcion es para que al darle click a la X de la tarjeta detallada, cierre 
//y envie a pantalla principal además de borrar el search.
const cards = ()=>{
  $("#cerrar").addEventListener("click", ()=>{
    arrayD(pokemon).forEach (element => {
    $(".flex2").innerHTML ="";
    $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
    buscador.value = "";
    })
  })
}; 
// funcion que llama al filtro nombres y lo conecta con la barra buscadora.
const nombres2 = () => {
  let input= buscador.value.toLowerCase();
  nombres(pokemon, input).forEach (element => {
   $(".flex").innerHTML =""; 
   $(".flex2").innerHTML="";
   $(".flex2").insertAdjacentHTML("beforeend", tarjetasDetalles(element));
   })
   if(nombres(pokemon,input).length === 1){
     cards();
  }
};
$(".buscador").addEventListener("keydown", nombres2);
//Tarjeta que muestra a el pokémon con su tipo
const tarjetasTipos = (pokemon) => {
const card =`
  <article class="card">
  <div class="card-imagen">
     <img src="${pokemon.img}">
  </div>
  <div class="card-body-title">
     <p>${pokemon.name}</p>
  </div>
  <div class="card-body-tipo">
     <p class="letras">${pokemon.type}</p>
  </div>
  </article>`
   return(card);
};
//hace que al seleccionar en el select de tipos opcion todos se devuelva a la pantalla principal
const cerrarTipos = () => {
  let valorTodos = $("#selectorTipos").value;
  if(valorTodos == "todos"){
    arrayD(pokemon).forEach (element => {
      $(".flex2").innerHTML ="";
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
  })
 }
};
//evento que se activa al seleccionar el tipo
$("#selectorTipos").addEventListener("change", ()=>{
   $(".flex2").innerHTML="";
   let valorOpciones = $("#selectorTipos").value;
   filterTipos(pokemon, valorOpciones).forEach(element => {
       $(".flex").innerHTML="";
       $(".flex2").insertAdjacentHTML("beforeend",tarjetasTipos(element));
  })
  cerrarTipos();
});