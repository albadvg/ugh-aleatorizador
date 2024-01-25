import { Injectable } from '@angular/core';
import { ItemInterface } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  items:ItemInterface[] = [
    {
      name: 'persona',
      qty: 1
    }
  ];

  itemsSpread: string[] = [];
}
