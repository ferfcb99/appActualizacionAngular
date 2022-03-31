import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photosData: any = [];

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {

    this.listAllPhotos();

  }



  listAllPhotos(): void{
    this.photoService.listAll().subscribe(resp =>{
      this.photosData = resp;
      for (let index = 0; index <= 4980; index++) {
        this.photosData.pop();
      }
    })
  }

}
