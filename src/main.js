import pokemon from './data/pokemon/pokemon.js';
import {arrayD, ordenarAz, ordenarZa, nombres, tipoHierba} from './data.js';


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
   arrayD(pokemon).forEach(element => {   
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));  
  });
$(".ordenar").addEventListener("click", () => {
   $(".flex").innerHTML = "";
   const arrayOrdenado = ordenarAz(pokemon.pokemon);
   arrayOrdenado.forEach(element => {
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
 })
});
$(".ordenar2").addEventListener("click", () => {
   $(".flex").innerHTML = "";
   const arrayDesordenado = ordenarZa(pokemon.pokemon);
   arrayDesordenado.forEach(element => {
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element));
   })  
});
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
      <p>Tipo: ${pokemon.type}</p>
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
const cards = ()=>{
   $("#cerrar").addEventListener("click", ()=>{
      arrayD(pokemon).forEach (element => {
      $(".flex2").innerHTML ="";
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element)); 
      })
   });
  };
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
   }
  $(".buscador").addEventListener("keydown", nombres2);

  
  console.log(tipoHierba(pokemon));
/*const datos = pokemon.pokemon.filter( name => {
   return name.name === pokemon;
})
console.log(datos);
*/
// codigo q funciona pero sin funcion pura


/*const nombres = function() {
   let todos = dato.filter( name => {
   return name.name === buscador.value;
    })
    return todos;
 }
const nombres2 = () => {
   nombres().forEach (element => {
   $(".flex").innerHTML =""; 
   $(".flex2").insertAdjacentHTML("beforeend",informacion(element));
    })
  }

  $(".buscador").addEventListener("keydown", nombres2);
 
  const cards = ()=>{
   $(".flex2").addEventListener("click", ()=>{
      arrayD().forEach (element => {
      $(".flex2").innerHTML ="";
      $(".flex").insertAdjacentHTML("beforeend", tarjetas(element)); 
      })
   });
  };
  cards();
*/
 
 //g(tipoHierba());
 //g(dato);