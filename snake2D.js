const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// Load images

const background = new Image();
background.src = "image/background.png";

const foodImg = new Image();
foodImg.src = "image/food.png";

//create the snake, {} declaring an object

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10* box
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
