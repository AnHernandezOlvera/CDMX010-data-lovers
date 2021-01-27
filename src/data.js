import data from './data/pokemon/pokemon.js'
export const pokemons = data.pokemon;
const container = document.getElementById("pokemonlist");
console.log(pokemons);
export const allPokemons = pokemons.map(function(pokemon){
  let tarjetas = `
  <div class="card"> 
  <img src="${pokemon.img}">
  <p class="name">${pokemon.num} ${pokemon.name}</p>
  <p class="type">Tipo: ${pokemon.type}</p>
  <p class=physical>Peso: ${pokemon.size.weight} | Altura: ${pokemon.size.height}</p>
  <div class="footer-card">
  <span class="generation">${pokemon.generation.name}</span>
  <div>
  </div>
`;
container.insertAdjacentHTML("beforeend", tarjetas)
});
export const filterByType = (type) => { // type = 'poison'
  const pokemonsByType = pokemons.filter(function(pokemon) {
    return pokemon.type.includes(type)
  })

  return pokemonsByType
}

console.log(filterByType('poison'));