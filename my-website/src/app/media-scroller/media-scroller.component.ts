import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../shared/project';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'media-scroller',
  templateUrl: './media-scroller.component.html',
  styleUrls: ['./media-scroller.component.css']
})
export class MediaScrollerComponent implements OnInit {
  @Output() myEvent = new EventEmitter();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  projects: Project[];
  selectedImage: number;    //image user clicks on

  constructor() { }

  ngOnInit() { 
    this.projects = [];
    this.galleryImages = [];
    var proj: Project = new Project("Connect Four Game", "This is a simple connect4 game I created from scratch. It includes graphics as well as a complete scoring algorithm", "../assets/gallery/connect4.gif")
    this.projects.push(proj);
    this.loadProjects(this.projects);

    this.galleryOptions = [
      //large screen
      {
        previewFullscreen: true, 
        previewForceFullscreen: true,
        imageSize: NgxGalleryImageSize.Contain,
        imageAnimation: NgxGalleryAnimation.Slide,
        width: '50vw',
        height: '600px',
        thumbnails: false
      },
      // max-width 1200
      {
        breakpoint: 1200,
        previewFullscreen: true,
        previewForceFullscreen: true,
        imageSize: NgxGalleryImageSize.Contain,
        width: '70vw',
        height: '500px',
        imagePercent: 100,
        thumbnails: false
      },
      // max-width 800
      {
        breakpoint: 800,
        previewFullscreen: true,
        previewForceFullscreen: true,
        imageSize: NgxGalleryImageSize.Contain,
        width: '100vw',
        height: '500px',
        imagePercent: 100,
        thumbnails: false
      },
      // max-width 400
      {
        breakpoint: 400,
        previewFullscreen: true,
        previewForceFullscreen: true,
        imageSize: NgxGalleryImageSize.Contain,
        width: '100vw',
        height: '200px',
        thumbnails: false
      }
    ];

  }

  //takes an array of projects, and formats into images array based on prinng formatting
  loadProjects(projs: Project[]){
    projs.forEach(
      (project) => {
        //format images
        var img: NgxGalleryImage = new NgxGalleryImage({});
        img.url = project.image;
        img.description = project.description;
        img.medium = project.image;
        img.small = project.image;
        img.big = project.image;
        
        this.galleryImages.push(img)

      }
    )
  }


}
