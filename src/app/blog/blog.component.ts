import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  profileList=[{name:'Varun', age:'24'},
  {name:'Ramesh', age:'25'}];

  profObj:any

  constructor(private _router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params)=>{
      // console.log(params);
      this.profObj=JSON.parse(atob(params.data))
    })

    this.profileList.push(this.profObj)
    // console.log(this.profObj)
  }
  gotoProf(){
    this._router.navigate(['profile'])
  }
}