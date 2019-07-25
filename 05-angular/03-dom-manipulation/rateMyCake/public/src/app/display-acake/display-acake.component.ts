import { Component, Input } from '@angular/core';
import { Cake } from '../models/cake.model';

@Component({
  selector: 'app-display-acake',
  templateUrl: './display-acake.component.html',
  styleUrls: ['./display-acake.component.css'],
})
export class DisplayACakeComponent {
  @Input() cakeToShow: Cake;
}
