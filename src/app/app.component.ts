import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.dialogElement = document.querySelector("dialog");
  }

  dialogElement: any = null;
  title = 'niya-studios';
  selectedImage: string = '';

  public myOptions: NgxMasonryOptions = {
    gutter: 10
  };

  masonryItems = [
    { imgUrl: '../assets/chicago01.jpg' },
    { imgUrl: '../assets/chicago02.jpg' },
    { imgUrl: '../assets/chicago03.jpg' },
    { imgUrl: '../assets/chicago04.jpg' },
    { imgUrl: '../assets/chicago05.jpg' },
    { imgUrl: '../assets/chicago06.jpg' },
    { imgUrl: '../assets/chicago07.jpg' },
    { imgUrl: '../assets/chicago08.jpg' },
    { imgUrl: '../assets/chicago09.jpg' },
    { imgUrl: '../assets/chicago10.jpg' },
    { imgUrl: '../assets/chicago11.jpg' },
    { imgUrl: '../assets/chicago12.jpg' },
    { imgUrl: '../assets/chicago13.jpg' },
    { imgUrl: '../assets/chicago14.jpg' },
    { imgUrl: '../assets/chicago15.jpg' },
  ];

  setSelectedImage(selectedImage: string) {
    this.selectedImage = selectedImage;
    this.dialogElement.showModal();
  }

  closeModal() {
    this.dialogElement.close();
  }
}
