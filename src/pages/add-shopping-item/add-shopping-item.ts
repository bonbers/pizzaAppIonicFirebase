import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private database : AngularFireDatabase
              ) {
      this.shoppingItemRef$ = this.database.list('shopping-list');
  }

    addShoppingItem(shoppingItem : ShoppingItem){
        this.shoppingItemRef$.push({
            itemName : this.shoppingItem.itemName,
            itemNumber: Number(this.shoppingItem.itemNumber)
        });

        //Reset Item
        this.shoppingItem = {} as ShoppingItem;

        //Navigation user page précedente
        this.navCtrl.pop();
    }
}