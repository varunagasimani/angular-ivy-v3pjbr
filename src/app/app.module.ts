import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AdminRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HomeComponent, AboutComponent, ContactComponent, LoginComponent, BaseComponent, ServicesComponent, PagesComponent, BlogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
