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
});
//Función para mantener la misma imagen después del mouseleave//
function mouseLeaveAnimation() {
    document.getElementById("back").style.backgroundColor = "#f3fcff";
    document.getElementById("image").style.backgroundImage = "url('./images/pokebolaturned.gif')";
}
//Función de animación para Gifs//
const botonesFiltrado = document.querySelectorAll('.buttonfilter')
botonesFiltrado.forEach(function (boton) {
    boton.addEventListener('mouseleave', mouseLeaveAnimation)
    boton.addEventListener('mouseover', (event) => {
        console.log(event.target)
        const backgroundImage = event.target.dataset.background
        document.getElementById("image").style.backgroundImage = `url('./images/${backgroundImage}.gif')`;
    })
    // refactorización para botones pantalla 1
    boton.addEventListener('click', (event) =>{
      const parametroFiltro = event.target.value;
      const container = document.getElementById("pokemonlist");
      const pokemonsFiltered = filterByType(parametroFiltro);
      window.scrollTo({
        top: container.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
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

    })
})
//Función para el filtro de tipo en el Selector//
const selector = document.getElementById("selectorType")

selector.addEventListener('change', function(event) {
    const container = document.getElementById("pokemonlist");
    const value = event.target.value
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

// Función de Orden alfabético 
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
})
