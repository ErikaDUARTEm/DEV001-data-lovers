import pokemon from './data/pokemon/pokemon.js';
import {arrayD, ordenarAz, ordenarZa, nombres,tipoHierba} from './data.js';


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
 }
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
 }
const buscador = $(".buscador");
// Esta funcion es para que al darle click a la X de la tarjeta detallada, cierre y envie a todos las tarjetas.
const cards = ()=>{
   $("#cerrar").addEventListener("click", ()=>{
      arrayD(pokemon).forEach (element => {
      $(".flex2").innerHTML ="";
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
      })
   });
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
  //Filtro por tipo hierba 
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
      <p>${pokemon.type}</p>
   </div>
   </article>`
   return(card);
 }
   
  $("#selectorTipos").addEventListener("change", () =>{
     let valorOpciones = $("#selectorTipos").value;
      if(valorOpciones == "grass"){
          tipoHierba(pokemon, valorOpciones).forEach(element =>  {
             $(".flex").innerHTML="";
             $(".flex2").insertAdjacentHTML("beforeend", tarjetasTipos(element));
       });
       cards();    
    }
 })