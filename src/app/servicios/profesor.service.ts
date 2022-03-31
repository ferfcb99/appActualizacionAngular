import { Injectable } from '@angular/core';
import { Profesor } from '../dtos/Profesor.dto';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  profesores: Profesor[] = [
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Perez"
    },
    {
      "id": 2,
      "nombre": "Paola",
      "apellido": "Martinez"
    },
    {
      "id": 3,
      "nombre": "Saul",
      "apellido": "Gomez"
    },
    {
      "id": 4,
      "nombre": "Libeth",
      "apellido": "Rivera"
    },
    {
      "id": 6,
      "nombre": "Brandon",
      "apellido": "Lopez"
    },
    {
      "id": 7,
      "nombre": "Fernando",
      "apellido": "Rivera"
    },
    {
      "id": 8,
      "nombre": "Yaquelin",
      "apellido": "Perez"
    }

  ];

  constructor() { }

  public generaProfesores(): Profesor[] {

    this.profesores = [ // JSON
     
    ];

    return this.profesores;
  }

  public obtenerUltimoId(): number{
    let ids: number[] = []
    this.profesores.forEach((profesor: Profesor) =>{
      let actualId = Number(profesor.id);
      ids.push(actualId);
    })
    
    let mayor = 0;
    for (let index = 0; index < ids.length; index++) {
      let idActual = ids[index];
      if(idActual > mayor){
        mayor = idActual;
      }
    }

    return mayor + 1;
  }

}
