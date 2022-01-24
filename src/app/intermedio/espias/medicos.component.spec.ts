import { Observable, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe de cargar los medicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of([['medico1', 'medico2', 'medico3']]);
    });
    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un medido', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return of(medico);
    });
    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Carlos' };

    spyOn(servicio, 'agregarMedico').and.returnValue(of([medico]));
    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar al medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of());

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });
});
