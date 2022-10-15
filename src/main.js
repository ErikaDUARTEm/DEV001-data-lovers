import pokemon from './data.js';
import {personajes} from './data.js';

const data = pokemon;
const arrayD = data.pokemon;
 //arrayD.forEach(pokemon => pokemon[]) 
 
 let pokemones = arrayD.map(personajes).join(" ");
 console.log(arrayD);
 

    
 
 
 /*let filtro = pokemon.name;
 function filterData(pokemones, filtro) {
    if(filtro === pokemones){
        return pokemones[filtro];
    } else if (filtro != pokemones){
       return console.log("El nombre del pokemon no existe");
    }
 };
 console.log(filterData());*/
 
   
    

 

 document.querySelector(".tarjetas").innerHTML= pokemones;
 