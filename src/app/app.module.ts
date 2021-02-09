import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';

@NgModule({
  declarations: [AppComponent, MedicoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MedicoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
