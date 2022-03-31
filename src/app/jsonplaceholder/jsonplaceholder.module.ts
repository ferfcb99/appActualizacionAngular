import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PhotosComponent
  ],
  exports: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class JsonplaceholderModule { }
