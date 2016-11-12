console.log("HigherOrders Linked");

//Pass a function to another function
function sing(){
	console.log("twinkle twinkle little star");
	console.log("how i wonder...");
}

//use above function as input
// setInterval(inputFunction, interval in ms)
//setInterval(sing, 1000)
// stop with command clearInterval(#)

// instead of defining function beforehand,
// can use anonymous function
setInterval(function(){
	console.log("twinkle");
}, 1000)