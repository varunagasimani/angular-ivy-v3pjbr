import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BaseComponent } from './base/base.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'base',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AdminRoutingModule {}
