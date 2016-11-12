var colors= generateRandomCol(6);
//[
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var header = document.querySelector("h1");
var numberOfSquares = 6;

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");

var resetButton = document.getElementById("reset");

init();
function init(){
	//Mode button listeners
	//Change difficulty levels
	// var easyBtn = document.getElementById("easyBtn");
	// var hardBtn = document.getElementById("hardBtn");
	var modeButtons = document.querySelectorAll(".mode");
	for(var i = 0; i <modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected")
			//number of squares to show
			// pick colors
			
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numberOfSquares = 3;
			// } else {
			// 	numberOfSquares = 6;
			// }
			reset();
			//generate new colors
			// colors = generateRandomCol(numberOfSquares);
			// //pick new random color
			// pickedColor = pickColor();
			// //Change colorDisplay to match picked Color
			// colorDisplay.textContent = pickedColor;
			// //change square colors
			// for(var i = 0; i < squares.length; i++)	{
			// 	squares[i].style.background = colors[i];
			// }
		});
	}

	for(var i = 0; i < squares.length; i++){
		//Add initial colors
		//squares[i].style.background = colors[i];

		//Add click listeners to each square
		squares[i].addEventListener("click", function(){
			//Get color of clicked square
			//console.log(this.style.background);
			var clickedColor = this.style.background;
			//Compare to pickedColor
			if (clickedColor === pickedColor){ //If Correct
				changeColors(clickedColor);
				messageDisplay.textContent = "Play Again?";
				header.style.background = clickedColor;
				resetButton.textContent = "Play Again";
			} else {
				console.log("wrong");
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
};

resetButton.addEventListener("click", function(){
	console.log("Clicked button");
	header.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colours";
	//generate new colors
	colors = generateRandomCol(numberOfSquares);
	//pick new random color
	pickedColor = pickColor();
	//Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change square colors
	for(var i = 0; i < squares.length; i++)	{
		squares[i].style.background = colors[i];
	}
});


// easyBtn.addEventListener("click", function(){
// 	header.style.background = ("steelblue")
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected")
// 	numberOfSquares = 3;
// 	colors = generateRandomCol(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";

// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click", function(){
// 	header.style.background = ("steelblue")
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomCol(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";

// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });



function changeColors(color){
	//Loop through squares, change color	
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;	
	}
}

function pickColor(){
	//Get random number
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateRandomCol(num){
	//create array
	var arr = [];
	//add random colors
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	//return array
	return arr;
}
function randomColor(){
	//pick red 0 to 255
	var red = Math.floor(Math.random() * 256)
	//green
	var green = Math.floor(Math.random() * 256)
	//blue
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red +", " + green + ", " + blue + ")";
}

function reset(){
	colors = generateRandomCol(numberOfSquares);
	//pick new random color
	pickedColor = pickColor();
	//Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours"
	messageDisplay.textContent = "";
	//change square colors
	for(var i = 0; i < squares.length; i++)	{
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.background = "steelblue";	
}