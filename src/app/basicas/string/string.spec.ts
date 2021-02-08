import { mensaje } from './string';

//Agrupa pruebas
// describe('Pruebas de Strings');

//Evaluacion en concreto
// it('Debe de regresar un string');

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Diego');

    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
