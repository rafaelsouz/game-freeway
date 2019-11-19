//Actor
let xActor;
let yActor = 366



function showActor(){
    Image(imgActor, resoX - 50, resoY - 200, 30, 30)
}
    
    
function moveActor(){
    if (keyIsDown(UP_ARROW)){
      yActor -= 2
    }
    if (keyIsDown(DOWN_ARROW)){
      yActor += 2
    }
  }
  
