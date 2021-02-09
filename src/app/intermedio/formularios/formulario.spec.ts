import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formlario con 2 campos, email y password', () => {
    expect(componente.form.contains('email')).toBe(true);
    expect(componente.form.contains('password')).toBe(true);
  });

  it('El email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('El email debe ser un email valido', () => {
    const control = componente.form.get('email');
    control.setValue('blabla@bla.com');

    expect(control.valid).toBeTruthy();
  });
});
