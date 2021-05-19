let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "right"

function bgRender() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box)
}

function snakeRender() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "darkgreen"
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener("keydown", update);

function update(event) {
  switch (event.keyCode) {
    case 37: {
      if (direction != "right") {
        direction = "left"
      }
      break;
    }
    case 38: {
      if (direction != "down") {
        direction = "up"
      }
      break;
    }
    case 39: {
      if (direction != "left") {
        direction = "right"
      }
      break;
    }
    case 40: {
      if (direction != "up") {
        direction = "down"
      }
      break;
    }
    default: { }
  }
}

function gameStarter() {
  if(snake[0].x > 15* box && direction === "right") snake[0].x=0;
  if(snake[0].x < 0* box && direction === "left")snake[0].x=16*box;
  if(snake[0].y > 15* box && direction === "down") snake[0].y=0;
  if(snake[0].y < 0* box && direction === "up")snake[0].y=16*box;

  bgRender();
  snakeRender();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  switch (direction) {
    case "right": {
      snakeX += box
      break;
    }
    case "left": {
      snakeX -= box
      break;
    }
    case "up": {
      snakeY -= box
      break;
    }
    case "down": {
      snakeY += box
      break;
    }
    default: { }
  }

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let game = setInterval(gameStarter, 100);


