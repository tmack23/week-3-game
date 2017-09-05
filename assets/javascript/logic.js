// declared variables
var wins = 0;
var losses = 0;
var lives = 5;
var hint;
var yourGuess = [];
var chosenName;
var hiddenName;
var wrongGuess = [];


// grabs and displays variables
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("lives").innerHTML = lives;

// object of arrays
 var myObject = {

q1: ["Wrong, I have the most fantastic appropriatly sized hands.", "donaldtrump"],
q2: ["We are making a uge mistake, giving power to the one percent of the percent !", "berniesanders"],
q3: ["Whats Aleppo?","garyjohnson"],
q4: ["There is absolutley nothing in my emails.", "hillaryclinton"],
q5: ["There were atleast 26 emails reviewed as top secret, 15 of classified, and 36 of sensitive.", "jamescomey"]
}


// picks word from object
 function compPick(item) {
		 var tmpList = Object.keys(myObject);
		 var oneQ = tmpList[ Math.floor(Math.random()*tmpList.length) ];
		 var propertyValue = myObject[oneQ];
		 hint = propertyValue[0];
		 chosenName = propertyValue[1];
		 hiddenName = propertyValue[1].replace(/./gi, "-");
		 
		 
		 
		 console.log(chosenName);
		 // displays updated hint and name chosen
			document.getElementById("hint").innerHTML = hint;
			document.getElementById("who").innerHTML = hiddenName;
		}
compPick();

// captures letters pressed and calls other functions
document.onkeyup = function(event) {
	     yourGuess.push(String.fromCharCode(event.keyCode).toLowerCase()); 
	     var letter = yourGuess[yourGuess.length-1];
	     checkChar(letter);
	     
   };
 // resets lives to 5, for some reason declaring lives == 5 didnt work. 
function getLives (){
	lives = 6;
};
// evaluates and replaces string _ to a letter

function checkChar(c){
 for (var i = 0; i < chosenName.length; i++) {
	      	  if (c == chosenName[i].toLowerCase()){
	      	  	hiddenName = setCharAt(hiddenName,i,c);
				winLoose();
			var p = c;
		}} if (p !== c){
			wrongGuess.push(c);
			lives--;
			winLoose();
			document.getElementById("letters").innerHTML = wrongGuess;
			
			document.getElementById("lives").innerHTML = lives;
}

document.getElementById("who").innerHTML = hiddenName;
console.log(hiddenName);
};


function setCharAt(str,index,chr) {
	
	return str.substr(0,index) + chr + str.substr(index+1);

};
  			
// evaluates the condtions of the game and updates score
function winLoose(){
	if (lives == 0) {
			alert("YOU LOOSE.")
	     	getLives();
	    	compPick();
	    	losses++;
	     	wrongGuess = [""];
	     	document.getElementById("lives").innerHTML = lives;
	     document.getElementById("letters").innerHTML = wrongGuess;
	     document.getElementById("losses").innerHTML = losses;
	    
			 } else if (hiddenName === chosenName){
			 		document.getElementById("who").innerHTML = hiddenName;
					alert("you win");
					wins++;
					getLives();
	    			compPick();
	    			document.getElementById("wins").innerHTML = wins;
				}
};
