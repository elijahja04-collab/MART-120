var xPlayer = 25;
var yPlayer = 25;
var diameterPlayer = 10;
var speed = 3;


var mouseShapeX;
var mouseShapeY;

var outOfBoundsTimer = 0;
var hasWon = false;

var myXs = [];
var myYs = [];
var myDiameters = [];
var myColors = [];
var myXSpeeds = [];
var myYSpeeds = [];

console.log("Console is working!");

function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

function setup()
    {
        createCanvas(800, 600);
        xspeedObstacleOne = random(-3,3);
        yspeedObstacleOne =random(-3,3);
        xspeedObstacleTwo = random(-3,3);
        yspeedObstacleTwo =random(-3,3);
        var x = 25;
        var y = 25;
        var diameter = 10;
        for(var i = 0; i <5; i++)
        {
            myXs[i]= getRandomNumber(800);
            myYs[i]= getRandomNumber(600);
            myDiameters[i]=getRandomNumber(100);
            myColors[i] = color(random(255),random(255),random(255));
            x += 25;
            y += 25;
            diameter += 10;
            myXSpeeds[i] = random(-3,3);
            myYSpeeds[i] = random(-3,3);


        }
    }

function draw()
    {
        background(0);
        moveArrayCircles();
        for (var i = 0; i < myXs.length; i++)
        {
            fill(myColors[i])
            circle(myXs[i], myYs[i], myDiameters[i])
        }
        createCharacter();
        createBorders(10);
        exitSign();
        winCondition();
        characterMovement();
        mouseCreation();
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
function moveArrayCircles() {
    for (var i = 0; i < myXs.length; i++) {
        myXs[i] += myXSpeeds[i];
        myYs[i] += myYSpeeds[i];
        if (myXs[i] > width) myXs[i] = 0;
        if (myXs[i] < 0) myXs[i] = width;
        if (myYs[i] > height) myYs[i] = 0;
        if (myYs[i] < 0) myYs[i] = height;
    }
}