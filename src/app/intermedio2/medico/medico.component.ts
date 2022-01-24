import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent {
  medicos: any[] = [];

  constructor(public _medicoService: MedicoService) {}

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._medicoService.getMedicos().subscribe((medicos: any[]) => {
      this.medicos = medicos;
    });
  }
}
