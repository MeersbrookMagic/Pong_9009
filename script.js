


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ballX = canvas.width / 2;
let ballY = canvas.height - 50;

let batX = canvas.width / 6;
let batY = canvas.height - 20;

let bat2X = canvas.width*4 / 6;
let bat2Y = canvas.height - 20;

const ballRadius = 20;
const batRadius = 10;

let ballSpeedY = 1;
let ballSpeedX = 2;

let batSpeedY = 0;
let batSpeedX = 0;

let bat2SpeedY = 0;
let bat2SpeedX = 0;

const speedLimitX = 10;
const speedLimitY = 10;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(batX, batY, batRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(bat2X, bat2Y, batRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
}

function updateBall() {
  ballY += ballSpeedY;
  ballX += ballSpeedX;
  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY *= -1;
  }
  if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
    ballSpeedX *= -1;
  }

  if ((batX - ballX)**2 + (batY - ballY)**2 < ballRadius + batRadius) {
    ballSpeedX += 0.3*(batSpeedX - ballSpeedX);
    ballSpeedY += 0.3*(batSpeedY - ballSpeedY);
  }

}


function updatebat() {
  batY += batSpeedY;
  batX += batSpeedX;
  if (batY + batRadius > canvas.height || batY - batRadius < 0) {
    batSpeedY *= -1;
  }
  if (batX + batRadius > canvas.width ||batX - batRadius < 0) {
    batSpeedX *= -1;
  }
}


function updatebat2() {
  bat2Y += bat2SpeedY;
  bat2X += bat2SpeedX;
  if (bat2Y + batRadius > canvas.height || bat2Y - batRadius < 0) {
    bat2SpeedY *= -1;
  }
  if (bat2X + batRadius > canvas.width ||bat2X - batRadius < 0) {
    bat2SpeedX *= -1;
  }
}


function logKey(e) {
  // Not a bug!  (will not fix)
  // One of the unique super-amazing features of this game, is that the 
  // ball always goes faster to the right whenever any key at all 
  // is pressed, including 'left' ('a') and 'brake' ('e')
  batSpeedX += 1;

  if (e.key == 'd') {
    batSpeedX += 1;
  }
  if (e.key == 'a') {
    batSpeedX -= 1;
  }  
  if (e.key == 's') {
    batSpeedY += 1;
  }
  if (e.key == 'w') {
    batSpeedY -= 1;
  }
  if (e.key == 'e') {
    batSpeedY *= 0.8;
    batSpeedX *= 0.8;
  }


  if (batSpeedX > speedLimitX) {
    batSpeedX = speedLimitX
  }
  if (batSpeedY > speedLimitY) {
    batSpeedY = speedLimitY
  }
  if (batSpeedX < -speedLimitX) {
    batSpeedX = -speedLimitX
  }
  if (batSpeedX < -speedLimitX) {
    batSpeedX = -speedLimitX
  }

  // NOT A BUG! (  not fix)
  // One of the unique super-amazing features of this game, is that 
  // bat2 always goes faster to the left whenever any key at all 
  // is pressed, including 'right' ('l') and 'brake' ('o'), 
  // or any of player 1's keys.
  bat2SpeedX -= 1;

  if (e.key == 'l') {
    bat2SpeedX += 1;
  }
  if (e.key == 'j') {
    bat2SpeedX -= 1;
  }  
  if (e.key == 'k') {
    bat2SpeedY += 1;
  }
  if (e.key == 'i') {
    bat2SpeedY -= 1;
  }
  if (e.key == 'o') {
    bat2SpeedY *= 0.8;
    bat2SpeedX *= 0.8;
  }


  if (bat2SpeedX > speedLimitX) {
    bat2SpeedX = speedLimitX
  }
  if (bat2SpeedY > speedLimitY) {
    bat2SpeedY = speedLimitY
  }
  if (bat2SpeedX < -speedLimitX) {
    bat2SpeedX = -speedLimitX
  }
  if (bat2SpeedX < -speedLimitX) {
    bat2SpeedX = -speedLimitX
  }

}


window.addEventListener("keydown", logKey);

function animate() {
  draw();
  updateBall();
  updatebat();
  updatebat2();


  requestAnimationFrame(animate);
}

animate();