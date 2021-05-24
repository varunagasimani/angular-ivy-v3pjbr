import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imgs=["https://cdn.bein.net/mena/wp-content/uploads/sites/3/2015/10/Athletics.jpg","https://www.owu.edu/files/pages/track-and-field-men-4.jpg","https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/08/13/21/great-britain-women-4x400-relay-130817b.jpg"]

    n:number=0;
  constructor() {}

  ngOnInit() {
    
  }

  next(){
    if( this.imgs.length-1 > this.n)
    {
      this.n+=1;
    }
    else{
      this.n=0;
    }
  }
  prev(){
    if( this.n > 0)
    {
      this.n-=1;
    }
    else{
      this.n=this.imgs.length-1;
    }
  }
  
}
