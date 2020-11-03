import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'lunchTime';
  public counter = '';
  public ngOnInit(): void{
    if (!window.localStorage.getItem('counter')){
      window.localStorage.setItem('counter', '0');
    }
    this.counter = window.localStorage.getItem('counter');
  }
}
