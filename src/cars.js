
//Cars
    let xCars = [600, 600, 600, 600 , 600, 600];
    let yCars = [40,  96,  150, 210, 260, 312];
    let length = 50;
    let heigth = 40;

    let acel = [5, 3.2, 5, 8, 4.5, 3];
    

function showCar(){
    for(let i = 0; i < imgCars.length; i++){
        image(imgCars[i], xCars[i], yCars[i], length, heigth)
    }
  }
  
function moveCar(){
    for(let i = 0; i < imgCars.length; i++){
        xCars[i] -= acel[i];
    }
}

function loopCar(){
    for(let i = 0; i < imgCars.length; i++){
        if (carBorder(xCars[i])){
            xCars[i] = 600
        }
    }
}

function carBorder(xCar){
    return xCar < -50
}

  