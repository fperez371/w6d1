const MovingObject = require("./moving_object.js");
console.log("Webpack is working!");


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.height = 600;
  canvasEl.width = 1000;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 600);

  const movingObject = new MovingObject({
    color: 'white',
    radius: 10,
    pos: [50, 50],
    vel: [1,1],
});
  movingObject.draw(ctx);
});

window.MovingObject = MovingObject;