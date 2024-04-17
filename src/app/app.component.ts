import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Assassins Creed Greece';

  cookie: boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    initFlowbite();

    const cookieValue = this.cookieService.get('assassins-accept');

    if (cookieValue != 'accepted') {
      // this.cookie = true;
    }
  }
}
