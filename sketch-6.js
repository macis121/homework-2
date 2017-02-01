Assignment #6

function setup() {
  createCanvas(600, 600);
  background(220);
}
var y = 100
var x = 100
var r = true
var l = false

function draw() {

  background(220);

  fill(255);
  stroke(0);



  ellipse(x, y, 100, 100);

  if (r && x < 600) {
    x = x + 3
  }
   if (r && x>=600){
    l=true; r=false
  }
  if (l && x > 0) {
    x = x - 3
  }
  if (l && x<=0){
    r=true; l=false
  }
  
}
 function mousePressed(){
   x=mouseX
   y=mouseY
   r=false
   l=true
 }