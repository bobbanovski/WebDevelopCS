//instead of array for storage
var personArray = ["Cindy", 32, "Location"];
//use object - no item ordering
var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};

console.log(person["name"]);
console.log(person.name); //doesn't work if 1st character is number

//Update data
person["age"] += 1;
person.city = "London";
person["city"] = "Madrid";

//Create object
//Create empty object first
var personNew = {}
personNew.name = "Bob";
personNew.age = 41;
personNew.city = "LA";

//Initialise object
var personInit = {
	name: "JimBob",
	age: 31,
	city: "OR"
};

var personFinal = new Object();
personFinal.name = "Travis";
personFinal.age	= 34;
personFinal.city = "VI";