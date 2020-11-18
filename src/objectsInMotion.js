//https://editor.p5js.org/aprilstonge/present/prZvttjzb

function ObjectsInMotion() {

    this.enter = function() {
        createCanvas(400, 400);
        frameRate(300);
        circleX = 50;
        circleY = 50;
        xdirection = 1.5;
        ydirection = 1;
        xCircle = 350;
        yCircle = 50;
        xdirection2 = 1;
        ydirection2 = 2;
    }

    this.draw = function() {
    background(220);
    fill(0);
    textSize(30);
    text('Click on the Moving Shapes',15,50);
    
    fill('Crimson');
    ellipse(circleX, circleY, 100, 100);
    circleX = circleX + xdirection;
    circleY = circleY + ydirection;
    if(circleX>350 || circleX<50)
        {
        xdirection = xdirection * -1;
        }
    if(circleY>350 || circleY<50)
        {
        ydirection = ydirection * -1;
        }
    
    fill('Chocolate');
    ellipse(xCircle, yCircle, 100, 100);
    xCircle = xCircle - xdirection2;
    yCircle = yCircle - ydirection2;
    if(xCircle>350 || xCircle<50)
        {
        xdirection2 = xdirection2 * -1;
        }
    if(yCircle>350 || yCircle<50)
        {
        ydirection2 = ydirection2 * -1;
        }
    
    
    if(mouseIsPressed)
        {
        if((mouseX >= circleX-50 &&     mouseX<=circleX+50 && mouseY>=circleY-50 && mouseY<=circleY+50))
            {          
                background(0,250,0);
                fill(0);
                textSize(20);
                text('You got it!',150,200,200);
                
            }
            
        else if(mouseY >= yCircle-50 && mouseY <=yCircle+50 && mouseX >= xCircle-50 && mouseX<= yCircle+50)
            {
                background(0,250,0);
                fill(0);
                textSize(20);
                text('You got it!',150,200,200);
            }
                else
        {
            background(250,0,0);
            fill(0);
            textSize(50);
            text('Try again',200,200,200);
        } 
        }
    
    
    if(keyIsPressed)
        {
        background(150,50,200);
        fill(0);
        textSize(42);
        text('Thank you for playing!',135,100,200);
        noLoop();
        }
    }
}



