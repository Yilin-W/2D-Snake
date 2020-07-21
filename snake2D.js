const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// Load images

const background = new Image();
background.src = "image/background.png";

const foodImg = new Image();
foodImg.src = "image/food.png";

const iconImg = new Image();
iconImg.src = "image/icon.png"

//create the snake, {} declaring an object

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

// create the food randomly using math. Math random create a number between
// 0 and one. Math.random * (max - min) + min generates a random number between
// interval/two numbers

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake
let d;
document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode == 37 && d !="RIGHT"){
        d = "LEFT";
    }else if(event.keyCode == 38 && d !="DOWN"){
        d = "UP";
    }else if(event.keyCode == 39 && d !="LEFT"){
        d = "RIGHT";
    }else if(event.keyCode == 40 && d != "UP"){
        d = "DOWN";
    }
}

// draw everything to the canvas

function draw(){
    ctx.drawImage(background,0,0);

    //loop over the snake to draw all the cells
    for (let i = 0; i < snake.length; i ++){
        ctx.fillStyle = ( i == 0 || i % 2 == 0) ? "#006400" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "orange";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // draw the food icon on the top
    ctx.drawImage(iconImg, 13.5*box, 0.4*box);

    //draw the actual food
    ctx.drawImage(foodImg, food.x, food.y);

    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //remove the tail
    snake.pop();

    //which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;

    //add new head
    let newHead = {
        x : snakeX,
        y : snakeY
    }

    snake.unshift(newHead);

    //draw the store on the top
    ctx.fillStyle = "white";
    ctx.font = "bold 45px Old Standard TT";
    ctx.fillText(score, 16*box, 1.6*box);
}

//call draw function every 100 ms

let game = setInterval(draw,100);