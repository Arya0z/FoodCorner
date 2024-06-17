import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {
  cards = [
    { title: 'McVeggie Burger ' },
    { title: 'McVeggie Burger ' },
    { title: 'McVeggie Burger ' },
    { title: 'McVeggie Burger ' },
    { title: 'McVeggie Burger ' },
    { title: 'McVeggie Burger ' }

  
  ];
}
