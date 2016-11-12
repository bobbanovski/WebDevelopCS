console.log("Script linked");
//Select elements on screen

var button = document.querySelector("button");
var isBlue = false

button.addEventListener("click", function(){
	// Use if statement
	// if (isBlue){
	// 	document.body.style.color ="black";
	// 	//isBlue = false;
	// } else {
	// 	document.body.style.color = "blue"
	// 	//isBlue = true;
	// }
	// isBlue = !isBlue;

	//Use class Toggle
	document.body.classList.toggle("blue");
})