import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Activity } from '../models/activities.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ledger-detail',
  templateUrl: './ledger-detail.component.html',
  styleUrls: ['./ledger-detail.component.css'],
})
export class LedgerDetailComponent implements OnInit {
  activity: Activity;
  constructor(
    private readonly coinService: CoinService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.activity = this.coinService.activities[params.get('id')];
    });
  }
}
