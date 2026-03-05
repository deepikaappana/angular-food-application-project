import { Component, OnInit } from '@angular/core';
import { Cart } from '../../app/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-now',
  imports: [CommonModule],
  templateUrl: './order-now.html',
  styleUrl: './order-now.css',
})
export class OrderNow implements OnInit {

  selectedItems: any[] = [];
  total: number = 0;
  paymentSuccess: boolean = false;

  constructor(private cartService: Cart) {}

  ngOnInit() {

    this.cartService.cartDetails.subscribe((res:any) => {

      if(res){

        const addedItems:any = {};
        this.total = 0;

        res.forEach((x:any)=>{

          this.total += x.price;

          if(addedItems[x.id]){
            addedItems[x.id].count += 1;
          }else{
            addedItems[x.id] = {
              ...x,
              count:1
            };
          }

        });

        this.selectedItems = Object.values(addedItems);

      }

    });

  }

 increaseItem(item:any){
  item.count += 1;
  this.cartService.addToCart(item,true);
}

  decreaseItem(item:any){
    this.cartService.removeFromCart(item);
  }

  makePayment(){
    this.paymentSuccess = true;
    this.cartService.resetCart();
  }

}