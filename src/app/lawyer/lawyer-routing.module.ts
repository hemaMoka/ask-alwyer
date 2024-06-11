import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsLawyerComponent } from './as-lawyer/as-lawyer.component';
import { LawyerContainerComponent } from './lawyer-container/lawyer-container.component';

const routes: Routes = [
  {path:"",redirectTo:"Lawyers",pathMatch:"full"},
  { path: "Lawyers", component: AsLawyerComponent },
  {path:"addLawyer" , component:LawyerContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }
