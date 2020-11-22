//https://editor.p5js.org/aprilstonge/present/prZvttjzb

function ObjectsInMotion() {

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
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
    textSize(15);
    text('*be careful not to press for too long*',windowWidth/4, 75);
    text('Press any key to end the game', windowWidth-250,windowHeight-30); 

    
    fill('Crimson');
    ellipse(circleX, circleY, 100, 100);
    circleX = circleX + xdirection;
    circleY = circleY + ydirection;
    if(circleX>windowWidth-50 || circleX<50)
        {
        xdirection = xdirection * -1;
        }
    if(circleY>windowHeight-50 || circleY<50)
        {
        ydirection = ydirection * -1;
        }
    
    fill('Chocolate');
    ellipse(xCircle, yCircle, 100, 100);
    xCircle = xCircle - xdirection2;
    yCircle = yCircle - ydirection2;
    if(xCircle>windowWidth-50 || xCircle<50)
        {
        xdirection2 = xdirection2 * -1;
        }
    if(yCircle>windowHeight-50 || yCircle<50)
        {
        ydirection2 = ydirection2 * -1;
        }
    
    
    if(mouseIsPressed)
        {
        if((mouseX >= circleX-50 && mouseX<=circleX+50) && (mouseY>=circleY-50 && mouseY<=circleY+50))
            {          
                background(25,200, 25);
                fill(0);
                textSize(30);
                text('You got it!',150,windowWidth/4,windowHeight/4);
                
            }
            
        else if(mouseY >= yCircle-50 && mouseY <=yCircle+50) && (mouseX >= xCircle-50 && mouseX<= xCircle+50))
            {
                background(25,200,25);
                fill(0);
                textSize(30);
                text('You got it!',150,windowWidth/4,windowHeight/4);
            }
                else
        {
            background(200,25,25);
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



