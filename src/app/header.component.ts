import { Component, OnInit } from '@angular/core';
import {Dropdown} from "./dropdown.directive";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {RecipeService} from "./recipes/recipe.service";

@Component({
  moduleId: module.id,
  selector: 'js-header',
  templateUrl: 'header.component.html',
  directives: [Dropdown, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeService.storeData().subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  onFetch() {

  }

  ngOnInit() {
  }

}
