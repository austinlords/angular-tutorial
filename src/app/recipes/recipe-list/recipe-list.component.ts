import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  @Input() allRecipes: Recipe[];
  @Output() recipeClick = new EventEmitter<Recipe>();

  onRecipeClick(recipe: Recipe) {
    this.recipeClick.emit(recipe);
  }

  ngOnInit(): void {}
}
