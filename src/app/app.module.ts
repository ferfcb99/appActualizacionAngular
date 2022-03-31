import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';
import { JsonplaceholderModule } from './jsonplaceholder/jsonplaceholder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CrudModule, 
    JsonplaceholderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
