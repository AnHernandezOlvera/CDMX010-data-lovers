import {URL, printData} from './data.js';
//const container= document.getElementById("pokemonlist");
document.getElementById("insect-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "black";
    document.getElementById("image").style.backgroundImage = "url('./images/Yanma.gif')";
});
document.getElementById("insect-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "yellow";
    document.getElementById("image").style.backgroundImage = "url('./images/Charmander.gif')";
});




// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
/*
import { example, filterByType, pokemons, prueba } from './data.js';
// import data from './data/lol/lol.js';

import data from './data/pokemon/pokemon.js';
console.log(example, data);
document.getElementById("resultado")
document.getElementById("pokemon");
let listado = document.getElementById('pokemonlist');
listado.innerHTML = prueba;
console.log(prueba);

const selector = document.getElementById("selector")

selector.addEventListener('change', function(event) {
    const value = event.target.value // poison, grass
    const pokemonsFiltered = filterByType(value)
    console.log(pokemonsFiltered);
    // pokemonsFiltered generar HTML como cards u otro y luego pasarlo a el contenedor
    //document.getElementById('container').innerHTML = 
});

*/