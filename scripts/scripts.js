import BlueTang from "./BlueTang.js";
import Butterfly from "./Butterfly.js";
import ClownFish from "./Clownfish.js";

// --------------------------------------------- //
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const background = new Image(); // underwater background
background.src = './images/underwater.gif';

const butterfly = new Butterfly();
const tang = new BlueTang();
const clown = new ClownFish();

// ---------------- RUNS ---------------------- //
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // butterfly.render(ctx);
  tang.render(ctx);
  // clown.render(ctx);

  // clown.swim(canvas.width);
  // butterfly.swim(canvas.width);
  tang.swim(canvas.width);

  requestAnimationFrame(draw);
}

draw();