import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {}),
    CoreModule,
    ModulesModule,
    SharedModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
