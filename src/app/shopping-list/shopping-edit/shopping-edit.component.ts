import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddItemEvent = new EventEmitter<{ name: string, amount: string }>();

  constructor() { }
  ngOnInit(): void {

  }

  addItem(nameInput: string, amountInput: string): void {
    console.log("Value of Name: " + nameInput);
    console.log("Value of Amount: " + amountInput);
    this.onAddItemEvent.emit({name:nameInput,amount:amountInput})
  }
}
