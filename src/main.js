import pokemon from './data.js';


const data = pokemon;
const arrayD = data.pokemon;
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
 arrayD.forEach(element => {
   console.log(element)
   
   $(".flex").insertAdjacentHTML("beforeend", tarjetas(element))
})


        
     

/*$(".cards").innerHTML= pokemones;
$(".cards").innerHTML= fotos;
$(".cards").innerHTML= fuerza;
$(".cards").innerHTML= debil;
$(".cards").innerHTML= captura;
$(".cards").innerHTML= huida;*/
