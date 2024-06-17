import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { SliderPageComponent } from './slider-page/slider-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainPageComponent,MenuPageComponent,NavPageComponent,SliderPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
