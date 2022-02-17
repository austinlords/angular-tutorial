import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe I',
      'This is simply a test.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe II',
      'This is simply a test 2.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe III',
      'This is simply a test 3.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
  ];

  selectedRecipe: Recipe | null;

  handleSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  ngOnInit(): void {}
}
