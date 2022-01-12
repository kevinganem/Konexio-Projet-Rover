// PROJECT ROVER

const grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

const rover = {
    direction : "N",
    x : 0,
    y : 0
};

// TURN LEFT FUNCTION

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
          rover.direction = "W";
          break;
        case "W":
          rover.direction = "S";
          break;
        case "S":
          rover.direction = "E";
          break;
        case "E":
          rover.direction = "N";
          break; 
      };
    return console.log(`Turning left, rover is now going to direction ${rover.direction}`);  
};

// TURN RIGHT FUNCTION

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
          rover.direction = "E";
          break;
        case "E":
          rover.direction = "S";
          break;
        case "S":
          rover.direction = "W";
          break;
        case "W":
          rover.direction = "N";
          break; 
      };
    return console.log(`Turning right, rover is now going to direction ${rover.direction}`); 
};

// MOVING FUNCTION

function moveForward(rover) {
    if ((rover.direction === "N" && rover.y <= 0) ||
        (rover.direction === "E" && rover.x >= 9) ||
        (rover.direction === "S" && rover.y >= 9) ||
        (rover.direction === "W" && rover.x <= 0)) {

        return console.log("Cannot move in that direction.");

    } else if (rover.direction === "N" && rover.y <= 9) {
    rover.y -= 1;

    } else if (rover.direction === "E" && rover.x < 9) {
    rover.x += 1;      

    } else if (rover.direction === "S" && rover.y  < 9) {
    rover.y += 1;

    } else if (rover.direction === "W" && rover.x < 9) {
    rover.x -= 1;      
    };

    console.log(`moveForward was called.`);
    console.log(`Current rover position = x: ${rover.x}, y: ${rover.y}`);
    console.log(`Current rover direction is ${rover.direction}`);
};

(moveForward(rover));
(turnRight(rover));
(moveForward(rover));
(moveForward(rover));
(turnRight(rover));
(moveForward(rover));
(moveForward(rover));
(turnLeft(rover));
(moveForward(rover));

grid[rover.x][rover.y] = rover.direction;

console.table(grid);