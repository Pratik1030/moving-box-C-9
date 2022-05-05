var box

function setup() {
  createCanvas(400,400);
  box = createSprite(100,100,50,50)
}

function draw() 
{
  background(30);
  drawSprites ()
  box.shapeColor = 'red'

  if (keyDown('up')){
    box.y = box.y -7 
  }
  if (keyDown('down')){
    box.y = box.y +7 
  }  
  if (keyDown('right')){
    box.x = box.x +7
  }
  if (keyDown('left')){
    box.x = box.x -7
  }
  
}





