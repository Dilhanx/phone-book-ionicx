import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from "../form/form";
import { ListPage } from "../list/list";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title =  "Phone Book";
  constructor(public navCtrl: NavController) {

  }
  goToFormPage() {
    this.navCtrl.push(FormPage);
  }
  goToListPage() {
    this.navCtrl.push(ListPage);
  }
}
