import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'js-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styles: [],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

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
      this.initForm();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      this.recipe.ingredients.forEach(
        (ingredient) => {
          console.log(ingredient);
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern('\\d+')])
          }));
        }
      );
      console.log(this.recipe);
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [Validators.required, Validators.pattern('\\d+')])
      })
    );
  }

  onRemoveItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }
}
