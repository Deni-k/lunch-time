import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { HomeComponent } from './home.component';

import { LunchFormComponent } from '../../components/home/lunch-form/lunch-form.component';





@NgModule({
  declarations: [
    HomeComponent,
    LunchFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    LunchFormComponent
  ]
})
export class HomeModule { }
