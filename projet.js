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
    y : 0,
    travelLog : []
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
    return console.log(`* Turning left, rover is now going to direction ${rover.direction} *`);  
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
    return console.log(`* Turning right, rover is now going to direction ${rover.direction} *`); 
};

// MOVING FUNCTION

function moveForward(rover) {
    if ((rover.direction === "N" && rover.y <= 0) ||
        (rover.direction === "E" && rover.x >= 9) ||
        (rover.direction === "S" && rover.y >= 9) ||
        (rover.direction === "W" && rover.x <= 0)) {

        return console.log("* Cannot move in that direction *");

    } else if (rover.direction === "N" && rover.y <= 9) {
    rover.y -= 1;

    } else if (rover.direction === "E" && rover.x < 9) {
    rover.x += 1;      

    } else if (rover.direction === "S" && rover.y  < 9) {
    rover.y += 1;

    } else if (rover.direction === "W" && rover.x < 9) {
    rover.x -= 1;      
    };

    console.log(`* Moving forward *`);
    console.log(`* Current rover direction is ${rover.direction} *`);
};

// PILOT FUNCTION USING 'l', 'r', 'f'

function pilotRover(str) {
    for (i = 0; i < str.length; i++) {
        switch(str[i]) {
          case "l":
            turnLeft(rover);
            rover.travelLog.push("turnLeft was called!");
            break;
          case "r":
            turnRight(rover);
            rover.travelLog.push("turnRight was called!");
            break;
          case "f":
            moveForward(rover);
            rover.travelLog.push("moveForward was called");
            break;
        };
    };
    console.log("Rover's history: ", rover.travelLog);
    grid[rover.x][rover.y] = rover.direction;
    console.table(grid);
};

// PROMPT

const prompt = require("prompt");

const properties = [
    {
        name: "move",
        description: "What's rover's next move ?",
        type: "string",
        validator: /^[lfr]+$/,
        warning: "Invalid output, only use 'l' for left, 'r' for right, and 'f' for forward"
    }
];

function play () {

    prompt.start();

    function onErr(err) {
    return console.log("Error", err);
    };

    prompt.get(properties, function (err, res) {
        if (err) {
            return onErr(err);
        };
        pilotRover(res.move);
    });
};

play();