import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  

  private cartObject = new BehaviorSubject<any[] | null>(null);
public readonly cartDetails: Observable<any[] | null> = this.cartObject.asObservable();

addToCart(newItem: any, isUpdating = false): void {

  let currentCart = this.cartObject.getValue() || [];

  if (isUpdating) {
    currentCart = currentCart.filter(x => x.id != newItem.id);
  }

  for (let i = 0; i < newItem.count; i++) {
    currentCart.push({ ...newItem });
  }

  this.cartObject.next([...currentCart]);
}

removeFromCart(food: any): void {

  const currentCart = this.cartObject.getValue() || [];

  const index = currentCart.findIndex(x => x.id == food.id);

  if (index != -1) {
    currentCart.splice(index, 1);
  }

  this.cartObject.next([...currentCart]);
}

resetCart(){
  this.cartObject.next([]);

}


}
