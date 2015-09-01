/*********************************
 * Project Hall in JS
 * Written by David & Liz
 * v1.0
 ********************************/

function Game() {
	// promt
	console.log("Neo...wake up");
	console.log("A small matrix to place your wall?")
	console.log("Use <number>,<number> to enter your selection");

	// set up the game
	var board = new Board();
	var player = new Player();
}

function Player() {
	// place a vertical wall
	this.placeWallVert = function(x,y) {
		var i = 0;
		do {
			board.grid[x+i][y].wallOn = 1;
			i = i + 1;
		} while (i <= 2);
			
	};

	// place a horizontal wall
	this.placeWallHorizontal = function(x,y) {
		var i = 0;
		do {
			board.grid[x][y+i].wallOn = 1;
			i = i + 1;
		} while (i <= 2);
			
	};
}

// NOTE: these are function objects until constructed
function Square(x,y) {
	this.x = x;
	this.y = y;
	this.wallOn = 0;
	this.pieceOn = 0;
}

// for dev purposes, making a 4 by 4 board to start
function Board() {
	// array of square objects
	this.grid = [];
	// loop to add square objects to grid to make board
	for (var i = 0; i < 4; i++)
	{
		// first pass: rows
		this.grid.push([]);
		for (var j = 0; j < 4; j++) {
			// second pass: columns
			this.grid[i].push(new Square(i,j)); // Constrcuts square objects
												// with x,y coordinates
		}
	}
}

function RulesEngine() {
	// Method that checks for type of square (move or wall)
	this.squareChecker = function(square) {
		if (square.x % 2 === 0 && square.y % 2 === 0) {
			console.log("This is a moveSquare");
		} else {
			console.log("this is a wallSquare part");
	}
};

	/*********
	 * To Dos
	 *********/

	// Method: to check if a player is illegally blocked based on a wall placement

	// Method: Wall collision checker

	// Method: Pawn collision detection checker

	// Method: Pawn cant move because of other pawn, needs diag move
	
	// Method: to check if player has won

	// whose turn it is

	// Method: verifies you're playing by the rules
}

