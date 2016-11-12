// zero-indexed
var friends = ["James", "Mattias", "Jim", "David", "Mattias"];
var newFriends = [];

//any type of data
var random_collection = [49, true, "Hermione", null];

var nums = [45, 37, 8, 19];
nums.length

var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtongue", "Prongs"]
];

// Add to end of array
var colors = ["red", "orange", "yellow"];
colors.push("green");

// Remove from end of array
var newColors = ["red", "orange", "yellow"]
colors.pop();
// Get the removed element
var lastCol = newColors.pop();

// Add to front of array
var frontColors = ["red", "orange", "yellow"];
frontColors.unshift("infrared")

// Remove from front of array
var newFrontColors = ["red", "orange", "yellow"];
newFrontColors.shift();
//Get the removed element
var newCol = newCol.shift();

// Get index of item in array
friends.indexOf("David");
friends.indexOf("Mattias");
//if element not present, returns -1
friends.indexOf("Hagrid");

// Copy parts of the array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
// Copy entire array
var nums = [1,2,3];
var copiedNums = nums.slice();

// Splice will remove elements from array
var citrusSplice = fruits.splice(1,3);

// For Loop over array
var loopColors = ["red", "orange", "yellow", "green"];
for (var i = 0; i < colors.length; i++) {
	console.log.(colors[i]);
}

// ForEach
var forEachColors = ["red", "orange", "yellow", "green"];
forEachColors.forEach(function(color){
	console.log(color);
});
