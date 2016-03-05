var x = parseInt(prompt("First number please"));
var y = parseInt(prompt("Second number please"));

if (x > y) {
	var upper = x;
	var lower = y;
} else if (y > x) {
	var upper = y;
	var lower = x;
} else {
	alert("Please refresh page and input two different numbers.")
}

console.log(x, y, upper, lower);

function makeRando(lower, upper){
	
	rando = Math.floor(Math.random() * (upper-lower+ lower)) + 1; 
	return rando;
}

makeRando(lower, upper);

console.log(x, y, upper, lower, rando);


document.write("A random number between "+ lower +" and "+ upper + " is " + rando);
