Week 2 assignment 1


function setup() { 
  createCanvas(400, 400);
  background (220);
} 


function draw(){
  
 
  
  fill (255);
  stroke (0);
    

  ellipse(mouseX, mouseY, 200, 200);
  ellipse(mouseX-45, mouseY-20, 50, 50);  
  ellipse(mouseX+45, mouseY-20, 50, 50);
  arc(mouseX, mouseY+30,110, 100, 0, PI);
  

}