import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-phrsario-toolbar',
  templateUrl: './phrsario-toolbar.component.html',
  styleUrls: ['./phrsario-toolbar.component.scss'],
})
export class PhrsarioToolbarComponent  implements OnInit {

  @Input() toolbarTitle : string = "";

  constructor(
    private navController : NavController
  ) { }

  ngOnInit() {}

  public onBackButtonClicked() {
    this.navController.pop().then();
  }


}
