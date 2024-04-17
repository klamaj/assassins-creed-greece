import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  hideCookie = false;
  cookieNotice: boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {}

  // Accept cookies
  acceptCookies(): void {
    this.cookieService.set('assassins-accept', 'accepted', 365);
    this.hideCookie = true;
  }
}
