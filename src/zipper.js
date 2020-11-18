//https://editor.p5js.org/liveonbro/present/ub_2tCmMW

function Zipper() {

  
  this.enter = function() {
    createCanvas(windowWidth, windowHeight);
  }
  
  this.draw = function() {
    if (mouseX < width*(200/600) || mouseX > width*(325/600) || mouseY > height*(385/550) || mouseY < height *(0/550)) {
      background(250, 175, 0)
      fill(0)
      textSize(25)
      text('Put the Yellow Slider on the Zipper!', width*(55/600), height*(200/550), width *(125/600))
      if (mouseIsPressed) {
        background(250, 0, 0)
        fill(0)
        textSize(25);
        text('Try to keep it on the Zipper!', width*(55/600), height*(200/550), width*(100/600))
      }
    } else {
      background(0, 250, 200)
      fill(0)
      textSize(25)
      text('Good! Now click and drag the Slider on the Zipper!', width*(55/600), height*(200/550), width*(125/600))
      if (mouseIsPressed) {
        background(0, 0, 250)
        fill(0)
        textSize(25);
        text('Great Job! Now keep moving the Slider up and down to zip the Zipper!', width*(55/600), height*(180/550), width*(150/600));
      }
    }
    
    fill(0)
    rect(width*(200/600), height * (0/550), width*(125/600), height*(450/550));
    
    fill(150)
    rect(width*(200/600), height*(0/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(25/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(50/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(75/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(100/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(125/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(150/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(175/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(200/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(225/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(250/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(275/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(300/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(325/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(350/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(375/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(400/550), width*(75/600), height*(25/550))
    rect(width*(250/600), height*(425/550), width*(75/600), height*(25/550))
    rect(width*(200/600), height*(450/550), width*(125/600), height*(325/550))
    
    let c = color(250, 250, 0)
    fill(c)
    rect(mouseX - height*(50/600), mouseY - height *(35/550), width*(100/600), width*(100/600), height*(20/550));
  
    rect(mouseX - width*(25/600), mouseY - height*(15/550), width*(50/600), width*(160/600), height*(20/550));
  
    rect(mouseX - width*(20/600), mouseY - height*(35/550), width*(40/600), width*(100/600), height*(20/550));
  }
  
}
