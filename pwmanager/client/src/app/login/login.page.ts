import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PasswordService} from '../password.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(private readonly navCtrl: NavController,
              private readonly passwordService: PasswordService) {
  }

  async login(username: string, password: string) {
    await this.passwordService.fetchPasswords(username, password);
    this.navCtrl.navigateRoot(['home'], true, {replaceUrl: true});
  }

}
