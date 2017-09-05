

var wins = 0;
var losses = 0;
var guessLeft = 9;
 var yourGuess = [];
 var computerPick = "";
 
var myArray  = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.getElementById("data1").innerHTML = wins;
document.getElementById("data2").innerHTML = losses;
document.getElementById("data3").innerHTML = guessLeft;

console.log(winning);

var compPick = function(item) {
		 var item = myArray[Math.floor(Math.random()*myArray.length)];
		 console.log(item);

document.onkeyup = function(event) {
	for (var i=0; i <= yourGuess.length; i++) {
	  	if ((String.fromCharCode(event.keyCode)) !== yourGuess[i]) {
	  		yourGuess.push(String.fromCharCode(event.keyCode).toLowerCase());
  	} else {
  		 
  	}
  	document.getElementById("data4").innerHTML = yourGuess;
  };
	  

console.log(yourGuess);

	if (yourGuess == event) {
	wins++;
	yourGuess == "";
	guessLeft == 9;
	} else if (yourGuess !== item){
	guessLeft--;
	} else if (yourGuess !== item && guessLeft == 0){
	losses++;
	guessLeft == 9;
	yourGuess == "";
}

}};
compPick();

