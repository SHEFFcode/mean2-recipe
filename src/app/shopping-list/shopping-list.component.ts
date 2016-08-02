import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {Ingredient} from "../shared/ingredient";

@Component({
  moduleId: module.id,
  selector: 'js-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

}
