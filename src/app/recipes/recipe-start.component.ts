import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'js-recipe-start',
  template: `
    <h1>Please select a recipe.</h1>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}