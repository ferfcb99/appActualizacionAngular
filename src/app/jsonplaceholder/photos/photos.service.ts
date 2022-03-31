import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

    host: string = "https://jsonplaceholder.typicode.com";
    photos: string = "photos";

    constructor(private httpClient: HttpClient){}

    public listAll(): Observable<any>{
        return this.httpClient.get(`${this.host}/${this.photos}`)
    }

}
