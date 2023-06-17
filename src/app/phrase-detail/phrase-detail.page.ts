import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.page.html',
  styleUrls: ['./phrase-detail.page.scss'],
})
export class PhraseDetailPage implements OnInit {

  constructor(
    private navController : NavController
  ) { }

  ngOnInit() {
  }

  public onBackButtonClicked() : void {
    this.navController.pop().then();
  }

}
