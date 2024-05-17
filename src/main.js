import p5 from 'p5';
import { navigateTo, router } from './router.js';


export function setupP5() {
  let circleSize = 0;

  new p5((p) => {
    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('app'); // Attach the canvas to the div#app
      p.background(200);
      p.noStroke();
      // p.noCursor();
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      // Your drawing code here
      p.background(242 - p.mouseX/50, 239 - p.mouseY/50, 223);
      p.fill(208, 217, 212);
      p.ellipse(p.mouseX, p.mouseY, 25, 25);


    };

  });
}
