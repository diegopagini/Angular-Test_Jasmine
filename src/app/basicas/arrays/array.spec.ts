import { obtenerRobots } from './array';

//Con una "x" se saltea la prueba
xdescribe('Prubea de arreglos', () => {
  it('Debe de retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir Megaman y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');
  });
});
