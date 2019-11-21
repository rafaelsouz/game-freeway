const resoX = 500
const resoY = 400

function setup() {
    createCanvas(resoX, resoY);
    musicTheme.loop();
}
  
function draw() {
  background(imgRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  loopCar();
  collisionWithActor();
  showPoint();
  addPoint();
  
}
