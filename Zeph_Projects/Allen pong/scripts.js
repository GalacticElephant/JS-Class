class Paddle {

    height = 0;
    width = 0;
    xPosition = 0;
    yPosition = 0;
    speed = 0;
    human = true;


    constructor(height, width,x, y, speed, human){
        this.height = height;
        this.width = width;
        this.xPosition = x;
        this.yPosition = y - this.height / 2;
        this.speed = speed;
        this.human = human;
    }


    get state(){
        return "paddle state";
    }
    
    get topPosition(){

        return (this.yPosition - this.height/ 2 );
    }

    get bottomPosition(){
        return (this.yPosition + this.height/2 );
    }

    get leftSidePosition(){
        return (this.xPosition - this.width/2);
    }

    get rightSidePosition(){
        return (this.xPosition + this.width/2);
    }

    get x(){
        
        return this.xPosition;        
    }

    get y(){
        return this.yPosition;
    }
}

class Ball {
    xPosition = 0;
    yPosition = 0;
    size = 10;
    xSpeed = 0;
    ySpeed = 0;

    constructor(x,y,xSpeed,ySpeed,size){
        this.xPosition = x;
        this.yPosition = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = size;
    }

    get state(){
        return "ball state";
    }

    get topPosition(){

        return this.yPosition - this.size/2;
    }

    get bottomPosition(){
        return this.yPosition + this.size/2;
    }

    get leftSidePosition(){
        return this.xPosition - this.size/2;
    }

    get rightSidePosition(){
        return this.xPosition + this.size/2;
    }

    updatePosition(){
        this.xPosition += this.xSpeed;
        this.yPosition += this.ySpeed;
    }
}

class Arena {
    height = 0;
    width = 0;
    ball;
    humanPaddle;
    cpuPaddle;
    
    constructor(h,w){
        this.height = h;
        this.width = w;
        this.ball = new Ball(this.width/2, this.height/2, 5, 5, 10);
        this.humanPaddle = new Paddle(100, 10, 0, this.height/2, 10, true);
        this.cpuPaddle = new Paddle(100, 10, this.width - 10, this.height/2, 10, false);
    }

  
    upperWallCollision(){
        if ( this.ball.topPosition <= 0){
             // calculate new Speed
            let newSpeedY = Math.min(...new Array(Math.abs(this.ball.YSpeed)+ (0.1 * this.ballSpeedY), 10));
            this.ball.YSpeed = newSpeedY;
        }
    }

    lowerWallCollision(){
        if ( this.ball.bottomPosition >= this.height){
             // calculate new Speed
            let newSpeedY = Math.min(...new Array(Math.abs(this.ball.YSpeed)+ (0.1 * this.ballSpeedY), 10));
            this.ball.YSpeed = -newSpeedY;
        }
    }

    leftWallCollision(){

        if ( this.ball.leftSidePosition <= 0 ){
            return true;
        }
        return false;
    }

    rightWallCollision(){
        if ( this.ball.rightSidePosition >= this.width){
            return true;
        }
        return false;
    }

    humanPaddleCollision(){

        if ( this.ball.leftSidePosition >= this.humanPaddle.leftSidePosition &&
             this.ball.leftSidePosition <= this.humanPaddle.rightSidePosition &&
             this.ball.topPosition >= this.humanPaddle.topPosition &&
             this.ball.bottomPosition <= this.humanPaddle.bottomPosition
        )
        { 
            // calculate new Speed
            let newSpeedX = Math.min(...new Array(Math.abs(this.ball.xSpeed)+ (0.1 * this.ballSpeedX), 10));
            this.ball.xSpeed = newSpeedX;
            this.ball.ySpeed = this.ball.ySpeed + this.humanPaddle.speed;
        }
    }

    cpuPaddleCollision(){
        if ( this.ball.rightSidePosition <= this.cpuPaddle.rightSidePosition &&
             this.ball.rightSidePosition >= this.cpuPaddle.leftSidePosition &&
             this.ball.topPosition >= this.cpuPaddle.topPosition &&
             this.ball.bottomPosition <= this.cpuPaddle.bottomPosition
        )
        { 
            // calculate new Speed
            let newSpeedX = Math.min(...new Array(Math.abs(this.ball.xSpeed)+ (0.1 * this.ballSpeedX), 10));
            this.ball.xSpeed = -newSpeedX;
            this.ball.ySpeed = this.ball.ySpeed + this.cpuPaddle.speed;
        }
    }


    get gameState() {
        return "the game state";
    }
}

