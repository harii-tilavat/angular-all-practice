import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/_model';
import { ShoppingListService } from 'src/app/_services/shopping-list/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  public shoppingForm!: FormGroup;
  public shoppingSubscription!: Subscription;
  public shopingSubscription!: Subscription;
  public editMode: boolean = false;
  public editedItem!: Ingredient;
  public editItemIndex!: number;
  public test:string[]=['aa','bb'];
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      itemName: new FormControl(null, [Validators.required]),
      itemAmount: new FormControl(null, [Validators.required], this.isNagative)
    });
    this.shopingSubscription = this.shoppingListService.startedEditing
    .subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingForm.setValue({
        itemName: this.editedItem.name,
        itemAmount: this.editedItem.amount
      });
      })
  }

  onSubmit(nameInput: string, amountInput: number): void {
    if (this.editMode) {
      this.shoppingListService.updateItem(this.editItemIndex, new Ingredient(nameInput, amountInput));
    }
    else {
      this.shoppingListService.addItem(nameInput, amountInput);
    }
    this.editMode=false;
    this.shoppingForm.reset();
  }
  isNagative(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      if (control.value <= 0) {
        resolve({ 'isNagative': true });
      }
      else {
        resolve(null);
      }
    });
  }
  onDeleteItem():void{
    this.shoppingListService.deleteItem(this.editItemIndex);
    this.clearForm();
  }
  clearForm(): void {
    this.shoppingForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    if (this.shoppingSubscription) {
      this.shoppingSubscription.unsubscribe();
    }
  }
}
