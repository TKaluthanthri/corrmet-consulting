import { AboutUsComponent } from './../about-us/about-us.component';
import { ServicesComponent } from './../services/services.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
