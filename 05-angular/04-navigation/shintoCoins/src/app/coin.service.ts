import { Injectable, OnInit } from '@angular/core';
import { Activity } from './models/activities.model';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  // attribute to keep track of the user's gold amount
  coinPurse = 0;
  rate = 1;
  activities: Activity[] = [];
  constructor() {}
  addCoins(): void {
    this.coinPurse = this.coinPurse + 1;
    console.log(`what's inside coin purse?`, this.coinPurse);
  }
  increaseRate(): void {
    this.rate += 1;
    console.log('the current rate is', this.rate);
  }
  decreaseRate(): void {
    this.rate -= 1;
    console.log(`the current  rate is ${this.rate}`);
  }
  decreaseCoins(): void {
    this.coinPurse -= 1;
    console.log(`what's inside coin purse? ${this.coinPurse}`);
  }
  addActivity(activity: Activity): void {
    this.activities.push(activity);
  }
}
