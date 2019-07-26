import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Activity } from '../models/activities.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  activity: Activity;
  // set up properties to help display and help carry information back to the service
  coinPurse: number;
  purchase: number;
  rate: number;
  // set up an insufficient funds notice if the user tries to by a coin for under its current rate.
  notice: string;

  constructor(private readonly coinService: CoinService) {}
  // use on init to keep the display rate and coinpurse
  ngOnInit() {
    this.coinPurse = this.coinService.coinPurse;
    this.rate = this.coinService.rate;
  }
  buy(event: Event, transaction) {
    // reset insufficient notice
    this.notice = '';
    event.preventDefault();
    // destructure the form
    const { purchase: purchase }: { purchase: number } = transaction.value;
    // check if purchase amount is greater than the current rate.
    if (purchase >= this.rate) {
      // increase coin purse amount at the same time increase the rate accordingly
      for (let iteration = 0; iteration < purchase / this.rate; iteration++) {
        this.coinService.addCoins();
        this.coinService.increaseRate();
        this.rate = this.coinService.rate;
        this.coinPurse = this.coinService.coinPurse;
        // notice assigned to deliver amount of coins bought
        // must be perfomed in for loop other wise iteration is out of scope
        this.notice = `you bought ${iteration} SHINTO COIN(S)`;
        // set activities values
        // instantiate activity here
        this.activity = new Activity();
        this.activity.id = this.coinService.activities.length;
        this.activity.action = 'Bought';
        this.activity.amount = iteration + 1;
      }
    } else {
      this.notice = 'that is not enough to buy a SHINTO COIN';
    }
    // check if activiy was instantiated
    if (this.activity) {
      // finish up the activity
      this.activity.value = this.activity.amount * this.rate;
      // send it to the ledger
      this.coinService.activities.push(this.activity);
    }
    // reset the form every time function triggerd
    transaction.reset();
  }
}
