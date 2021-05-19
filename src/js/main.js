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

function gameStarter() {
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
    default: {
      alert("comando inváldo")
    }
  }

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let game = setInterval(gameStarter, 100);

