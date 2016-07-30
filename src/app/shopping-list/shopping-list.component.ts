import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from "./shopping-list-add.component";

@Component({
  moduleId: module.id,
  selector: 'js-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
