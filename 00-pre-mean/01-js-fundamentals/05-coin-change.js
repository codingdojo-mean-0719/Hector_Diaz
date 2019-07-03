function coinChange(amount){
    var quarters = amount/25,
        change = {};
  
    quarters = Number((quarters).toFixed(0));
    console.log(quarters);
    amount -= quarters * 25;
    change.quarters =quarters;
    console.log(amount)
    if(amount > 10){
      var dimes = amount/10;
      dimes = Number((dimes).toFixed(0));
      amount-=dimes * 10;
      change.dimes = dimes;
    }else if(amount > 5){
      var nickels = amount/5;
      nickels = Number((nickels).toFixed(0));
      amount -= nickels * 5;
      change.nickels = nickels
    }else if(amount){
      var pennies = amount;
      change.pennies = amount;
    }
    
   return change
  }
  
  console.log(coinChange(100))