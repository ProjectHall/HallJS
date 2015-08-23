/*********************************
 * Project Hall in JS
 * Written by David & Liz
 * v1.0
 ********************************/

// Make Square Object
function Square() {
	
}

// Make Board Object
function Board() {
	// array of square objects
	this.grid = [];
	// loop to add square objects to grid to make board

	for (var i = 0; i < 3; i++)
	{
		// first pass: row
		this.grid.push([]);

		for (var j = 0; j < 3; j++) {
			// second pass: columns
			this.grid[i].push(new Square());
		}
	}
}