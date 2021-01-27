import data from './data/pokemon/pokemon.js'
export const pokemons = data.pokemon;
const container = document.getElementById("pokemonlist");
console.log(pokemons);
export const allPokemons = pokemons.map(function(pokemon){
  let tarjetas = `
  <div> 
  <img src="${pokemon.img}">
  <p>${pokemon.name}</p>
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