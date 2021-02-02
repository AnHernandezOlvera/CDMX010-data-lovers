import {filterByType, changeOrder} from './data.js';
//menu responsive
const menu = document.getElementById('menuIcon');
menu.addEventListener('click', function() {
let x = document.getElementById("topnav");
  if (x.className === "startmenu") {
    x.className += " responsive";
  } else {
    x.className = "startmenu";
  }
})
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
const selector = document.getElementById("selectorType")

selector.addEventListener('change', function(event) {
    const container = document.getElementById("pokemonlist");
    const value = event.target.value // poison, grass
    const pokemonsFiltered = filterByType(value)
    const typeSelect = pokemonsFiltered.map(function (pokemon) {
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
}); container.innerHTML=typeSelect.join('');
    // pokemonsFiltered generar HTML como cards u otro y luego pasarlo a el contenedor
    //document.getElementById('container').innerHTML = 
});

// aplicación de ordemiento en evento
const orderDefine = document.getElementById('orderSelect');
orderDefine.addEventListener('change', function (event) {
    const container = document.getElementById("pokemonlist");
    const value = event.target.value;
    if (value ==='A-Z'){
        const ascendente = changeOrder(1, -1);
        const listaAscendente = ascendente.map(function (pokemon) {
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
    }); container.innerHTML=listaAscendente.join('');
        
    }
    if (value ==='Z-A'){
        const descendente = changeOrder(-1, 1);
        const listaDescendente = descendente.map(function (pokemon) {
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
    }); container.innerHTML=listaDescendente.join('');
        
    }
})/* 
document.getElementById('orderSelect').addEventListener('change', function (event) {
    let value = event.target.value;
    if (value === "AZ") {
        const container= document.getElementById('pokemonlist');
        const ascendingList = orderlist.map(function (pokemon) {
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
    }); container.innerHTML=ascendingList.join('');
    
  } else if (event.target.value==='ZA'){

  }
    else {
    console.log('error');
  }
}) */

