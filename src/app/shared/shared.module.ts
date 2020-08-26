import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { DropdownInfoComponent } from './components/dropdown-info/dropdown-info.component';
import { DropdownInfoDetailComponent } from './components/dropdown-info/dropdown-info-detail/dropdown-info-detail.component';
import { FormChangeComponent } from './components/form-change/form-change.component';
import { FormAddComponent } from './components/form-add/form-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownSelectComponent,
    DropdownInfoComponent,
    DropdownInfoDetailComponent,
    FormChangeComponent,
    FormAddComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, FormsModule],
  exports: [
    DropdownSelectComponent,
    DropdownInfoComponent,
    DropdownInfoDetailComponent,
    FormChangeComponent,
    FormAddComponent,
  ],
})
export class SharedModule {}
