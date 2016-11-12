console.log("Exercise linked");
function isEven(num){
	if (num % 2 == 0)
		return true;
	else
		return false;
}

function factorial(num){
	var result = 1;
	while (num > 0){
		result = num * result;
		num--;
	}
	return result;
}

function kebabToSnake(text){
	var result = text.replace("-", "_");
	return result;
}