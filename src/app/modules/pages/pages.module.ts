import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})

export class PagesModule { }
