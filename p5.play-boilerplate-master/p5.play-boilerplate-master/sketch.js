var bullet
var wall,thickness
var speed
var weight

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,20,10);
  wall=createSprite(1200,200,thickness,200)
  wall.shapeColour=color(10,10,10)
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  bullet.weight = weight;
  //wall.debug=true

  
    
  
  hasCollided()
  drawSprites()
}
function hasCollided(){
  
    bullet.velocityX=0;
    var damage=0.5*speed*speed/(thickness *thickness*thickness)

    
    if (damage>10)
    {
      wall.shapeColour=color(255,0,0)
    }
    if(damage<10)
    {
      wall.shapeColour=color(0,255,0)
    }
    

  }
