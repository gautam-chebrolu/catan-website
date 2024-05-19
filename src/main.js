import p5 from 'p5';
import 'p5/lib/addons/p5.sound.min.js';


export function setupP5() {
  let song;

  new p5((p) => {
    p.preload = () => {
      
      // song = p.loadSound("https://cdn1.suno.ai/e984ba8f-7efc-4dcf-a877-c2ca99032fbc.mp3");
    };

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
      p.background(242 - p.mouseX / 50, 239 - p.mouseY / 50, 223);
      p.fill(208, 217, 212);
      p.ellipse(p.mouseX, p.mouseY, 25, 25);
    };

    p.mouseClicked = () => {
      // song.play()
    }

  });
}

setupP5();
