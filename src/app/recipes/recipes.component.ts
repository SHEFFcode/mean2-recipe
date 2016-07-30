import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";

@Component({
  moduleId: module.id,
  selector: 'js-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
