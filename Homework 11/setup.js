var xPlayer = 25;
var yPlayer = 25;
var diameterPlayer = 10;
var speed = 3;

var xObstacleOne = 250;
var yObstacleOne = 250;
var diameterObstacleOne = 30;
var xspeedObstacleOne;
var yspeedObstacleOne;

var xObstacleTwo = 500;
var yObstacleTwo = 150;
var diameterObstacleTwo = 60;
var xspeedObstacleTwo;
var yspeedObstacleOne;

var mouseShapeX;
var mouseShapeY;

console.log("Console is working!");

function setup()
    {
        createCanvas(800, 600);
        xspeedObstacleOne = random(-3,3);
        yspeedObstacleOne =random(-3,3);
        xspeedObstacleTwo = random(-3,3);
        yspeedObstacleTwo =random(-3,3);
    }

function draw()
    {
        background(0);
        fill(24,200,29);
        circle(xPlayer,yPlayer,diameterPlayer);
        fill(255,0,0);
        circle(xObstacleOne,yObstacleOne,diameterObstacleOne);
        fill(0,0,255);
        circle(xObstacleTwo,yObstacleTwo,diameterObstacleTwo);
        createBorders(10);
        textSize(16);
        text("EXIT", width-50,height-50)
        if(xPlayer > width - 5 && yPlayer > height-50)
        {
        fill(255);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
        }
        
        if(keyIsDown(68))
        {
            xPlayer+=speed;
        }
        if(keyIsDown(65))
        {
            xPlayer-=speed;
        }
        if(keyIsDown(87))
        {
            yPlayer-=speed;
        }
        if(keyIsDown(83))
        {
            yPlayer+=speed;
        }
        fill(0,255,0);
        circle(mouseShapeX,mouseShapeY,20);
        if(xObstacleOne > width)
        {
        xObstacleOne = 0;
        }
        if(xObstacleOne < 0)
        {
        xObstacleOne = width;
        }
        if(yObstacleOne > height)
        {
        yObstacleOne = 0;
        }
        if(yObstacleOne < 0)
        {
        yObstacleOne = height;
        }
        
        
        if(xObstacleTwo > width)
        {
        xObstacleTwo = 0;
        }
        if(xObstacleTwo < 0)
        {
        xObstacleTwo = width;
        }
        if(yObstacleTwo > height)
        {
        yObstacleTwo = 0;
        }
        if(yObstacleTwo < 0)
        {
        yObstacleTwo = height;
        }
        
        xObstacleOne += xspeedObstacleOne;
        yObstacleOne += yspeedObstacleOne;
        xObstacleTwo += xspeedObstacleTwo;
        yObstacleTwo += yspeedObstacleTwo;
        if (xPlayer < 0 || xPlayer > width || yPlayer < 0 || yPlayer > height) {
        xPlayer = 25;
        yPlayer = 25;
        fill(255);
        stroke(5);
        textSize(26);
        text("Out of bounds!", width/2-200, height/2-100);
    }

}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}





    function keyPressed()
{
    console.log(key, ' ', keyCode);

}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function keyPressed() {
    if (keyCode === 65) {
        xPlayer -= 10;
    } 
    else if (keyCode === 68) {
        xPlayer += 10;
    }
    else if (keyCode === 87) {
        yPlayer -= 10;
    }
    else if (keyCode === 83) {
        yPlayer += 10;
    }
}