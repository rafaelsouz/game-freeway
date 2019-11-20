const resoX = 500
const resoY = 500

function setup() {
    createCanvas(resoX, resoY);
}
  
function draw() {
  background(imgRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  loopCar();
  collisionWithActor();
  
}
