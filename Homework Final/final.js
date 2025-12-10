console.log("Console is working!");

var paddleY = 150;
var ballX = 300;
var ballY = 200;
var ballXSpeed = 5;
var ballYSpeed = 5;
var cpuY = 150;
var playerScore = 0;
var cpuScore = 0;

function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(0);
    moveBall();
    createPaddle();
    createCpuPaddle();
    scoreBoard();
}
function moveBall() {
    ballX += ballXSpeed;
    ballY += ballYSpeed;
    if (ballY < 10 || ballY > height - 10) {
        ballYSpeed *= -1;
    }
     if (ballX < 0) {
        cpuScore++;
        resetBall();
        return;
    }
    if (ballX > width) {
        playerScore++;
        resetBall();
        return;
    }
    if (ballX - 10 < 20 + 10 &&
        ballY > paddleY &&
        ballY < paddleY + 80) {
        ballXSpeed *= -1;
        ballX = 20 + 10 + 10;
    }
    if (ballX + 10 > width - 30 &&
        ballY > cpuY &&
        ballY < cpuY + 80) {
        ballXSpeed *= -1;
        ballX = width - 30 - 10;
    }
    fill(0, 255, 0);
    ellipse(ballX, ballY, 20);
}
function createPaddle() {
    fill(100, 100, 100);
    rect(20, paddleY, 10, 80);
    if (keyIsDown(UP_ARROW)) paddleY -= 5;
    if (keyIsDown(DOWN_ARROW)) paddleY += 5;
    if (paddleY < 0) paddleY = 0;
    if (paddleY > height - 80) paddleY = height - 80;
}
function createCpuPaddle() {
    fill(150);
    rect(width - 30, cpuY, 10, 80);
    var paddleCenter = cpuY + 40;
    var diff = ballY - paddleCenter;
    if (diff > 0) cpuY += min(diff, 3);
    else if (diff < 0) cpuY += max(diff, -3);
    if (cpuY < 0) cpuY = 0;
    if (cpuY > height - 80) cpuY = height - 80;
}
function resetBall() {
    ballX = width / 2;
    ballY = height / 2;
    ballXSpeed *= -1;
    ballYSpeed = random(-3, 3);
}
function scoreBoard() {
    fill(255, 0, 0);
    textSize(32);
    text(playerScore, width / 4, 50);
    text(cpuScore, width * 3 / 4, 50);
}
