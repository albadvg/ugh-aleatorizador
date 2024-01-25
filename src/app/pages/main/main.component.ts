import { ItemInterface } from './../../interfaces/item.interface';
import { ItemsComponent } from './../../components/items/items.component';
import { Component } from '@angular/core';
import { AdditemComponent } from '../../components/additem/additem.component';
import { Router, RouterLink } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ AdditemComponent, ItemsComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private service:ItemsService) {}

  shuffle() {
    this.service.items.forEach((item:ItemInterface) => {
      for(let i = 1; i <= item.qty; i++) {
        this.service.itemsSpread.push(item.name);
      }
    })
    console.log(this.service.itemsSpread);
  }
}
