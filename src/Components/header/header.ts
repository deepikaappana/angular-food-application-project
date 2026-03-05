import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../app/cart';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartItemCount: number = 0;
  constructor(private cartService: Cart) {}
  
  ngOnInit() {
    this.cartService.cartDetails.subscribe(res => {
      if (res) {
        const uniqueItems = new Set(res.map((item) => item.id));
        this.cartItemCount = uniqueItems.size;
      } else {
        this.cartItemCount = 0;
      }
    }); 
  }

}
