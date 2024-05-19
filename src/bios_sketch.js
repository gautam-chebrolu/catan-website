import p5 from 'p5';

export function setupP5_bios() {
  let images = [];
  let imagePaths = [
    'images/gautam-stats.png', // Replace with your image paths
    'images/robert-stats.png',
    'images/varad-stats.png'
  ];

  new p5((p) => {

    p.preload = () => {
      // Load the images
      images = imagePaths.map(path => p.loadImage(path));
    };

    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('app'); // Attach the canvas to the div#app
      p.noLoop(); // No need to continuously draw
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.redraw(); // Redraw on resize to re-position images
    };

    p.draw = () => {
      p.background(242, 239, 223);

      let cols = p.windowWidth > 600 ? 3 : 1;
      let imgWidth = p.windowWidth / cols;
      let imgHeight = imgWidth * (images[0].height / images[0].width);

      if(p.windowWidth < 600){
        imgWidth = imgWidth/2
        imgHeight = imgHeight/2
      }

      for (let i = 0; i < images.length; i++) {
        let x = (i % cols) * imgWidth + imgWidth/2;
        let y = Math.floor(i / cols) * imgHeight + p.windowHeight/8;
        p.image(images[i], x, y, imgWidth, imgHeight);
      }
    };
  });
}
