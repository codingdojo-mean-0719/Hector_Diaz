import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Activity } from '../models/activities.model';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent implements OnInit {
  activities: Activity[];
  constructor(private readonly coinService: CoinService) {}

  ngOnInit() {
    this.activities = this.coinService.activities;
  }
}
