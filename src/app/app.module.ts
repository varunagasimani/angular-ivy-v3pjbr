import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AdminRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HomeComponent, AboutComponent, ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
