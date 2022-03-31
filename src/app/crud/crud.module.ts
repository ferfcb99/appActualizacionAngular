import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent
  ],
  exports: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
