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
var yspeedObstacleTwo;

var mouseShapeX;
var mouseShapeY;

var outOfBoundsTimer = 0;
var hasWon = false;

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
        createCharacter();
        createObstacles();
        createBorders(10);
        exitSign();
        winCondition();
        characterMovement();
        mouseCreation();
        obstacleMovement();
        outOfBounds();
}

//creation of border
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
//mouse click creation
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
//character movement
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
//creation of character func
function createCharacter()
    {
    fill(75,200,29);
    circle(xPlayer,yPlayer,diameterPlayer);
    }
//creation of obstacles
    function createObstacles()
    {
        fill(255,0,0);
        circle(xObstacleOne,yObstacleOne,diameterObstacleOne);
        fill(0,0,255);
        circle(xObstacleTwo,yObstacleTwo,diameterObstacleTwo); 

    }
function winCondition()
    {
    if(xPlayer > width - 5 && yPlayer > height-50)
    {
        xPlayer = 25; 
        yPlayer = 25;
        outOfBoundsTimer = 60; 
        hasWon = true;
    }

    if(hasWon && outOfBoundsTimer > 0)
    {
        fill(255);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
        outOfBoundsTimer--;
    }
    else if(outOfBoundsTimer == 0) {
        hasWon = false; 
    }
    }
function exitSign()
    {
        textSize(16);
        text("EXIT", width-50,height-50)
    }
function outOfBounds()
    {
        if (xPlayer < 0 || xPlayer > width || yPlayer < 0 || yPlayer > height) 
        {
        xPlayer = 25;
        yPlayer = 25;
        outOfBoundsTimer = 60;  
        }

        if (!hasWon && outOfBoundsTimer > 0) 
        { 
        fill(255);
        textSize(26);
        text("Out of bounds!", width/2 - 200, height/2 - 100);
        outOfBoundsTimer--;      
        }
    }
function characterMovement()
    {
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
    }
function mouseCreation()
    {
         fill(0,255,0);
        circle(mouseShapeX,mouseShapeY,20);
    }
function obstacleMovement()
    {
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
    
    
    
    }