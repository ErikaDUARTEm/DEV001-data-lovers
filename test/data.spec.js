import arrayD from '../src/data.js';



describe('arrayD', () => {
  it('Debe ser una function', () => {
    expect(typeof arrayD).toEqual('function');
  });

  it('Debe retornar un array con 251 pokemones', () => {
    expect(arrayD()).toHaveLength(251);
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/