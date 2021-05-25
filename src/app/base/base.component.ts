import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private _router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  gotoComp(comp_name){
    this._router.navigate(['./' + comp_name],{
      relativeTo :this.activatedRoute
    })
  }

   logoutClick(){
     this._router.navigate(["login"]);
  }
}