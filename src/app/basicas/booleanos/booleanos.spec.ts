import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('Debe de retorar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
});
