import { Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnoFormsComponent } from './components/alumno-forms/alumno-forms.component';

export const routes: Routes = [
  { path: '', component: ListaAlumnosComponent },
  { path: 'alumno-form', component: AlumnoFormsComponent }
];
