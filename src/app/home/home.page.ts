import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PhraseInfo} from "../components/phrase-component/phrase.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public phraseOfTheDay : PhraseInfo = {
    phrase : 'Tu actitud, no tu aptitud, determinará tu altitud',
    author : 'Yanglee Madrigal'
  }

  constructor(
    private router : Router
  ) { }

  public onProfileIconClicked () {
    this.router.navigate(["profile"]).then();
  }

  public onCardClicked(cardInformation : any) {
    console.log(cardInformation);
    this.router.navigate(["phrase-detail"]).then();
  }

}
