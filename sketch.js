var bullet, wall;

var speed, weight;

var thiccness;  

var deformation;

function setup() {
  createCanvas(1600,400);

  speed= random(55, 90);

  weight= random(30, 52);

  thiccness= random(22, 83);

  bullet= createSprite(100, 200, 50, 7);
  bullet.velocityX= 3;
  bullet.shapeColor= "white";

  wall= createSprite(1500, 200, thiccness, height/2);
  wall.shapeColor= color(80, 80, 80);

  deformation= (0.5*weight*speed*speed)/(thiccness*thiccness*thiccness);
  console.log(deformation);
}

function draw() {
  background(0);  

  if(isTouching(bullet,  wall)=== true && deformation<10){
    bullet.shapeColor="white";
    wall.shapeColor= "green";
    bullet.velocityX= 0;
  }
  else if(isTouching(bullet,  wall)=== true && deformation>10){
      bullet.shapeColor="white";
      wall.shapeColor= "red";
      bullet.velocityX= 0;
    
  }


  drawSprites();
}