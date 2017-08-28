import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,RequestOptions } from "@angular/http";
import 'rxjs/Rx';
/**
 * Generated class for the FormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  message
  constructor(public navCtrl: NavController, public navParams: NavParams,private htpp:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  Add(values){
    this.htpp.put("https://phone-book-sailsx.herokuapp.com/contact/",values).map(res=> res).map(res=> res.json()).subscribe(data =>{ this.message=data.text()});
    
  }
  Delete(values){
   
    this.htpp.delete("https://phone-book-sailsx.herokuapp.com/contact/",new RequestOptions({body: values,})).map(res=> res).subscribe(data =>{ this.message=data.text()});
  }
}
