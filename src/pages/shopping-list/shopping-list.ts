import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AddShoppingItemPage} from "../add-shopping-item/add-shopping-item";
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {EditShoppingItemPage} from "../edit-shopping-item/edit-shopping-item";
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the ShoppingListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

    shoppingListRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController) {
      this.shoppingListRef$ = this.database.list('shopping-list');
  }

    selectShoppingItem(shoppingItem: ShoppingItem) {
        this.actionSheetCtrl.create({
            title: `${shoppingItem.itemName}`,
            buttons: [
                {
                    text: 'Edit',
                    handler: () => {
                        this.navCtrl.push(EditShoppingItemPage, { shoppingItemId : shoppingItem.$key});


                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        this.shoppingListRef$.remove(shoppingItem.$key);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log("User selected cancel button");
                    }
                }
            ]
        }).present();

    }

    navigateToAddShoppingPage() {
        //Navigation dans l'ajout des items
        this.navCtrl.push(AddShoppingItemPage);
    }

    returnHome() {
      //Retour à l'accueil
        this.navCtrl.push(TabsPage);
    }
}
