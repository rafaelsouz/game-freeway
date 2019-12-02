//Actor
let xActor = 88;
let yActor = 366
let hit = false;

let point = 0;

function showActor(){
    image(imgActor, xActor, yActor, 30, 30)
}
    
    
function moveActor(){
    if (keyIsDown(UP_ARROW)){
        yActor -= 3
    }
    if (keyIsDown(DOWN_ARROW)){
        if (borderLimitY()){
            yActor += 3
        }
    }
    if (keyIsDown(LEFT_ARROW)){
        if (borderLimitX()){
            xActor -= 3
        }else{
            xActor += 4
        }
    }
    if (keyIsDown(RIGHT_ARROW)){
        if(borderLimitX()){
            xActor += 3
        }else{
            xActor -= 4
        }
    }
    
}

function borderLimitY(){
    if (yActor < 366){
        return true
    }
}

function borderLimitX(){
    if (xActor + 3 < 465 && xActor - 3 > 0 ){
        return true
    }
}

function collisionWithActor(){
    for (let i = 0; i < imgCars.length; i++) {
        hit =  collideRectCircle(xCars[i], yCars[i], length, heigth, xActor, yActor, 15)
        
        if (hit){
            resetPosiActor();
            soundHit.play()
            if (point > 0 ){
                point -=1;
            }
            
        }
    }
}

function resetPosiActor(){
    yActor = 366;
}

function showPoint(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(point, width / 5, 27);
}

function addPoint(){
    if (yActor < 12){
        point +=1;
        soundPoint.play();
        resetPosiActor();
    }
}

  
