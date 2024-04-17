import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CookiesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
