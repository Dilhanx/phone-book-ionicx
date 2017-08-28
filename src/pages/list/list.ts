import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,RequestOptions } from "@angular/http";
import 'rxjs/Rx';
/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  list=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private htpp:Http) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.htpp.get("https://phone-book-sailsx.herokuapp.com/contact").map(res=> res.json()) .subscribe(data =>{ this.list=data});
  }

}
