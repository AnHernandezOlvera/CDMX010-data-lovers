import {filterByType, pokemons} from './data.js';
document.getElementById("insect-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "black";
    document.getElementById("image").style.backgroundImage = "url('./images/Yanma.gif')";
});
document.getElementById("insect-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "yellow";
    document.getElementById("image").style.backgroundImage = "url('./images/Charmander.gif')";
});
const buttonWater = document.getElementById('water-button');
buttonWater.addEventListener("click",function(){
    const container = document.getElementById("pokemonlist");
    const pokemonesAgua = filterByType(buttonWater.value);
    const waterPokemon = pokemonesAgua.map(function (pokemon) {
        return`
        <div class="card"> 
    <img src="${pokemon.img}">
  <p class="name">${pokemon.num} ${pokemon.name}</p>
  <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
  <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
  <div class="footer-card">
  <span class="generation">${pokemon.generation.name}</span>
  </div>
  </div>
`;  
}); container.innerHTML=waterPokemon.join('');


    console.log(pokemonesAgua);
 
})