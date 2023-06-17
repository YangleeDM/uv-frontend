import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public nameValue : string = "Default value";
  public userName : string = "Default username";
  public email : string = "Default email";

  constructor(
    private navController : NavController
  ) { }

  ngOnInit() { }

  public onBackButtonClicked() : void {
    this.navController.pop().then();
  }

  onNameChange(event: any) {
    this.nameValue = event;
  }

}
