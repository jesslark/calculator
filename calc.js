// dry it up
// deal with really long numbers
// make text field typable
// enable square root button
// deal with unexpected order button presses

var display = document.getElementById("display");
var clear = document.getElementById("clear");
var backspace = document.getElementById("backspace");

var decimal = document.getElementById("decimal");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var times = document.getElementById("times");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");

clear.addEventListener("click", function(event) { clearAll(event) }); 
backspace.addEventListener("click", function(event) { deleteLast(event) }); 

decimal.addEventListener("click", function(event) { numInput(event, ".")});
zero.addEventListener("click", function(event) { numInput(event, 0)}); 
one.addEventListener("click", function(event) { numInput(event, 1)}); 
two.addEventListener("click", function(event) { numInput(event, 2)}); 
three.addEventListener("click", function(event) { numInput(event, 3)}); 
four.addEventListener("click", function(event) { numInput(event, 4)}); 
five.addEventListener("click", function(event) { numInput(event, 5)}); 
six.addEventListener("click", function(event) { numInput(event, 6)}); 
seven.addEventListener("click", function(event) { numInput(event, 7)}); 
eight.addEventListener("click", function(event) { numInput(event, 8)}); 
nine.addEventListener("click", function(event) { numInput(event, 9)}); 

times.addEventListener("click", function(event) { multiply(event) }); 
minus.addEventListener("click", function(event) { subtract(event) }); 
plus.addEventListener("click", function(event) { add(event) }); 
divide.addEventListener("click", function(event) { division(event) }); 
equals.addEventListener("click", function(event) { findTotal(event) }); 

var currentNum = "";
var lastNum = "";
var result = "";
var currentOperation = "";

function numInput(event, arg) {
	event.preventDefault();
	arg = arg.toString();
	currentNum = currentNum + arg;
	updateDisplay();
}

function multiply(event) {
	event.preventDefault();
	if(currentOperation === "") {
		currentOperation = "times";
		lastNum = currentNum;
		currentNum = "";
	} 
}

function subtract(event) {
	event.preventDefault();
	if(currentOperation === "") {
		currentOperation = "minus";
		lastNum = currentNum;
		currentNum = "";
	} 
}

function add(event) {
	event.preventDefault();
	if(currentOperation === "") {
		currentOperation = "add";
		lastNum = currentNum;
		currentNum = "";
	} 
}

function division(event) {
	event.preventDefault();
	if(currentOperation === "") {
		currentOperation = "divide";
		lastNum = currentNum;
		currentNum = "";
	} 
}

function clearAll(event) {
	event.preventDefault();
	currentOperation = "";
	currentNum = "";
	lastNum = "";
	result = "";
	updateDisplay();
}

function deleteLast(event) {
	event.preventDefault();
	currentNum = currentNum.toString().slice(0, -1);
	Number(currentNum);
	updateDisplay(); 
}

function updateDisplay(arg) {
	arg = arg ? arg : currentNum;
	if(arg === "") { arg = "0"; }
	display.innerHTML = arg;
}

function findTotal(event) {
	event.preventDefault();
	lastNum = Number(lastNum);
	currentNum = Number(currentNum);
	if( currentOperation === "times" ) {
		result = lastNum*currentNum;
	} else if( currentOperation === "minus" ) {
		result = lastNum-currentNum;
	} else if( currentOperation === "add" ) {
		result = lastNum+currentNum;
	} else if( currentOperation === "divide" ) {
		result = lastNum/currentNum;
	}
	result = result.toString();
	updateDisplay(result);
	currentOperation = "";
	currentNum = result;
	newNum = 0;
}
