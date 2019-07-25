import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';
import { Cakes } from './models/cakes.model';
import { Cake } from './models/cake.model';
import { Opinion } from './models/opinion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cakes: Cake[];
  newCake = new Cake();
  newOpinion = new Opinion();
  cakeToShow = new Cake();
  constructor(private cakeService: CakeService) {}
  ngOnInit(): void {
    this.getCakes();
  }
  getCakes(): void {
    this.cakeService.getCakes().subscribe(cakes => {
      console.log('these are the cakes', cakes);
      this.cakes = cakes.cakes;
    });
  }
  getCake(id: string): void {
    this.cakeService.getCake(id).subscribe(cake => {
      this.cakeToShow = cake.cake;
    });
  }
  createCake(event: Event): void {
    console.log('here is the cake');
    event.preventDefault();
    this.cakeService.createCake(this.newCake).subscribe(cake => {
      console.log('here is the cake', cake);
      this.getCakes();
      this.newCake = new Cake();
    });
  }
  createOpinion(event: Event, id: string): void {
    event.preventDefault();
    this.cakeService.createOpinion(this.newOpinion, id).subscribe(() => {
      console.log('create opinion subscribe triggerd');
      this.newOpinion = new Opinion();
    });
  }
}
