import p5 from 'p5';

export function setupP5_bios() {
  let circleSize = 0;
  let dataURL = "https://script.google.com/macros/s/AKfycbw_gXIgkBU3EZTxHc9EUURGf3frkEP2oHTLlwGAD2bEoK4R1NSdHVHGjg4XLk9i_RI/exec"

  new p5((p) => {
    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('app'); // Attach the canvas to the div#app
      p.background(200);
      p.noStroke();
      p.noCursor();
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      // Your drawing code here
      p.background(242, 239, 223);
      p.fill(208, 217, 212);
      p.ellipse(p.mouseX, p.mouseY, 25, 25);



      if(p.mouseX > 200 && p.mouseX < 500 && p.mouseY > 200 && p.mouseY < 500){
        p.fill(200);
      }
      p.rect(200, 200, 300, 300);


    };


    p.mouseClicked = () => {


      if(p.mouseX > 200 && p.mouseX < 500 && p.mouseY > 200 && p.mouseY < 500){
        p.print("YAY")
        let postData = {"name": "Gautam"}
        p.httpPost(dataURL, 'json', postData)
      }
    }

  });
}
