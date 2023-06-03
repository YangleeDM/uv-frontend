import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router : Router
  ) { }

  public onProfileIconClicked () {
    this.router.navigate(["profile"]).then().catch(error => {
      console.error("Error at onProfileIconClicked", error);
      alert("Algo salió mal, inténtalo más tarde.");
    });
  }

}
