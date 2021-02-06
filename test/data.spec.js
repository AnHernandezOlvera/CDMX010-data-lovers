// eslint-disable-next-line import/extensions
import { filterByType } from '../src/data.js';

describe('Función de filtrado por tipo', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterByType('water')).toBe('example');
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
