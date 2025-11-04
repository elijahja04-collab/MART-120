var size=22;
var count =0;
var sizeDirection = 2;




var redColor =255;
var greenColor =255;
var blueColor = 255;

var xCircle = 200;
var yCircle = 100;
var diameterCircle =75;

var xRect = 165;

var yPointA =100;
var yPointB =100;

var circleMove; 
var rectMove;
var pointAMove;
var pointBMove;
var lineXMove;
var lineYMove;

var lineX1 = 185;
var lineY1 = 110;
var lineX2 = 215;
var lineY2 = 110;




function setup() {
  createCanvas(400,400);
  circleMove= floor(random() * 10) + 1;
  rectMove= floor(random() * 10) + 1;
  pointAMove= floor(random() * 10) + 1;
  lineXMove= floor(random() * 10) + 1;
  lineYMove= floor(random() * 10) + 1;
  }

function draw() {
  background(redColor, greenColor, blueColor);
  fill(255,255,0);
  circle(xCircle,yCircle,diameterCircle);
  rect(xRect,125,70,90);
  point(215,yPointA);
  point(185,yPointB);
  line(lineX1, lineY1 , lineX2, lineY2);
  triangle(185, 125, 215, 125, 200, 140);
  text('Eli Anderson',175, 250);
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
    sizeDirection *=-1;
    count = 0;
  }
  if(xCircle >= 400 || xCircle<=0)
    {
       circleMove*=-1;
    }
   
     xCircle += circleMove;
   if(xRect >= 400 || xRect<=0)
    {
       rectMove*=-1;
    }
   
     xRect += rectMove;
    if(yPointA >= 400 || yPointA<=0)
    {
       pointAMove*=-1;
    }
   
     yPointA += pointAMove;
    if(yPointB >= 400 || yPointB<=0)
    {
       pointBMove*=-1;
    }
   
     yPointB += pointBMove;
    if (lineX1 <= 0 || lineX2 >= width || lineX1 >= width || lineX2 <= 0) 
    {
       lineXMove *= -1;
    }
     if (lineY1 <= 0 || lineY2 >= height || lineY1 >= height || lineY2 <= 0) {
       lineYMove *= -1;
     
     }
       lineX1 += lineXMove;
       lineX2 += lineXMove;
       lineY1 += lineYMove;
       lineY2 += lineYMove;
     
 
  }

 