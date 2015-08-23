/*********************************
 * Project Hall in JS
 * Written by David & Liz
 * v1.0
 ********************************/

// Make Square Class
function Square(x,y) {
	this.x = x;
	this.y = y;
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

function Game() {
	// Method that checks for type of square (move or wall)
	this.squareChecker = function(square) {
			if (square.x % 2 === 0 && square.y % 2 === 0) {
			console.log("This is a moveSquare"); // note, this is a great way to test stuff in JS
		} else {
			console.log("this is a wallSquare");
		}
	};
	
	// whose turn it is

	// method verifies you're playing by the rules
}

function Player() {

}