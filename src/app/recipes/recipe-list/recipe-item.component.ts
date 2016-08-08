import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'js-recipe-item',
  templateUrl: 'recipe-item.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() recipeId: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
