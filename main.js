function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(300, 100);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
    image(video, 0, 0, 640, 480);
  stroke("pink");
  fill("pink");
  rect(30, 20, 100, 100, 30, 200, 10, 200);
  rect(500, 20, 100, 100, 200, 30, 200, 10);
  rect(500, 350, 100, 100, 10, 200, 30, 200);
  rect(30, 350, 100, 100, 200, 10, 200, 30);
  stroke("aqua");
  fill("aqua");
  
  circle(90, 160, 80);
  circle(90, 170, 80);
  circle(90, 180, 80);
  circle(90, 190, 80);
  circle(90, 200, 80);
  circle(90, 210, 80);
  circle(90, 220, 80);
  circle(90, 230, 80);
  circle(90, 240, 80);
  circle(90, 250, 80);
  circle(90, 260, 80);
  circle(90, 270, 80);
  circle(90, 280, 80);
  circle(90, 290, 80);
  circle(90, 300, 80);
  circle(90, 310, 80);
//hi
//I absolutely
//love minecraft
circle(540, 160, 80);
  circle(540, 170, 80);
  circle(540, 180, 80);
  circle(540, 190, 80);
  circle(540, 200, 80);
  circle(540, 210, 80);
  circle(540, 220, 80);
  circle(540, 230, 80);
  circle(540, 240, 80);
  circle(540, 250, 80);
  circle(540, 260, 80);
  circle(540, 270, 80);
  circle(540, 280, 80);
  circle(540, 290, 80);
  circle(540, 300, 80);
  circle(540, 310, 80);
  //hi
//I absolutely
//love minecraft
/*circle(160, 90, 80);
  circle(170, 90, 80);
  circle(180, 90, 80);
  circle(190, 90, 80);
  circle(200, 90, 80);
  circle(210, 90, 80);
  circle(220, 90, 80);
  circle(230, 90, 80);
  circle(240, 90, 80);
  circle(250, 90, 80);
  circle(260, 90, 80);
  circle(270, 90, 80);
  circle(280, 90, 80);
  circle(290, 90, 80);
  circle(300, 9090, 80);
  circle(310, 90, 80);*/
  x = 160;
  for(x=170; x<=460; x+10)
  {
    circle(x, 70, 80);
  x=x+10;
  }
  x = 160;
  for(x=170; x<=460; x+10)
  {
    circle(x, 390, 80);
  x=x+10;
  }


}