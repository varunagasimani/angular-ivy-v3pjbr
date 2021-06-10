import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profDet:FormGroup;


  constructor(private fb:FormBuilder, private _router:Router, private activatedRoute: ActivatedRoute) {
    this.profDet=this.fb.group({
      name:['',Validators.required],
      age:['',Validators.required]
    })
   }

  ngOnInit() {
  }
  addProfile(){
    let data=this.profDet.value
    // console.log(data)
    this._router.navigate(['base/blog'],{
      queryParams:{data:btoa(JSON.stringify(data))}
    })
  }
}