import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  moduleId: module.id,
  selector: 'js-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  isAdd = true;
  @Input() item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {
       name: null,
        amount: null
      };
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    console.log(ingredient);
    if (!this.isAdd) {
      //edit
    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }
  }

}
