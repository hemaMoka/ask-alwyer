import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyersComponent } from './lawyers/lawyers.component';
import { SpacificLawyerComponent } from './spacific-lawyer/spacific-lawyer.component';

const routes: Routes = [
  {path:"",redirectTo:"our-lawyers",pathMatch:"full"},
  { path: "our-lawyers", component: LawyersComponent },
  {path:"spacificLawyer/:id" , component:SpacificLawyerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurLawyerRoutingModule { }
