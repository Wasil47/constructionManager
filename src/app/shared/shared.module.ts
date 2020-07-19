import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';


@NgModule({
  declarations: [DropdownSelectComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [DropdownSelectComponent]
})
export class SharedModule { }
