import { Injectable } from '@angular/core';
import { Estudiante } from '../dtos/Estudiante.dto';
import { Profesor } from '../dtos/Profesor.dto';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {


    estudiantes: Estudiante[] = [];


    getEstudiantes(): Estudiante[]{
        return this.estudiantes;
    }


}
