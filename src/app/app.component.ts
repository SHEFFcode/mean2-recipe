import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {RecipesComponent} from "./recipes/recipes.component";

@Component({
  moduleId: module.id,
  selector: 'js-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, RecipesComponent]
})
export class AppComponent {

}
