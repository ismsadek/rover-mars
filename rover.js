 // ITERATION 1,3,5
 var rover = {
 	direction: "N",
 	x: 0,
 	y: 0,
  travelLog: []

 };
 
// ITERATION 2
 function turnLeft(rover){

 switch (rover.direction) {
 	case 'N':
 		rover.direction = "W";
 		break;
 	case 'S':
 		rover.direction = "E";
 		break;
 	case 'E':
 		rover.direction = "N";
 		break;
 	case 'W':
 		rover.direction = "S";
 		break;
 		
 }
   console.log("turnLeft was called! and the direction is " + rover.direction);
}




function turnRight(rover){

  switch (rover.direction) {
 	case 'N':
 		rover.direction = "E";
 		break;
 	case 'S':
 		rover.direction = "W";
 		break;
 	case 'E':
 		rover.direction = "S";
 		break;
 	case 'W':
 		rover.direction = "N";
 		break;
 		
 }
  console.log("turnRight was called! and the direction is " + rover.direction);
}


// ITERATION 3 AND BONUS BOUNDARIES
function moveForward(rover) {
  
  if (rover.direction === "W" && rover.x >0 ){
  		console.log("moveForward was called and the position is " + rover.x-1 + "," + rover.y );
      rover.travelLog.push(rover.x , rover.y);
  
  }
  if (rover.direction === "S" && rover.y < 9) {
  		console.log("moveForward was called and the position is " + rover.x + "," + rover.y+1);
  	  rover.travelLog.push(rover.x , rover.y);
    }
  	
    if(rover.direction === "N" && rover.y > 0) {
  		console.log("moveForward was called and the position is " + rover.x + "," + rover.y-1 );
  	  rover.travelLog.push(rover.x , rover.y);
    }

  	if(rover.direction ==="E" && rover.x < 9) {
  		console.log("moveForward was called and the position is " + rover.x+1 + "," + rover.y);	
      rover.travelLog.push(rover.x , rover.y);
  	}
}

function moveBackward(rover) {
  if (rover.direction === "W" && rover.x < 9 ){
    console.log("moveForward was called and the position is " + rover.x+1 + "," + rover.y );
      rover.travelLog.push(rover.x , rover.y);
  
  }
  if (rover.direction === "S" && rover.y > 0) {
    console.log("moveForward was called and the position is " + rover.x + "," + rover.y-1);
      rover.travelLog.push(rover.x , rover.y);
    }
    
if(rover.direction === "N" && rover.y < 9) {
    console.log("moveForward was called and the position is " + rover.x + "," + rover.y+1 );
      rover.travelLog.push(rover.x , rover.y);
    }

  if(rover.direction ==="E" && rover.x > 0) {
    console.log("moveForward was called and the position is " + rover.x-1 + "," + rover.y); 
      rover.travelLog.push(rover.x , rover.y);
    }
}

//  ITERATION 4

function command (order) {
  for(var i = 0; i < order.length; i++) {
    if(order[i] === "f"){
      moveForward(rover);
    } else if(order[i] === "r"){
        turnRight(rover);
    } else if(order[i] === "l") {
        turnLeft(rover);
    }
  }
}








