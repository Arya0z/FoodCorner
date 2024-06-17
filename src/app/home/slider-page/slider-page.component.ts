import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-page.component.html',
  styleUrl: './slider-page.component.scss'
})
export class SliderPageComponent {
  slides = [
    { src: 'https://via.placeholder.com/800x400', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x400', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/800x400', alt: 'Slide 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
