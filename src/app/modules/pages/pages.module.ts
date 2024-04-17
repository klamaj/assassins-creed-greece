import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    
  ]
})

export class PagesModule { }
