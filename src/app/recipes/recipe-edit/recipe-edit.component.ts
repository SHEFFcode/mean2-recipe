import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'js-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit {
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    let isNew: boolean = true;
    this.subscription = this.route.params.subscribe(
      (params: any) => {
      if (params.hasOwnProperty('id')) {
        isNew = false;
        this.recipeIndex = +params['id'];
      } else {
        isNew = true;
      }
    });
  }

}
