import p5 from 'p5';
import { startCountdown } from './countdown.js';

const sketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('app'); // Attach the canvas to the div#app
    p.background(200);
    p.noStroke();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    // Your drawing code here
    p.background(242, 239, 223);
    p.fill(208, 217, 212);
    p.ellipse(p.mouseX, p.mouseY, 20, 20)
  };
};

new p5(sketch);

// Start the countdown timer
startCountdown();
