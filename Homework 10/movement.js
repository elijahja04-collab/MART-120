var redColor = 75;
var greenColor = 0;
var blueColor = 125;

var x =100;
function setup()
{
createCanvas(800,800);


}


function draw()
{
    background(redColor,greenColor,blueColor);
    circle(x,200,50);
    x++;
}