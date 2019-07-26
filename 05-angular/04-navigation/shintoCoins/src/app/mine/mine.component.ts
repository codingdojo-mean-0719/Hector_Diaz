import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Guess } from '../models/quess.model';
import { Activity } from '../models/activities.model';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css'],
})
export class MineComponent implements OnInit {
  constructor(private coinService: CoinService) {}
  guess = new Guess();
  activity = new Activity();
  ngOnInit() {
    // set up a new answer for the question
    this.newAnswer();
  }
  newAnswer(): void {
    this.guess.answer = Math.floor(Math.random() * 10) + 1;
    console.log('this is the answer', this.guess.answer);
  }

  mine(event: Event, mined): void {
    console.log('mined triggerd');
    // destructure the mined data and type it to keep ts happy
    // not sure if this way of typing is apporpriate?
    const { question: question }: { question: string } = mined.value;
    event.preventDefault();
    // take the destructured mined data to an int and make that the value of guess.question so that question and answer can be compared
    this.guess.question = parseInt(question, 10);
    this.guess.result = '';
    console.log(
      'here is question',
      question,
      this.guess.question,
      typeof this.guess.question,
      this.guess.answer,
      this.guess
    );
    if (this.guess.answer === this.guess.question) {
      // add new coin to  coin purse
      this.coinService.addCoins();
      // set up activity information
      this.activity.id = this.coinService.activities.length;
      this.activity.action = 'Mined';
      this.activity.amount = 1;
      this.activity.value = this.coinService.rate;
      // push in new activity
      this.coinService.addActivity(this.activity);
      // reset the form
      mined.reset();
      // get a new number to avoid cashing in on the answer multiple times.
      this.newAnswer();
      // set up the users feedback message
      this.guess.result = 'you are a good programmer.';
    } else {
      console.log('incorrect guess triggerd');
      mined.reset();
      this.newAnswer();
      // set up a new number to keep it challenging
      this.guess.result = 'try again grasshopper programer';
    }
  }
}
