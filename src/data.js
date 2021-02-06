import data from './data/pokemon/pokemon.js';

export const pokemons = data.pokemon;

// Función de imprimir toda la data
const container = document.getElementById('pokemonlist');
console.log(pokemons);
// eslint-disable-next-line array-callback-return
export const allPokemons = pokemons.map((pokemon) => {
  const tarjetas = `
  <div class="card"> 
    <img src="${pokemon.img}">
  <p class="name">${pokemon.num} ${pokemon.name}</p>
  <p class="type">Tipo: ${pokemon.type.join(', ')}</p>
  <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
  <div class="footer-card">
  <span class="generation">${pokemon.generation.name}</span>
  </div>
  </div>
`;console.log(tarjetas);
  container.insertAdjacentHTML('beforeend', tarjetas);
});

// Función de filtrado de data por tipo//
export const filterByType = (type) => { // type = 'poison'
  const pokemonsByType = pokemons.filter((pokemon) => pokemon.type.includes(type));

  return pokemonsByType;
};

console.log(filterByType('poison'));
// Función de ordenado alfabeticamente
export const changeOrder = (x, y) => {
  const myorderlist = pokemons.sort((a, b) => {
    if (a.name > b.name) {
      const primer = x;
      return primer;
    }
    if (a.name < b.name) {
      const second = y;
      return second;
    }
    return 0;
  }); return myorderlist;
}; console.log(changeOrder(1, -1));

// Función de Ordenado 1-251
export const numberedList = (x, y) => {
  const numberedOrder = pokemons.sort((a, b) => {
    if (a.num > b.num) {
      const orderDefine = x;
      return orderDefine;
    }
    if (a.num < b.num) {
      const orderDefinetwo = y;
      return orderDefinetwo;
    }
    return 0;
  }); return numberedOrder;
}; console.log(numberedList(1, -1));

export const filterByRarity = (pokemonrarity) => {
  // eslint-disable-next-line max-len
  const pokemonsRarity = pokemons.filter((pokemon) => pokemon.pokemon_rarity.includes(pokemonrarity));

  return pokemonsRarity;
}; console.log(filterByRarity('legendary'));
