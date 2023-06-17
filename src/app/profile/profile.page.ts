import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public nameValue : string = "";
  public userName : string = "";
  public email : string = "";

  constructor(
    private navController : NavController
  ) { }

  ngOnInit() { }

  public onBackButtonClicked() : void {
    this.navController.pop().then();
  }

  onNameChange(inputValue: any, type : 'name' | 'userName' | 'email') {

    switch (type) {
      case "name":
        this.nameValue = inputValue;
        break;
      case "userName":
        this.userName = inputValue;
        break;
      case "email":
        this.email = inputValue;
        break;
    }

  }

  public isFormValid() : boolean {
    return (
      this.nameValue.length > 0 &&
        this.userName.length > 0 &&
        this.email.length > 0
    )
  }

}
