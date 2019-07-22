import { Component } from '@angular/core';
import { NinjaGoldService } from './ninja-gold.service';
import { Action } from 'rxjs/internal/scheduler/Action';
// import { Location } from './models/app.loction';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gold = 0;
  activities: string[] = [];
  constructor(private ninjaService: NinjaGoldService) {}
  proccessFinding(location: string, range: number[]): void {
    const previousActivities = this.activities;
    const gold = this.ninjaService.proccessGold(range);
    this.gold += gold;
    this.activities = [];
    this.activities.push(`You found ${gold} gold at the ${location}`);
    previousActivities.forEach(value => this.activities.push(value));
  }
}
