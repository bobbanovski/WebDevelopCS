console.log("ToDo linked");

var firstLi = document.querySelector("li");
var liAll = document.querySelectorAll("li");

for(var i = 0; i < liAll.length; i++){
	liAll[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});
	liAll[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});
	liAll[i].addEventListener("click", function(){
		console.log("clicked");
		this.classList.toggle("done");
	});
}

//For a single li in a ul
// firstLi.addEventListener("mouseover", function(){
// 	console.log("mouse over");
// 	firstLi.style.color = "green";
// });
// firstLi.addEventListener("mouseout", function(){
// 	firstLi.style.color = "black";
// })
