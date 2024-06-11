import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerContainerComponent } from './lawyer-container/lawyer-container.component';


@NgModule({
  declarations: [
    LawyerContainerComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule
  ]
})
export class LawyerModule { }
