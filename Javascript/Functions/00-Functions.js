function singSong() {
	console.log("Twinkle twinkle little star");
	console.log("How i wonder what you are");
	console.log("Up above");
	console.log("Like a diamond in the sky");
}
singSong()
function square(num) {
	console.log(num * num);
}
square(10)

function area(length, width) {
	console.log(length * width);
}
area(9,2)

//function declaration
function capitalize(str) {
	if(typeof str === "number"){
		return "not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris";
var capital = capitalize(city)
console.log(capital);

//function expression
//var capitalize = function(str) {
//return str.charAt(0).toUpperCase() + str.slice(1);
//}

function sayHello(name){
	console.log("Hello there, " + name + "!");
}