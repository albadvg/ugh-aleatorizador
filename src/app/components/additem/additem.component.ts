import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.scss'
})

export class AdditemComponent {

  constructor(private service:ItemsService) {}

  newName!:string;
  itemRepetido:boolean = false;

  sendItem() {
    if(!this.service.items.some(item => item.name === this.newName)) {
      this.itemRepetido = false;
      this.service.items.push({
        name:this.newName,
        qty:1
      })
      this.newName = '';
    } else {
      this.itemRepetido = true;
    }
  }
}
