import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {
  it('Debe de retornar 100 si el numero ingresado es mayor a 100', () => {
    const res = incrementar(300);
    expect(res).toBe(100);
  });

  it('Debe de retornar el numero ingresado mas 1 si no es mayor a 100', () => {
    const res = incrementar(50);
    expect(res).toBe(51);
  });
});
