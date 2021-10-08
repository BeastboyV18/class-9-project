
function setup() {
  createCanvas(700,400);
  background("pink");
  box = createSprite(200,200,100,100);
  box.shapeColor = "green"

}

function draw() 
{

  // write the code to change background color 

  if(keyDown(DOWN_ARROW))
   {
     background("white")
   }
  // to red when RIGHT_ARROW is pressed
  if(keyDown(RIGHT_ARROW))
  {
    background("red")
  }

  if (keyDown(LEFT_ARROW)) 
  {
    background("black");
    
  }
 
    if (keyDown(UP_ARROW)) 
  {
    background("blue");
   
  }

  


  
  drawSprites();
}

