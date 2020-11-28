function MSInstructions() {
  let diameter, radius;
  let usX, usY;
  let ucX, ucY;
  let timer;
  let showCircleGlow;
  let showSquareGlow;
  let s;

  var back;

  this.enter = function() {
    createCanvas(windowWidth, windowHeight);
    diameter = 100 / 800 * width;
    radius =  diameter / 2;
    usX = width / 4 - radius;
    usY = height / 4;
    ucX = width * 3/4;
    ucY = height / 4 + radius;
    timer = 0;
    s = "";
    back = new BackBtn(Home);
  }

  this.draw = function() {
    background(220);
    
    //left example
    //text
    fill('Black');
    stroke('Black');
    textSize(50);
    // textAlign(CENTER, CENTER);
    s = 'MOUSE ONLY!';
    text('MOUSE ONLY!', width / 4 - textWidth(s)/2, height * 7/9 / 800 * width);
    textSize(20);
    // textAlign(CENTER, CENTER);
    s = 'Move the colored shape';
    text('Move the colored shape', width / 4 - textWidth(s)/2, height / 4 - 100);
    s = 'to its similar white shape';
    text('to its similar white shape', width / 4 - textWidth(s)/2, height / 4 - 75);
    s = '(A green glow will appear if locked in)';
    text('(A green glow will appear if locked in)', width / 4 - textWidth(s)/2, height / 4 - 40);
    //green glow
    squareGlow = new Square(width / 4 - radius - 25, height / 2 - 25, radius + 25, diameter + 50);
    if(showSquareGlow == true){
      fill('lime');
      stroke('lime');
      squareGlow.display();
    }
    //goal square
    fill('White');
    stroke('Black');
    goalSquare = new Square(width / 4 - radius, height / 2, radius, diameter);
    goalSquare.display();
    //user's square
    fill('Crimson');
    stroke('Crimson');
    userSquare = new Square(usX, usY, radius, diameter);  
    userSquare.display();
    userSquare.moveIt();
    
    //right example
    //text
    fill('Black');
    stroke('Black');
    textSize(20);
    // textAlign(CENTER, CENTER);
    s = 'Match with the incorrect shape';
    text('Match with the incorrect shape', width * 3/4 - textWidth(s)/2, height / 4 - 100);
    s = 'and a yellow glow will appear';
    text('and a yellow glow will appear', width * 3/4- textWidth(s)/2, height / 4 - 75);
    s ='on the correct shape';
    text('on the correct shape', width * 3/4- textWidth(s)/2, height / 4 - 50);
    //yellow glow
    circleGlow = new Circle(width * 3/4, height * 7/8, radius + 25, diameter + 50);
    if(showCircleGlow == true){
      fill('yellow');
      stroke('yellow');
      circleGlow.display();
    }
    //wrong goal square
    fill('White');
    stroke('Black');
    wrongSquare = new Square(width * 3/4 - radius, height / 2, radius, diameter);
    wrongSquare.display();
    //goal circle
    correctCircle = new Circle(width * 3/4, height * 7/8, radius, diameter);
    correctCircle.display();
    //user's circle
    fill('DarkCyan');
    stroke('DarkCyan');
    userCircle = new Circle(ucX, ucY, radius, diameter);
    userCircle.display();
    userCircle.moveIt();
    
    //button
    fill('Black');
    stroke('Black');
    button = new Square(width / 2 - radius, height / 2 - radius, radius, diameter);
    button.display();
    fill('White');
    s = 'Click here';
    text('Click here', width / 2 - textWidth(s)/2, height / 2 - 12);
    s = 'to continue';
    text('to continue', width / 2 - textWidth(s)/2, height / 2 + 12);

    back.on();
    back.show();
  }

  this.mousePressed = function() {
    if(mouseX > width / 2 - radius && mouseX < width / 2 - radius + diameter && 
      mouseY > height / 2 - radius && mouseY < height / 2 - radius + diameter) {
        this.sceneManager.showScene(MatchingShapes);
    }
    if(back.onBtn) {
      this.sceneManager.showScene(back.loc);
    }
  }

  //Creation of all squares, movement of the user square, and green glow
  class Square{
    constructor(x1, y1, radius, diameter){
      this.x = x1;
      this.y = y1;
      this.length = diameter;
    }
    
    display(){
      square(this.x, this.y, this.length);
    }
    
    moveIt(){
      if(usY < height / 2 - 1){
        usY+= 2;
      }
      else{
        if(timer < 100){
          showSquareGlow = true;
          timer++;
        }
        else{
          showSquareGlow = false;
          timer = 0;
          usY = height / 4;
        }
      }
    }
  }

  //Creation of all circles, movement of the user circle, and yellow glow
  class Circle{
    constructor(x1, y1, radius, diameter){
      this.x = x1;
      this.y = y1;
      this.diameter = diameter;
    }
    
    display(){
      circle(this.x, this.y, this.diameter);
    }
      
    moveIt(){
      if(ucY < height / 2 - 1 + radius){
        ucY+= 2;
      }
      else{
        if(timer < 100){
          showCircleGlow = true;
          //timer is already counted in square
        }
        else{
          showCircleGlow = false;
          ucY = height / 4 + radius;
        }
      }
    }
  }
}
