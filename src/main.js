import p5 from 'p5';

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(200);
  };

  p.draw = () => {
    // Your drawing code here
  };
};

new p5(sketch);
