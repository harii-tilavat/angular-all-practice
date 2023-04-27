import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
 

  constructor(private shoppingListService:ShoppingListService) { }
  ngOnInit(): void {

  }

  addItem(nameInput: string, amountInput: string): void {
    this.shoppingListService.addItem(nameInput,amountInput);
  }
}
