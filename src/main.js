import {filterByType, pokemons} from './data.js';
const buttonWater = document.getElementById('water-button');
buttonWater.addEventListener("click",function(){
    const contenedor = document.getElementById("pokemonlist");
    const pokemonesAgua = filterByType(buttonWater.value);
    const waterPokemon = pokemonesAgua.map(function (pokemon) {
        return`
        <div> 
        <img src="${pokemon.img}">
        <p>${pokemon.name}</p>
        </div>
`; 
});
    contenedor.innerHTML=waterPokemon.join('');
    console.log(pokemonesAgua);
 
})