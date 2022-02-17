import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  name: string = ''; // New ingredient name
  amount: number; // New ingredient price (string b/c input value)

  handleAddNewIngredient() {
    // Don't do anything if missing amount and name
    // need to figure out easier form validation
    if (!this.name || !this.amount) return;

    this.addIngredient.emit({ amount: Number(this.amount), name: this.name });

    // reset input fields
    this.name = '';
    this.amount = undefined;
  }

  ngOnInit(): void {}
}
