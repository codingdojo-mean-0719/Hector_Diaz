'use strict';
class Bike {
  constructor(cost, speed) {
    this.miles = 0;
    this.price = cost;
    this.maxSpeed = speed;
  }
  display() {
    console.log(`
      PRICE: ${this.price},
      MILAGE: ${this.miles} ,
      MAXIUM SPEED: ${this.maxSpeed}
      `);
    return this;
  }
  ride() {
    this.miles += 10;
    console.log(`TEN MILES ADDED TO MILAGE`);
    return this;
  }
  reverse() {
    if (this.miles - 5 > 0) {
      this.miles -= 5;
      console.log('CORRECTION: FIVE MILES DECRESED FROM MILAGE');
      return this;
    }
    console.log(`
         YOU ARE ABOUT TO REVRSE BIKE OUT OF EXISTANCE.
         NOT POSSBLE!
      `);
    return this;
  }
}
const LowRider = new Bike(600, 10);
const beater = new Bike(10, 20);
const roadTopLine = new Bike(5000, 35);
LowRider.ride()
  .ride()
  .ride()
  .reverse()
  .display();
beater
  .ride()
  .reverse()
  .ride()
  .reverse()
  .display();
roadTopLine
  .reverse()
  .reverse()
  .reverse()
  .display();
