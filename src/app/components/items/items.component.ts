import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../interfaces/item.interface';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  
  constructor(private service:ItemsService) {}

  items = this.service.items;

  changeQty(index:number, num:number) {
    if(this.items[index].qty + num > 0) {
      this.items[index].qty += num;
    }
  }

  deleteItem(index:number) {
    this.items.splice(index, 1);
  }
}
