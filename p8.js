setClickHandler("rollDice", diceRoll);



var Categories = [ 
{name:"ones", function() {}},
{name:"twos", function() {}},
{name:"threes", function(){}},
{name:"fours", function(){}},
{name:"fives", function(){}},
{name:"threeOfKind", function(){}},
{name:"fourOfKind", function(){}},
{name:"fullHouse", function(){}},
{name:"smallStraight", function(){}},
{name:"largeStraight", function(){}},
{name:"random", function(){}},
{name:"fiveOfKind", function(){}}
];
setHTML("scores" , Categories.name);
function diceRoll (){
	diceArray = [(getInput("diceValues"))];
}
console.log(diceArray);