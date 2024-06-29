import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private baseUrl = 'https://alumnosbackendspring.onrender.com/api/alumnos'; // URL del backend

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.baseUrl}`);
  }

  getAlumno(idAlumno: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.baseUrl}/${idAlumno}`);
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.baseUrl, alumno);
  }

  updateAlumno(idAlumno: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.baseUrl}/${idAlumno}`, alumno);
  }

  deleteAlumno(idAlumno: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${idAlumno}`);
  }
}
