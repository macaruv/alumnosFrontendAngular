import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alumno-forms',
  templateUrl: './alumno-forms.component.html',
  styleUrls: ['./alumno-forms.component.css'],
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, ToastModule]
})
export class AlumnoFormsComponent {
  alumno: Alumno = {} as Alumno;
  buscarIdAlumno: number | null = null;

  constructor(private alumnoService: AlumnoService, private messageService: MessageService) {}

  onSubmit() {
    if (this.alumno.idAlumno) {
      this.alumnoService.updateAlumno(this.alumno.idAlumno, this.alumno).subscribe(response => {
        this.showSuccess('Alumno actualizado con éxito');
        this.clearFields();
      }, error => {
        this.showError('Error actualizando el alumno');
      });
    } else {
      this.alumnoService.createAlumno(this.alumno).subscribe(response => {
        this.showSuccess('Alumno creado con éxito');
        this.clearFields();
      }, error => {
        this.showError('Error creando el alumno');
      });
    }
  }

  onDelete() {
    if (this.alumno.idAlumno) {
      this.alumnoService.deleteAlumno(this.alumno.idAlumno).subscribe(response => {
        this.showSuccess('Alumno eliminado con éxito');
        this.clearFields();
      }, error => {
        this.showError('Error eliminando el alumno');
      });
    }
  }

  loadAlumno() {
    if (this.buscarIdAlumno) {
      this.alumnoService.getAlumno(this.buscarIdAlumno).subscribe(response => {
        this.alumno = response;
      }, error => {
        this.showError('Alumno no encontrado');
      });
    }
  }

  clearFields() {
    this.alumno = {} as Alumno;
    this.buscarIdAlumno = null;
  }

  showSuccess(detail: string) {
    this.messageService.add({severity:'success', summary: 'Éxito', detail});
  }

  showError(detail: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail});
  }
}
