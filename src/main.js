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

//const container= document.getElementById("pokemonlist");
document.getElementById("insect-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/Yanma.gif')";
});
document.getElementById("insect-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/pokebolaturned.gif')";
});
document.getElementById("grass-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/Ivysaur.gif')";
});
document.getElementById("grass-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/pokebolaturned.gif')";
});

document.getElementById("water-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/Gyarados.gif')";
});
document.getElementById("water-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/pokebolaturned.gif')";
});
document.getElementById("fire-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/Charmander.gif')";
});
document.getElementById("fire-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/pokebolaturned.gif')";
});

document.getElementById("psychic-button").addEventListener("mouseover", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/Mew.gif')";
});
document.getElementById("psychic-button").addEventListener("mouseleave", function(){
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/pokebolaturned.gif')";
});

