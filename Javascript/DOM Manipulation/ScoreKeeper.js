console.log("scorekeeper linked");

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#p1score");
var p2ScoreDisplay = document.querySelector("#p2score");
var gameOver = false;
var winningDisplay = document.getElementById("winning");
var winningSet = document.querySelector("input");
// winningDisplay.textContent
winningDisplay.textContent = winningSet.value;
var winningScore = 5;

winningSet.addEventListener("change", function(){
	winningDisplay.textContent = winningSet.value
	winningScore = Number(winningSet.value);
	reset();
})

p1Button.addEventListener("click", function(){
	console.log("button1 clicked");
	if(!gameOver){
		p1Score++;	
		if(p1Score === winningScore){
			console.log("Game Over");
			gameOver = true;
			p1ScoreDisplay.classList.add("winner");		
		}			
		p1ScoreDisplay.textContent=p1Score;
	}
})
p2Button.addEventListener("click", function(){
	console.log("button2 clicked");
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			console.log("Game Over");
			gameOver = true;
			p2ScoreDisplay.classList.add("winner");
		}		
		p2ScoreDisplay.textContent=p2Score
	}
})
resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = 0;
	p2ScoreDisplay.textContent = 0;
	gameOver = false;
	p1ScoreDisplay.classList.remove("winner");
	p2ScoreDisplay.classList.remove("winner");
}

