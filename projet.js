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
      }   
      console.log(`Turning left, rover is now going to direction ${rover.direction}` );  
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
      }   
      console.log(`Turning right, rover is now going to direction ${rover.direction}` ); 
};

// MOVING FUNCTION

function moveForward(rover) {
    let dirX = rover.x;
    let dirY = rover.y;
    let roverDir = rover.direction;

    
};