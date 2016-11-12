//"use strict" prevents the creation of global objects

// this not inside of a declared object

//When not inside an object, its value is that of the 
//Global object. For browser this is window object
console.log(this) // window object

// value refers to the global object
//When inside a function
//Not inside a new object - assigned to global (window) object
function anyFunction() {
	return this;
}

function anotherFunction() {
	this.person = "Robbo";
}

console.log(person)

anyFunction(); //window