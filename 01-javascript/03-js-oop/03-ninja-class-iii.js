class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("My ninja name is "+this.name);
    }
    showStatus(){
        console.log("Name: "+this.name+" Health: "+this.health+" Speed: "+this.speed+" Strength: "+this.strength);
    }
    drinkSake(){
        this.health += 1;
        console.log("Ahh, that's good sake.")
    }
}

class Sensei extends Ninja{
    constructor(name){
            super(name);
            super.health = 200;
            super.speed = 10;
            super.strength = 10;
            this.wisdom = 10;

    }
    speakWisdon(){
        super.drinkSake();
    }
    showStatus(){
        super.showStatus
    }

}