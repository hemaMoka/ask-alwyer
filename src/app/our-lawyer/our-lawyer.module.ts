import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurLawyerRoutingModule } from './our-lawyer-routing.module';
import { LawyersComponent } from './lawyers/lawyers.component';
import { SpacificLawyerComponent } from './spacific-lawyer/spacific-lawyer.component';


@NgModule({
  declarations: [
    LawyersComponent,
    SpacificLawyerComponent
  ],
  imports: [
    CommonModule,
    OurLawyerRoutingModule
  ]
})
export class OurLawyerModule { }
