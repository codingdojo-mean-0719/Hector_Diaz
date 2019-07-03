var tiger = {
    character : "Tiger",
    greet : function(){
        console.log("i Am ThE tIgEr cHaRaCtEr")
    }
};
var pooh = {
    character : "Winnie the Pooh",
    greet : function(){
            console.log("i Am ThE pOoH cHaRaCtEr")
        }
    };
var pigglet = {
character : "Pigglet",
greet : function(){
    console.log("i Am ThE "+pigglet.character+" cHaRaCtEr")
}
};
var owl = {
character : "Owl",
greet : function(){
    console.log("i Am ThE "+owl.character+" cHaRaCtEr")
}
};
var rabbit = {
character : "Rabbit",
greet : function(){
    console.log("i Am ThE "+rabbit.character+" cHaRaCtEr")
}
};
var eeyore = {
character : "Eeyore",
greet : function(){
    console.log("i Am ThE "+eeyore.character+" cHaRaCtEr")
}
};
var kanga = {
character : "Kanga",
greet : function(){
    console.log("i Am ThE "+kanga.character+" cHaRaCtEr")
}
};
var chris = {
character : "Christopher Robin",
greet : function(){
    console.log("i Am ThE "+chris.character+" cHaRaCtEr")
}
};
var gopher = {
character : "gopher",
greet : function(){
    console.log("i Am ThE "+gopher.character+" cHaRaCtEr")
}
};
var bees = {
character : "Bess",
greet : function(){
        console.log("i Am ThE "+bees.character+" cHaRaCtEr")
    }
};
var heffalumps = {
character : "Heffalumps",
greet : function(){
        console.log("i Am ThE "+heffalumps.character+" cHaRaCtEr")
    }
};

bees.north = rabbit;
bees.west = pooh;
gopher.wast = rabbit;
bees.west = eeyore;
chris.north =kanga;
chris.east = rabbit;
chris.south = pooh;
chris.west = owl;
pooh.north = chris;
pooh.west = pigglet;
pooh.east = bees;
pooh.south = tiger;
pigglet.north = owl;
owl.south = pigglet
owl.east = chris
pigglet.east = pooh;
rabbit.east = chris;
rabbit.west = gopher
rabbit.south = bees;
eeyore.south = kanga;
kanga.south = chris;
kanga.north = eeyore;
eeyore.east = heffalumps;

tiger.north = pooh;
var player = {
    location : chris
};
function walk(direction){
    console.log("this is the where the player will end up at",player.location[direction]);
    console.log("this is where the player is",player.location);
    if(player.location[direction]){
        player.location = player.location[direction];
        console.log("You are now at "+player.location.character+"'s house.");
    }else{
        console.log("Oh no, looks like you're at the edge of the woods.");
    };
};