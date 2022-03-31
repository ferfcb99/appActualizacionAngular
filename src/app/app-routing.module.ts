import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './crud/actualizar/actualizar.component';
import { CrearComponent } from './crud/crear/crear.component';
import { ListarComponent } from './crud/listar/listar.component';
import { PhotosComponent } from './jsonplaceholder/photos/photos.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'crear', component: CrearComponent},
  { path: 'actualizar', component: ActualizarComponent},
  { path: 'photos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
