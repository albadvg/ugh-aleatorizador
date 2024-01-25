import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-shuffle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shuffle.component.html',
  styleUrl: './shuffle.component.scss'
})
export class ShuffleComponent {

  public result!:string;
  public showResult:boolean = false;

  constructor(private service:ItemsService, private router:Router) {}

  public showItem() {
    let randomIndex = Math.floor(Math.random() * this.service.itemsSpread.length);
    this.result = this.service.itemsSpread.splice(randomIndex, 1)[0];
    this.showResult = true;
  
}

public showQuestion() {
  if(this.service.itemsSpread.length > 0) {
    this.showResult = false;
  } else {
    this.router.navigate(['/'])
  }
}
}
