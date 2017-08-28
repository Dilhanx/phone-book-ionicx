import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormPage } from '../form/form';
import { ListPage } from '../list/list';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  formRoot = FormPage
  listRoot = ListPage


  constructor(public navCtrl: NavController) {}

}
