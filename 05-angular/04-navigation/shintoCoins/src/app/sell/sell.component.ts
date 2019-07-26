import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Activity } from '../models/activities.model';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  activity: Activity;
  coinPurse: number;
  rate: number;
  sold: number;
  notice: string;
  constructor(private readonly coinService: CoinService) {}

  ngOnInit() {
    this.rate = this.coinService.rate;
    this.coinPurse = this.coinService.coinPurse;
  }
  sell(event: Event, transaction) {
    event.preventDefault();
    this.notice = '';
    // increament through each coin sold updating the rate and the diplay accordingly
    const { sold: sold }: { sold: number } = transaction.value;
    // check if the user has enough coins to sell the amount they specified
    console.log(
      `here's what's compared ${typeof this.coinPurse} and ${typeof sold}`
    );
    if (this.coinPurse > sold) {
      for (let iteration = 0; iteration < sold; iteration++) {
        console.log(`for loop triggerd`);
        this.coinService.decreaseCoins();
        this.coinService.decreaseRate();
        this.coinPurse = this.coinService.coinPurse;
        this.rate = this.coinService.rate;
        this.notice = `you sold ${iteration + 1} SHINTO COIN(S)`;
        this.activity = new Activity();
        this.activity.id = this.coinService.activities.length;
        this.activity.action = 'Sold';
        this.activity.amount = iteration + 1;
      }
    } else {
      this.notice = `you don't have that many coins to sell`;
    }
    if (this.activity) {
      // finish up the activity
      this.activity.value = this.activity.amount * this.rate;
      // send it to the ledger
      this.coinService.activities.push(this.activity);
    }
    transaction.reset();
  }
}
