let imgRoad;
let imgActor;

let imgCar;
let imgCar1;
let imgCar2;

let musicTheme;
let soundHit;
let soundPoint;

function preload(){
    imgRoad = loadImage("assets/estrada.png");
    imgActor = loadImage("assets/ator-1.png");
    imgCar = loadImage("assets/carro-1.png");
    imgCar1 = loadImage("assets/carro-2.png");
    imgCar2 = loadImage("assets/carro-3.png")
    imgCars =[imgCar, imgCar1, imgCar2, imgCar, imgCar1, imgCar2]

    musicTheme = loadSound("assets/audio/theme.mp3");
    soundHit = loadSound("assets/audio/colidiu.mp3");
    soundPoint = loadSound("assets/audio/pontos.wav");


}