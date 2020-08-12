import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { DropdownInfoComponent } from './components/dropdown-info/dropdown-info.component';
import { DropdownInfoDetailComponent } from './components/dropdown-info/dropdown-info-detail/dropdown-info-detail.component';


@NgModule({
  declarations: [DropdownSelectComponent, DropdownInfoComponent, DropdownInfoDetailComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [DropdownSelectComponent, DropdownInfoComponent, DropdownInfoDetailComponent]
})
export class SharedModule { }
