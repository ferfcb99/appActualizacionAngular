import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/dtos/Profesor.dto';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private profesorService: ProfesorService) { }

  profesores: Profesor[];
  palabraBusqueda: string;

  ngOnInit(): void {
    this.listarProfesores();
  }



  listarProfesores(): void {
    this.profesores = this.profesorService.profesores;
  }

  indiceProfesorPorId(profesor: Profesor): number {
    let copiaProfesores: Profesor[] = [...this.profesores];
    for (let index = 0; index < copiaProfesores.length; index++) {

      if (copiaProfesores[index].id === profesor.id) {
        return index;
      }
    }
    return -1;
  }

  guardaProfesoresEnServicio(profesores: Profesor[]): void {
    this.profesorService.profesores = profesores;
  }

  eliminar(profesor: Profesor): void {
    let indiceDeArreglo = this.indiceProfesorPorId(profesor);
    this.profesores.splice(indiceDeArreglo, 1);

    this.guardaProfesoresEnServicio(this.profesores);

  }

  cleanInput(){
    if (this.palabraBusqueda.length === 0) {
      this.listarProfesores();
    } 
  }

  buscar() {
    if (this.palabraBusqueda.length === 0) {
      this.listarProfesores();
    } else {
      let profesoresFiltro: Profesor[] = [];
      this.profesores.forEach(profesor => {
        if (profesor.nombre.includes(this.palabraBusqueda)) {
          profesoresFiltro.push(profesor);
        }
        // console.log(profesor.nombre.includes(this.palabraBusqueda))
      })
      this.profesores = profesoresFiltro;
    }
  }
}
