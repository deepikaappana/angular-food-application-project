import { Routes } from '@angular/router';
import { Home } from '../Components/home/home';
import { Header } from '../Components/header/header';
import { Footer } from '../Components/footer/footer';
import { Payment } from '../Components/payment/payment';
import { Profile } from '../Components/profile/profile';
import { FoodListComponent } from '../Components/food-list/food-list';
import { OrderNow } from '../Components/order-now/order-now';

export const routes: Routes = [
  {path: 'categories', component: Home, children: []},
  {path: 'items/:category', component: FoodListComponent},
  {path: 'all-items', component: FoodListComponent},
  { path: 'header', component: Header },
  { path: 'footer', component: Footer },
  { path: 'profile', component: Profile },
  { path: 'order-now', component: OrderNow },
  { path: '', redirectTo: 'categories', pathMatch:'full' },
];
