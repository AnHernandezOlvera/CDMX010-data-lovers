import {
  filterByType, changeOrder, numberedList, pokemons, filterByRarity,
// eslint-disable-next-line import/extensions
} from './data.js';
// menu responsive
const menu = document.getElementById('menuIcon');
menu.addEventListener('click', () => {
  const x = document.getElementById('topnav');
  if (x.className === 'startmenu') {
    x.className += 'responsive';
  } else {
    x.className = 'startmenu';
  }
});
// Función para mostrar la data al cargar página
window.onload = function print() {
  const container = document.getElementById('pokemonlist');
  const allPokemons = pokemons.map((pokemon) => `
    <div class="card"> 
    <img src="${pokemon.img}">
    <p class="name">${pokemon.num} ${pokemon.name}</p>
    <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
    <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
    <div class="footer-card">
    <span class="generation">${pokemon.generation.name}</span>
    </div>
    </div>
`); container.innerHTML = allPokemons.join('');
};
// Función para mantener la misma imagen después del mouseleave
function mouseLeaveAnimation() {
  document.getElementById('back').style.backgroundColor = '#f3fcff';
  document.getElementById('image').style.backgroundImage = "url('./images/pokebolaturned.gif')";
}
// Función de animación para Gifs
const botonesFiltrado = document.querySelectorAll('.buttonfilter');
botonesFiltrado.forEach((boton) => {
  boton.addEventListener('mouseleave', mouseLeaveAnimation);
  boton.addEventListener('mouseover', (event) => {
    // eslint-disable-next-line no-console
    console.log(event.target);
    const backgroundImage = event.target.dataset.background;
    document.getElementById('image').style.backgroundImage = `url('./images/${backgroundImage}.gif')`;
  });
  // refactorización para botones pantalla 1
  boton.addEventListener('click', (event) => {
    const parametroFiltro = event.target.value;
    const container = document.getElementById('pokemonlist');
    const pokemonsFiltered = filterByType(parametroFiltro);
    window.scrollTo({
      top: container.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
    const typeSelect = pokemonsFiltered.map((pokemon) => `
        <div class="card"> 
        <img src="${pokemon.img}">
        <p class="name">${pokemon.num} ${pokemon.name}</p>
        <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
        <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
        <div class="footer-card">
        <span class="generation">${pokemon.generation.name}</span>
        </div>
        </div>
`); container.innerHTML = typeSelect.join('');
  });
});
// Función para el filtro de tipo en el Selector//
const selector = document.getElementById('selectorType');

selector.addEventListener('change', (event) => {
  const container = document.getElementById('pokemonlist');
  const { value } = event.target;
  const pokemonsFiltered = filterByType(value);
  const typeSelect = pokemonsFiltered.map((pokemon) => `
        <div class="card"> 
        <img src="${pokemon.img}">
        <p class="name">${pokemon.num} ${pokemon.name}</p>
        <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
        <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
        <div class="footer-card">
        <span class="generation">${pokemon.generation.name}</span>
        </div>
        </div>
`); container.innerHTML = typeSelect.join('');
  // pokemonsFiltered generar HTML como cards u otro y luego pasarlo a el contenedor
  // document.getElementById('container').innerHTML =
});

// Función de Orden alfabético
const orderDefine = document.getElementById('orderSelect');
orderDefine.addEventListener('change', (event) => {
  const container = document.getElementById('pokemonlist');
  const { value } = event.target;
  if (value === 'A-Z') {
    const ascendente = changeOrder(1, -1);
    const listaAscendente = ascendente.map((pokemon) => `
            <div class="card"> 
            <img src="${pokemon.img}">
            <p class="name">${pokemon.num} ${pokemon.name}</p>
            <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
            <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
            <div class="footer-card">
            <span class="generation">${pokemon.generation.name}</span>
            </div>
            </div>
    `); container.innerHTML = listaAscendente.join('');
  }
  if (value === 'Z-A') {
    const descendente = changeOrder(-1, 1);
    const listaDescendente = descendente.map((pokemon) => `
            <div class="card"> 
            <img src="${pokemon.img}">
            <p class="name">${pokemon.num} ${pokemon.name}</p>
            <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
            <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
            <div class="footer-card">
            <span class="generation">${pokemon.generation.name}</span>
            </div>
            </div>
    `); container.innerHTML = listaDescendente.join('');
  }
});

const numbered = document.getElementById('numberOrder');
numbered.addEventListener('change', (event) => {
  const container = document.getElementById('pokemonlist');
  const order = event.target.value;
  if (order === 'increase') {
    const increased = numberedList(1, -1);
    const numberedPokemons = increased.map((pokemon) => `
            <div class="card"> 
            <img src="${pokemon.img}">
            <p class="name">${pokemon.num} ${pokemon.name}</p>
            <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
            <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
            <div class="footer-card">
            <span class="generation">${pokemon.generation.name}</span>
            </div>
            </div>
    `); container.innerHTML = numberedPokemons.join('');
  }
  if (order === 'decrease') {
    const decrease = numberedList(-1, 1);
    const numberedPokemons = decrease.map((pokemon) => `
             <div class="card"> 
             <img src="${pokemon.img}">
             <p class="name">${pokemon.num} ${pokemon.name}</p>
             <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
             <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
             <div class="footer-card">
             <span class="generation">${pokemon.generation.name}</span>
             </div>
             </div>
     `); container.innerHTML = numberedPokemons.join('');
  }
});

const showAll = document.getElementById('all-button');
showAll.addEventListener('click', () => {
  const container = document.getElementById('pokemonlist');
  const dataPokemon = pokemons;
  window.scrollTo({
    top: container.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
  const showAllPokemons = dataPokemon.map((pokemon) => `
    <div class="card"> 
    <img src="${pokemon.img}">
    <p class="name">${pokemon.num} ${pokemon.name}</p>
    <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
    <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
    <div class="footer-card">
    <span class="generation">${pokemon.generation.name}</span>
    </div>
    </div>
`); container.innerHTML = showAllPokemons.join('');
});
// Función de selector rareza
const rarity = document.getElementById('raritySelector'); // Aquí tomamos el id del boton

rarity.addEventListener('change', (event) => { // rarity siempre va a cambiar en función del valor seleccionado
  const container = document.getElementById('pokemonlist'); // constante del contenedor en donde se imprime la data
  // La rareza seleccionada corresponderá a la tomada por el id
  const raritySelected = event.target.value;
  // El filtrado por rareza con el parametreo que fue seleccionado
  const rarityFiltered = filterByRarity(raritySelected);
  const pokemonRarity = rarityFiltered.map((pokemon) => `
  <div class="card"> 
  <img src="${pokemon.img}">
  <p class="name">${pokemon.num} ${pokemon.name}</p>
  <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
  <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
  <div class="footer-card">
  <span class="generation">${pokemon.generation.name}</span>
  </div>
  </div>
`); container.innerHTML = pokemonRarity.join('');
});
