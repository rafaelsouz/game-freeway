//Actor
let xActor = 100;
let yActor = 366
let hit = false;

function showActor(){
    Image(imgActor, xActor, yActor, 30, 30)
}
    
    
function moveActor(){
    if (keyIsDown(UP_ARROW)){
      yActor -= 2
    }
    if (keyIsDown(DOWN_ARROW)){
      yActor += 2
    }
}

function collisionWithActor(){
    for (let i = 0; i < imgCars.length; i++) {
        hit =  collideRectCircle(xCars[i], yCars[i], length, heigth, xActor, yActor, 20)
        
        if (hit){
            resetPosiActor();
        }
    }
}

function resetPosiActor(){
    yActor = 366;
}
  
