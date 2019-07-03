var tiger = {
    character : "Tiger"
};
tiger.north = pooh;
var pooh = {
    character : "Winnie the Pooh"
};
pooh.north = chris;
pooh.west = pigglet;
pooh.east = bees;
pooh.south = tiger;
var pigglet = {
    character : "Pigglet"
};
pigglet.north = owl;
pigglet.east = pooh;
var owl = {
    character : "Owl"
};
owl.south = pigglet
owl.east = chris
var rabbit = {
    character : "Rabbit"
};
rabbit.east = chris;
rabbit.west = gopher
rabbit.south = bees;
var eeyore = {
    character : "Eeyore"
};
eeyore.south = kanga;
eeyore.east =   heffalumps;
var kanga = {
    character : "Kanga"
};
kanga.south = chris;
kanga.noth = eeyore;
var chris = {
    character : "Christopher Robin"
};
chris.north =kanga
chris.east = rabbit
chris.south = pooh;
chris.west = owl;
var gopher = {
    character : "gopher"
};
gopher.wast = rabbit;
var bees = {
    character : "Bess"
};
bees.north = rabbit;
bees.west = pooh;
var heffalumps = {
    character : "Heffalumps"
};
bees.west = eeyore;