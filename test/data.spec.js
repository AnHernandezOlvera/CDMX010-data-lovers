// eslint-disable-next-line import/extensions
import { filterByRarity, pokemons } from '../src/data.js';

describe('Función de filtrado por tipo', () => {
  it('is a function', () => {
    expect(typeof filterByRarity).toBe('function');
  });
  it('no es nulo', () => {
    expect(filterByRarity('mythic')).not.toBeNull();
  });
  it('returns `example`', () => {
    expect(filterByRarity('mythic')).toHaveLength(2);
  });
});
describe('Regresa toda la data de pokemones', () => {
  it('no es nulo', () => {
    expect(pokemons).not.toBeNull();
  });
  it('returns `example`', () => {
    expect(pokemons).toHaveLength(251);
  });
});

/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
