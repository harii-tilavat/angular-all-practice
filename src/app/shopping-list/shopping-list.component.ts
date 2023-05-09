import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../_model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../_services';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public showInput: any;
  public ingredients: any = [];
  private ingSubscription!: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingSubscription = this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          console.log("Value of ingredients");
        });
  }
  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }
  toggleInput(index: number): void {
    this.showInput = index;
  }
  ngOnDestroy(): void {
    this.ingSubscription.unsubscribe();
  }
}
