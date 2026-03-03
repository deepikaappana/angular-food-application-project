import { Component, EventEmitter, Input, output, signal, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Footer } from '../Components/footer/footer';
import { Header } from '../Components/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, Footer, Header, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {


  constructor(){}

  ngOnInit(){
    
  }


}
