/*********************************
 * Project Hall in JS
 * Written by David & Liz
 * v1.0
 ********************************/

// Make Square Class
function Square(x,y) {
	this.x = x;
	this.y = y;
	this.type; // Is it a wallPart or a moveSquare?
}

// Wall object that takes squares
function Wall(square) {
	// Three continguous wallParts
}

// Make Board Class
function Board() {
	// array of square objects
	this.grid = [];
	// loop to add square objects to grid to make board

	for (var i = 0; i < 16; i++)
	{
		// first pass: row
		this.grid.push([]);

		for (var j = 0; j < 16; j++) {
			// second pass: columns
			this.grid[i].push(new Square(i,j)); // Gives your square object x,y coordinates
		}
	}
}

function RulesEngine() {
	// Method that checks for type of square (move or wall)
	this.squareChecker = function(square) {
			if (square.x % 2 === 0 && square.y % 2 === 0) {
			console.log("This is a moveSquare"); // note, console.log() is a great way to test stuff in JS
		} else {
			console.log("this is a wallSquare part");
		}
	};

	// Method: to check if a player is illegally blocked based on a wall placement

	// Method: Wall collision checker

	// Method: Pawn collision detection checker

	// Method: Pawn cant move because of other pawn, needs diag move
	
	// Method: to check if player has won

	// whose turn it is

	// Method: verifies you're playing by the rules
}

function Player() {

}