function draw(gameArena) {
    // Clear the canvas
    context.clearRect(0, 0, gameArena.width, gameArena.height);

    // Draw paddles
    context.fillStyle = '#fa7659';
    //Draw humanPaddle
    context.fillRect(gameArena.humanPaddle.xPosition,
         gameArena.humanPaddle.yPosition, 
         gameArena.humanPaddle.width, 
         gameArena.humanPaddle.height);
    //Draw cpuPaddle
    context.fillRect(gameArena.cpuPaddle.xPosition, 
        gameArena.cpuPaddle.yPosition, 
        gameArena.cpuPaddle.width, 
        gameArena.cpuPaddle.height);

    // Draw ball
    context.fillRect(gameArena.ball.leftSidePosition,
                     gameArena.ball.topPosition,
                     gameArena.ball.size,
                     gameArena.ball.size);
    //context.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);

    // Update ball position
    gameArena.ball.updatePosition();
    
    //ballX += ballSpeedX;
    //ballY += ballSpeedY;

    //check for wall and paddle collisions
    gameArena.upperWallCollision();
    gameArena.lowerWallCollision();
    gameArena.humanPaddleCollision();
    gameArena.cpuPaddleCollision();


    /*
    // Ball collision with top and bottom walls
    if (ballY < 0 || ballY > canvas.height) {
        let newSpeedY = Math.min(...new Array(Math.abs(ballSpeedY) + (0.1 * ballSpeedY), 10));
        
        ballSpeedY = ballY > canvas.height ? -newSpeedY : newSpeedY;
     
    }

    // Ball collision with paddles
    if (
        (ballX < paddleWidth && ballY > paddle1Y && ballY < paddle1Y + paddleHeight) ||
        (ballX > canvas.width - paddleWidth && ballY > paddle2Y && ballY < paddle2Y + paddleHeight)
    ) {
        let newSpeedX = Math.min(...new Array(Math.abs(ballSpeedX) + (0.1 * ballSpeedX), 10));
        ballSpeedX =  > 0 ? -newSpeedX : newSpeedX;
        console.log(ballSpeedX);
        
    }
    */

    // Did someone score? 
    if( gameArena.leftWallCollision() || gameArena.rightWallCollision()){

        if( gameArena.leftWallCollision() ){
            gameArena.ball.xSpeed = 5;
            gameArena.ball.ySpeed = 5;

            cpuScore += 1;
            document.getElementById("cpuScore").innerText = cpuScore.toString();
        }
        else {
            gameArena.ball.xSpeed = -5;
            gameArena.ball.ySpeed = -5;

            humanScore += 1;
            document.getElementById("humanScore").innerText = humanScore.toString();    
        }
    }
    /*
    if (ballX < 0 || ballX > canvas.width) {
        // Ball out of bounds on Human Side
        if(ballX < 0){
            ballSpeedX = 5;
            ballSpeedY = 5;

            cpuScore += 1;

            document.getElementById("cpuScore").innerText = cpuScore.toString();
        }
        if( ballX > canvas.width) // Ball out of bounds on CPU Side
        {
            ballSpeedX = -5;
            ballSpeedY = -5;

            humanScore += 1;

            document.getElementById("humanScore").innerText = humanScore.toString();
        }


        // Reset ball position
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;

    }
    */
}

function computerMovement() {
    const paddle2YCenter = paddle2Y + paddleHeight / 2;
    if (paddle2YCenter < ballY - 35) {
        paddle2Y += paddleSpeed;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= paddleSpeed;
    }
}
// Get canvas element and 2d drawing context
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Define game variables
const gameArena = new Arena(canvas.height, canvas.width);

/*
const paddleWidth = 10;
const paddleHeight = 100;
let paddle1Y = canvas.height / 2 - paddleHeight / 2;
let paddle2Y = canvas.height / 2 - paddleHeight / 2;
const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
const paddleSpeed = 10;
*/

let cpuScore = 0;
let humanScore = 0;



// Update game at a fixed interval (60 FPS)
setInterval(draw, 1000 / 60, gameArena);

// Handle user input
window.addEventListener('mousemove', function (event) {
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    gameArena.humanPaddle.yPosition = mouseY - gameArena.humanPaddle.height /2;
    //paddle1Y = mouseY - paddleHeight / 2;
});



// Update game at a fixed interval (60 FPS)
setInterval(function (gameArena) {
    draw(gameArena);
    //computerMovement(gameArena); // Add computer-controlled paddle movement
}, 950 / 60, gameArena);