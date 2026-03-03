import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jsonData } from '../../foodDataaa';
import { Cart } from '../../app/cart';


@Component({
  selector: 'app-food-list',
  templateUrl: '/food-list.html',
  styleUrl: './food-list.css',
  imports: [CommonModule, RouterLink]
})
export class FoodListComponent implements OnInit {

  foods: any[] = [];
  selectedFoods: any[] = [];
  totalPrice = 0;
  categoryId!: number;

  constructor(
    private route: ActivatedRoute,
    private cartService: Cart
  ) {}

  public selectedCategory:any = -1;
  public isAllItems :boolean = false;
  public showOrderNow :boolean = false;
  public cartAddedItems :any = [];
  
  public selectedFood = {
    category:<any> {}, 
    items:<any> []
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCategory = parseInt(params['category'])

      console.log(this.selectedCategory)

      if(isNaN(this.selectedCategory)) {
        this.isAllItems = true
        this.selectedFood.items = jsonData.foods
      }else{
        this.selectedFood.category = jsonData.categories.find(x => x.id == this.selectedCategory)
        this.selectedFood.items = jsonData.foods.filter(x => x.categoryId == this.selectedCategory)
      }
    })

    this.cartService.cartDetails.subscribe((res:any) => {
      if(res && res.length > 0){
        this.showOrderNow = true;
        this.cartAddedItems = res
        return
      }
      this.showOrderNow = false;
      this.cartAddedItems = []
      this.selectedFood.items?.map((x:any) => x.count = 0)
    })
  }

  getCategoryName(id: number){
    return jsonData.categories.find(x => x.id == id)?.name || ""
  }

 addToCart(food: any) {
  const n = this.cartAddedItems.filter((x:any) => x.id == food.id).length;
  food['count'] = n + 1;

  const isUpdating = n > 0;
  this.cartService.addToCart(food, isUpdating);
}

removeFromCart(food: any) {
  const n = this.cartAddedItems.filter((x:any) => x.id == food.id).length;

  food['count'] = n - 1;
  this.cartService.removeFromCart(food);
}
}