import p5 from 'p5';

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(200);
  };

  p.draw = () => {
    // Your drawing code here
    p.ellipse(50, 50, p.mouseX, p.mouseY)
  };
};

new p5(sketch);
