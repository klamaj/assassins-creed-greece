import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { InstagramComponent } from './instagram/instagram.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwichComponent } from './twich/twich.component';



@NgModule({
  declarations: [
    LogoComponent,
    YoutubeComponent,
    TiktokComponent,
    InstagramComponent,
    FacebookComponent,
    TwichComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    YoutubeComponent,
    TiktokComponent,
    InstagramComponent,
    FacebookComponent,
    TwichComponent
  ]
})
export class SharedModule { }
