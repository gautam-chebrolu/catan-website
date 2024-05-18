import p5 from 'p5';

export function setupP5_poll() {
  let circleSize = 0;
  let dataURL = "https://script.google.com/macros/s/AKfycbx_Rhw9xXgarmPnUYt-93kquZUknrSAXox7D5GQSTwVyZTq62yVTk_PzfhfgwnjpVzW/exec"

  new p5((p) => {
    let pollResults
    let defaultFontSize = 24
    let xradius = p.windowWidth/14
    let yradius = p.windowHeight/40

    let gname = "Gautam"
    let rname = "Robert"
    let vname = "Varad"



    p.preload = () => {
      // font = p.loadFont("https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap")
      pullData()
    }

    function pullData() {
      p.httpGet(dataURL, 'json', false, function(response) {
        p.print(response)
        pollResults = response
      });

      setTimeout(pullData, 30000);
    }

    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('app'); // Attach the canvas to the div#app
      p.background(200);
      p.noStroke();
      p.textFont("Albert Sans");
      p.textSize(defaultFontSize);
      p.textAlign(p.CENTER, p.CENTER);
      
      if(p.windowWidth < 550){
        defaultFontSize = 12
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    function drawResults() {
      p.fill(200)
      let g = pollResults[0]["Count"]
      let r = pollResults[1]["Count"]
      let v = pollResults[2]["Count"]
      let a = pollResults[3]["Count"]
      // let pollSum = g + r + v + a
      let m = p.max(g, r, v, a)

      p.rectMode(p.CORNER)
      p.rect(p.windowWidth/2 + p.windowWidth/4 - 25, p.windowHeight*(7/8), 50, -(a/m)*p.windowHeight/2, 1, 1, 10, 10)
      p.text(a, p.windowWidth/2 + p.windowWidth/4, p.windowHeight*(7/8)+10)
      p.fill(107, 166, 65)
      p.rect(p.windowWidth/2 - p.windowWidth/4 - 25, p.windowHeight*(7/8), 50, -(g/m)*p.windowHeight/2, 1, 1, 10, 10)
      p.text(g, p.windowWidth/2 - p.windowWidth/4, p.windowHeight*(7/8)+10)
      p.fill(63, 108, 220)
      p.rect(p.windowWidth/2 - p.windowWidth/12 - 25, p.windowHeight*(7/8), 50, -(r/m)*p.windowHeight/2, 1, 1, 10, 10)
      p.text(r, p.windowWidth/2 - p.windowWidth/12, p.windowHeight*(7/8)+10)
      p.fill(231, 63, 63)
      p.rect(p.windowWidth/2 + p.windowWidth/12 - 25, p.windowHeight*(7/8), 50, -(v/m)*p.windowHeight/2, 1, 1, 10, 10)
      p.text(v, p.windowWidth/2 + p.windowWidth/12, p.windowHeight*(7/8)+10)

    }

    p.draw = () => {

      // Your drawing code here
      p.background(242, 239, 223);
      p.rectMode(p.RADIUS)
      p.fill(50)
      if(p.windowWidth < 550){p.textSize(defaultFontSize*1.5)}
      else{p.textSize(defaultFontSize*2.5)}

      p.text("Who do you think will win?", p.windowWidth/2, p.windowHeight/8)
      p.textSize(defaultFontSize*1.5)
      p.text("Live Results", p.windowWidth/2, p.windowHeight/3)

      p.fill(121, 140, 140);
      p.ellipse(p.mouseX, p.mouseY, 25, 25);


      if(p.mouseX > p.windowWidth/2 + p.windowWidth/4 - xradius && p.mouseX < p.windowWidth/2 + p.windowWidth/4 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){
        p.fill(101, 120, 120)
      }
      p.rect(p.windowWidth/2 + p.windowWidth/4, p.windowHeight/4.5, xradius, yradius, 5)
      if(p.mouseX > p.windowWidth/2 - p.windowWidth/4 - xradius && p.mouseX < p.windowWidth/2 - p.windowWidth/4 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){
        p.fill(107, 116, 65)
      }
      else{
        p.fill(107, 166, 65)
      }
      p.rect(p.windowWidth/2 - p.windowWidth/4, p.windowHeight/4.5, xradius, yradius, 5)
      if(p.mouseX > p.windowWidth/2 - p.windowWidth/12 - xradius && p.mouseX < p.windowWidth/2 - p.windowWidth/12 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){
        p.fill(107, 166, 65)
        rname = "Gautam"
      }
      else{
        p.fill(63, 108, 220)
        rname = "Robert"
      }
      p.rect(p.windowWidth/2 - p.windowWidth/12, p.windowHeight/4.5, xradius, yradius, 5)
      if(p.mouseX > p.windowWidth/2 + p.windowWidth/12 - xradius && p.mouseX < p.windowWidth/2 + p.windowWidth/12 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){
        p.fill(181, 63, 63)
        vname = "REALLY???"
      }
      else{
        p.fill(231, 63, 63)
        vname = "Varad"
      }
      p.rect(p.windowWidth/2 + p.windowWidth/12, p.windowHeight/4.5, xradius, yradius, 5)

      p.textSize(defaultFontSize)
      p.fill(250)
      p.text(gname, p.windowWidth/2 - p.windowWidth/4, p.windowHeight/4.5)
      p.text(rname, p.windowWidth/2 - p.windowWidth/12, p.windowHeight/4.5)
      p.text(vname, p.windowWidth/2 + p.windowWidth/12, p.windowHeight/4.5)
      p.textSize(defaultFontSize/1.5)
      p.text("All 3 are losers", p.windowWidth/2 + p.windowWidth/4, p.windowHeight/4.5)




      // p.rect(200, 200, 300, 300);

      if(pollResults){
        drawResults();
      }


    };




    p.mouseClicked = () => {

      let postData = {}

      if(p.mouseX > p.windowWidth/2 + p.windowWidth/4 - xradius && p.mouseX < p.windowWidth/2 + p.windowWidth/4 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){
        postData = {name: "All Three are Losers"}
        alert("Nah man, you're the loser. Spending your time going onto some random website voting on some dweebs playing a board game online. Don't you have something better to do? JK please join us.")
      }

      if(p.mouseX > p.windowWidth/2 - p.windowWidth/4 - xradius && p.mouseX < p.windowWidth/2 - p.windowWidth/4 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){
        postData = {name: "Gautam"}
        alert("That's what's up. Good choice")
      }

      if(p.mouseX > p.windowWidth/2 - p.windowWidth/12 - xradius && p.mouseX < p.windowWidth/2 - p.windowWidth/12 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){

        if(confirm("Are you really sure you want vote for Robert?") == true){
          prompt("What are you basing your vote for Robert on? ")
          if(confirm("Like really sure?") == true){
            if(confirm("Like really really really sure?") == true){
              alert("I see you are stuck in the past, focusing on the data and empirics. You need a growth mindset. Your vote was recorded.")
                postData = {name: "Robert"}
            }
          }
        }

      }

      if(p.mouseX > p.windowWidth/2 + p.windowWidth/12 - xradius && p.mouseX < p.windowWidth/2 + p.windowWidth/12 + xradius && p.mouseY > p.windowHeight/4.5 - yradius && p.mouseY < p.windowHeight/4.5 + yradius){

        if(confirm("Are you Varad?") == true){
          alert("Ok that makes sense")
        }
        else{
          prompt("For confirmation purposes, please state your name: ")
          alert("I just don't get it. Why?")
        }
        postData = {name: "Varad"}
      }


      if(postData["name"]) {
        fetch('https://script.google.com/macros/s/AKfycbx_Rhw9xXgarmPnUYt-93kquZUknrSAXox7D5GQSTwVyZTq62yVTk_PzfhfgwnjpVzW/exec', {
          method: 'POST', // Specify the method as POST
          body: JSON.stringify(postData), // Convert data to JSON string
          headers: {
            'Content-Type': 'application/json' // Set content type header
          },
          mode: "no-cors"
        }).then(response => {
          if (!response.ok) {
            console.error('Error sending POST request:', response.statusText);
            return;
          }
          console.log('POST request successful!');
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }


      setTimeout(function () {
        p.httpGet(dataURL, 'json', false, function(response) {
          p.print(response)
          pollResults = response
        });
      }, 1500)



    }

  });
}
