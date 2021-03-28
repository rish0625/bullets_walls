var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(40, 200, 30, 20);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2);

  bullet.velocityX = speed/2;
}

function draw() {
  background("black");
  var damage = (0.5 * weight * speed * speed) / thickness * thickness * thickness;

  if(damage > 10 && bullet.isTouching(wall)){
    wall.shapeColor = "red";
  } else if(damage < 10 && bullet.isTouching(wall)){
    wall.shapeColor = "green";    
  }

  bullet.collide(wall);

  drawSprites();
}