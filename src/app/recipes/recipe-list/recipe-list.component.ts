import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  moduleId: module.id,
  selector: 'js-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg');

  constructor() { }

  ngOnInit() {
  }

}
