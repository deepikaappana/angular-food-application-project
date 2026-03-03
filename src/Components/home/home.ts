import { Component, OnInit,  } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { jsonData } from '../../foodDataaa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home {

  constructor(private router: Router) {}    
  public json:any = {}
  ngOnInit(){
    this.json = jsonData;
  }

  ngOnChanges(){

  }


  public selectedCategory:any = '';
  public availableItems:any = [];
  
  

}

