var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
  box.shapeColor="red"
}

function draw() 
{
  background(30);
  if(keyDown("left")){
  box.x--
  box.shapeColor="blue"  
  }
  if(keyDown("right")){
    box.x++
    box.shapeColor="yellow"  
    }  
    if(keyDown("up")){
      box.y--
      box.shapeColor="orange"  
      }
      if(keyDown("down")){
        box.y++
        box.shapeColor="green"  
        }
      
drawSprites()
}




