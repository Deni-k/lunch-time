import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AppUrlPaths} from './app.url-paths';

import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'lunchTime';
  constructor(private router: Router,
              private localStorageService: LocalStorageService) {
  }
  public ngOnInit(): void{
  }

  public navigateToForm(): void {
    this.router.navigateByUrl(AppUrlPaths.Form);
  }

  public navigateToList(): void {
    this.router.navigateByUrl(AppUrlPaths.List);
  }
}
