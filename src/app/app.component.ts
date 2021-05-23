import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isClicked:boolean=true;
  isLogged:boolean=false;
  login = { email: 'varunshooter@gmail.com', password: 'varun' };
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {}
  

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  loginClick() {
    if (this.loginForm.value.Email== this.login.email && this.loginForm.value.Password== this.login.password)
    {
        // alert("Login Successfull");
        // location.pathname=('/home');
        this.isClicked=false;
        this.isLogged=true;
        this.loginForm.reset();

    }
    else{
      alert("Invalid Credentials");
    }
    
    
    console.log(this.login);
  }

  logoutClick(){
    this.isLogged=false;
    this.isClicked=true;
  }

}






