import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name : string = '';

  constructor() {}

  public cancel() : void { }

  public confirm() : void { }
}
