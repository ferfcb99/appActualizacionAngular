import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/dtos/Estudiante.dto';
import { Profesor } from 'src/app/dtos/Profesor.dto';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  @Input() estudianteForm: FormGroup;

  profesores: Profesor[];
  idProfesor: number;

  get estudiante(){
    return this.estudianteForm.controls
  }

  get profesor(){
    return this.estudianteForm.controls.profesor
  }

  constructor(private formBuilder: FormBuilder,
              private profesorService: ProfesorService, 
              private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', Validators.required],
      carrera: ['', [Validators.required, Validators.minLength(3)]],
      // auxiliar
      idProfesor: [''],
      profesor: this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellido: ['', [Validators.required, Validators.minLength(3)]],
      })
    })
    
    this.listarProfesores();

  }

  listarProfesores(): void{
    this.profesores = this.profesorService.profesores;
    console.log(this.profesores)
  }


  obtenerProfesorPorId(id: number): Profesor{
    let profe: Profesor = new Profesor();
    this.profesorService.profesores.forEach(profesor =>{
      if(profesor.id = id){
        profe = profesor;
      }
    })
    return profe;
  }
  

  onSubmit(): void{

    let estudianteAuxiliar: Estudiante = this.estudianteForm.value;
    let idProfesor = Number(this.estudiante.idProfesor.value);
    const profe = this.obtenerProfesorPorId(idProfesor);


    let estudiante: Estudiante = new Estudiante();
    estudiante.nombre = estudianteAuxiliar.nombre;
    estudiante.edad = estudianteAuxiliar.edad;
    estudiante.carrera = estudianteAuxiliar.carrera;
    estudiante.profesor = profe;

    this.estudianteService.estudiantes.push(estudiante);
    
  }

}
