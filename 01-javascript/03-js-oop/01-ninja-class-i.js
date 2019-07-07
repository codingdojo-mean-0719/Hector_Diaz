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

}