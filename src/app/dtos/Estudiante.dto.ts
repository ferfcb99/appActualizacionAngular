import { Profesor } from "./Profesor.dto";

export class Estudiante{
    
    id: number;
    nombre: string;
    edad: number;
    carrera: string;
    profesor: Profesor;

}