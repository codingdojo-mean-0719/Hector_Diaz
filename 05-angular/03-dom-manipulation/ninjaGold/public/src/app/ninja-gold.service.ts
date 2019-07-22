import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NinjaGoldService {
  constructor() {}
  proccessGold(range: number[]): number {
    const [start, end] = range;
    return Math.floor(Math.random() * (start - end) + end);
  }
}
