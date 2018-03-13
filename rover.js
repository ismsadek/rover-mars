 // ITERATION 1,3,5
 var rover = {
 	direction: "N",
 	x: 0,
 	y: 0,
  travelLog: [],
  grid: [ [0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [1,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [1,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,1,0] ]


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
  
  if (rover.direction === "W" && rover.x >= 0 && rover.x <10 && rover.grid[rover.x-1][rover.y] === 0) {
  		rover.x -=1;
      console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y+ ")" );
      rover.travelLog.push([rover.x , rover.y]);
  
    } else if (rover.direction === "S" && rover.y >= 0 && rover.y < 9 && rover.grid[rover.x][rover.y+1] === 0) {
  		rover.y +=1;
      console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y+ ")");
  	  rover.travelLog.push([rover.x , rover.y]);
    } else if(rover.direction === "N" && rover.y > 0 && rover.y <= 9 && rover.grid[rover.x][rover.y-1] === 0) {
  		rover.y -=1;
      console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y+ ")" );
  	  rover.travelLog.push([rover.x , rover.y]);
    } else if(rover.direction ==="E" && rover.x >= 0 && rover.x < 9 && rover.grid[rover.x+1][rover.y] === 0) {
  		rover.x +=1;
      console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y+ ")");	
      rover.travelLog.push([rover.x , rover.y]);
  	} else {
    console.log("Has llegado al final del mapa o hay un obstáculo, cambia la dirección por favor");
  }
}

function moveBackward(rover) {
 if (rover.direction === "W" && rover.x >= 0 && rover.x < 9 && rover.grid[rover.x+1][rover.y] === 0){
    rover.x +=1;
    console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y +")" );
    rover.travelLog.push([rover.x , rover.y]);
  
  } else if (rover.direction === "S" && rover.y > 0 && rover.y <= 9 && rover.grid[rover.x][rover.y-1] === 0) {
    rover.y -=1; 
    console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y +")");
    rover.travelLog.push([rover.x , rover.y]);
  } else if(rover.direction === "N" && rover.y >= 0 && rover.y < 9 && rover.grid[rover.x][rover.y+1] === 0) {
    rover.y +=1;
    console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y +")" );
      rover.travelLog.push([rover.x , rover.y]);
  } else if(rover.direction ==="E" && rover.x > 0 && rover.x <= 9 && rover.grid[rover.x-1][rover.y] === 0) {
    rover.x -=1;
    console.log("moveForward was called and the position is " + "(" + rover.x + "," + rover.y +")"); 
      rover.travelLog.push([rover.x , rover.y]);
  } else {
    console.log("Has llegado al final del mapa o hay un obstáculo, cambia la dirección por favor");
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
    } else if(order[i] === "b")
      moveBackward(rover);
     else {
      console.log("Introduzca r,l,f o b");
    }
  }
}









