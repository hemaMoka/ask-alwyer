import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: "home", component: HomeComponent },
  {path:"asLawyer",loadChildren:()=> import('./lawyer/lawyer.module').then((m)=>m.LawyerModule)},
  {path:"our-lawyer",loadChildren:()=> import('./our-lawyer/our-lawyer.module').then((m)=>m.OurLawyerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
