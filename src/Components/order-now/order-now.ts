

import { Component } from '@angular/core';
import { Cart } from '../../app/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-now',
  imports: [CommonModule],
  templateUrl: './order-now.html',
  styleUrl: './order-now.css',
})
export class OrderNow {

  constructor(private cartService: Cart) {}

  public selectedItems: any = [];
  public total: number = 0;

  ngOnInit() {
  this.cartService.cartDetails.subscribe(res => {
    if (res) {

      this.total = 0;

      const addedItems: any = {};

      res.forEach((x: any) => {
        this.total += x.price;

        if (addedItems[x.id]) {
          addedItems[x.id].count += 1;
        } else {
          addedItems[x.id] = {
            ...x,
            count: 1
          };
        }



      });
      this.selectedItems = Object.values(addedItems);
    }
  });
}

  makePayment() {
    if (this.selectedItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Payment Successful ✅ your order placed ");
      this.cartService.resetCart();
    }
  }
}