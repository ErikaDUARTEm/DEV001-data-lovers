import arrayD from './data.js';

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
})