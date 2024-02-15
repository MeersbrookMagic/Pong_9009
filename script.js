


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ballX = canvas.width / 2;
let ballY = canvas.height - 50;

let batX = canvas.width / 6;
let batY = canvas.height - 20;

const ballRadius = 20;
const batRadius = 10;

let ballSpeedY = 1;
let ballSpeedX = 2;
let batSpeedY = 0;
let batSpeedX = 0;


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.arc(batX, batY, batRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
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


function logKey(e) {
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
}


window.addEventListener("keydown", logKey);

function animate() {
  draw();
  updateBall();
  updatebat();


  requestAnimationFrame(animate);
}

animate();