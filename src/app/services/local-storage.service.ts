import {LunchModel} from '../models/lunch.model';

export class LocalStorageService {
  public counter: string;

  constructor() {
    if (!window.localStorage.getItem('counter')){
      window.localStorage.setItem('counter', '0');
    }
    this.counter = window.localStorage.getItem('counter');
  }

  public addLunch(value: LunchModel): void {
    window.localStorage.setItem(`${this.counter}.Bestellung`, JSON.stringify(value));
    this.counter = String(Number(this.counter) + 1);
    window.localStorage.setItem('counter', `${this.counter}`);
  }

  public getLunches(): LunchModel[] {
    const result: LunchModel[] = [];
    for (let i = 0; i < Number(this.counter); i++){
      result.push(JSON.parse(window.localStorage.getItem(`${i}.Bestellung`)));
    }
    return result;
  }
}
