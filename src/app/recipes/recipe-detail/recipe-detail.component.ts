import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from 'src/app/app.types';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}

  @Input() recipe: Recipe | null;

  ngOnInit(): void {}
}
