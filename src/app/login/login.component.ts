import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = { email: 'varunshooter@gmail.com', password: 'varun' };
  loginForm: FormGroup;
  msg: string = '';
  constructor(private fb: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  loginClick() {
    if (
      this.loginForm.value.Email == this.login.email &&
      this.loginForm.value.Password == this.login.password
    ) {
      this.loginForm.reset();
      this._router.navigate(['base']);
      this.msg = '';
    } else {
      this.msg = 'Invalid Credentials!';
    }
  }
}
