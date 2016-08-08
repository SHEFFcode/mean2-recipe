import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {Recipe} from "./recipe";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'js-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})
export class RecipesComponent {

}
