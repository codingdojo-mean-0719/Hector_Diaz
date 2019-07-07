function ninjaMaker(name){
    var strength = 3,
    speed = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My ninja name is "+this.name);
    }
    this.showStatus = function(){
        console.log("Name: "+this.name+" Health: "+this.health+" Speed: "+speed+" Strength: "+strength);
    }
    this.kick = function(ninja){
      if(!ninja || !ninja.health){
        throw new Error('Target must have health')
      }
        ninja.health -= 15;
        console.log(ninja.name+' was kicked by '+this.name+" and lost 15 health");
        strength += 1;
        console.log(strength)
    }
    this.punch = function(ninja){
        if(!ninja || !ninja.health){
            throw new Error('Target must have health');
        }
        ninja.health -= 5;
        console.log(ninja.health)
        console.log(ninja.name+" was punched by "+this.name+" and lost 5 health");
    }
    this.drinkSake = function(){
        self.health += 10;
        console.log("ahh, refreshing!")
    }

}