import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

import {ListComponent} from './list.component';
import {LunchListComponent} from '../../components/list/lunch-list/lunch-list.component';



@NgModule({
  declarations: [
    ListComponent,
    LunchListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
  ],
  exports: [
    ListComponent,
    LunchListComponent
  ]
})
export class ListModule { }
