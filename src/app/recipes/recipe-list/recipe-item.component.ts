import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'js-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  recipe;
  recipeId;

  constructor() { }

  ngOnInit() {
  }

}
