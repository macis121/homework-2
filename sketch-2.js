homework sketch 2

function setup() {
  createCanvas(600, 600);
  background(220);
}


function draw() {

  background(220);

  fill(255);
  stroke(0);


  ellipse(mouseX, mouseY, 200, 200);
  ellipse(mouseX - 45, mouseY - 20, 50, 50);
  ellipse(mouseX + 45, mouseY - 20, 50, 50);

  if (mouseX < 200) {
    arc(mouseX, mouseY + 30, 110, 100, 0, PI);
  } else if (mouseX <= 400) {
    arc(mouseX, mouseY + 30, 110, 1, 0, PI);
  } else if (mouseX <= 600) {
    arc(mouseX, mouseY + 60, 110, 50, PI*1.15, PI*1.85);
  }


}