const board =document.getElementById('game-board');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highscore');

//Variables
const gridSizex= 30;
const gridSizey= 23;
let snake = [{x: 10, y: 10}];
let food = generateFoodPosition();
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 150;
let gameStarted = false;
let highScore = 0;


function draw(){
    board.innerHTML = '';
    DrawSnake();
    DrawFood();
    updateScore();
}
function DrawSnake(){
    snake.forEach((segment) => {
        const snakeElement =createGameElement('div','snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

function createGameElement(tagName, className){
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//draw();

function DrawFood(){
    if(gameStarted) {
        const foodElement = createGameElement('div', 'food');
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
}

function generateFoodPosition(){
const x = Math.floor(Math.random()*gridSizex)+1;
const y = Math.floor(Math.random()*gridSizey)+1;
return {x, y};
}

function move(){
    const head={...snake[0]};
    switch (direction){
        case "right":
            head.x +=1;
            break;
        case "left":
            head.x -=1;
            break;
        case "up":
            head.y -=1;
            break;
        case "down":
            head.y+=1;
            break;
    }
    snake.unshift(head);

  //  snake.pop();
    if (head.x === food.x && head.y === food.y){
        food = generateFoodPosition();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(()=> {
            move();
            checkCollision();
            draw();
        },gameSpeedDelay);
    }else{
        snake.pop();
    }
}


function startGame(){
    gameStarted = true;
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

function handleKeyPress(event) {
    if (
        (!gameStarted && event.code === 'Enter') ||
        (!gameStarted && event.key === ' ')
    ) {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }
}
document.addEventListener('keydown', handleKeyPress);

function increaseSpeed(){
    if (gameSpeedDelay > 100){
        gameSpeedDelay -= 5;
    }
    else if (gameSpeedDelay > 75){
        gameSpeedDelay -= 3;
    }
    else if (gameSpeedDelay > 50){
        gameSpeedDelay -= 2;
    }
    else if (gameSpeedDelay > 25){
        gameSpeedDelay -= 1;
    }
}
function checkCollision() {
    const head = snake[0];
    if (head.x < 1 || head.x > gridSizex || head.y < 1 || head.y > gridSizey){
        resetGame();
    }
    for (let i = 1; i < snake.length; i++){
        if (head.x === snake[i].x && head.y === snake[i].y){
            resetGame();
        }
    }
}
function resetGame(){
    updateHighScore();
    stopGame();
    snake = [{x: 10, y: 10}];
    food = generateFoodPosition();
    direction = 'right';
    gameSpeedDelay = 150;
    updateScore();
}
function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, '0');
}
function stopGame(){
    gameStarted = false;
    clearInterval(gameInterval);
    logo.style.display = 'block';
}
function updateHighScore(){
    const currentScore = snake.length - 1;
    if (!highScore || currentScore > highScore){
        highScore = currentScore;
        highScoreText.textContent = highScore.toString().padStart(3, '0')
    }
    highScoreText.style.display = 'block';
}