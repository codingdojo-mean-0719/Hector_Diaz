//code
console.log(hello);                                   
var hello = 'world';                                 
//prediction
//console will log 'undefined'
// ran code
// PREDICTION CORRECT

//code
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// preditciton 
//console will log needle
//var neede will stay "haystack"
//PREDICTION CORRECT

//code
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//prediction
//console will log 'only okay'
//console will log super cool
//PREDICTION INCORRECT
//print was never called so the first console log I predicted does not happen

//code 
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//prediction
//console logs 'chicken'
//console logs "half-chicken"
//possible error for trying to name a varible food twice
//PREDICTION mostly CORRECT
//the second var food only in the function

//code
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//prediction
//it will throw and error
//  PREDICTION CORRECTION

//code
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//prediction
//console will log  undefined
//console will log 'rock'
//console will log 'r&b'
//console will log 'disco'
//PREDICTION CORRECT

//code 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//prediction
//console will log 'san jose'
//console will log 'seattle'
//console will log  'burbank'
//console wil log 'san jose'
//PREDICITON CORRECT

//code
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//prediction
//console will log true
//console will log 'closed for now"
//or it will give an error because of the const
//PREDICITION VERY INCORRECT
//first it returned an object with the first console log.
//since the second function with arguements that id now satisfy the first if condition in the function the else was triggerd. and since the else attempts to change the type of the const it threw an error.
//imagine that. const have to constantly be the same type.
