import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'js-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
      if (params.hasOwnProperty('id')) {
        this.isNew = false;
        this.recipeIndex = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.recipeIndex);
      } else {
        this.isNew = true;
        this.recipe = null;
      }
      // console.log(this.isNew);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm(isNew: boolean){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!isNew) {
      this.recipe.ingredients.forEach(
        (ingredient) => {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern('\\d+')])
          }));
        }
      );
    }
    recipeName = this.recipe.name;
    recipeImageUrl = this.recipe.imagePath;
    recipeContent = this.recipe.description;
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }

}
