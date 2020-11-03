import { Component, OnInit } from '@angular/core';

import {LocalStorageService} from '../../../services/local-storage.service';

import {LunchModel} from '../../../models/lunch.model';

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent implements OnInit {
  private lunchList: LunchModel[];

  public get list(): LunchModel[] {
    return this.lunchList;
  }

  constructor(private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.lunchList = this.localStorageService.getLunches();
  }

}
