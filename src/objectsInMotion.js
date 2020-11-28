//https://editor.p5js.org/aprilstonge/present/prZvttjzb

function ObjectsInMotion() {

   var back;
   var bool = false;

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);          //Creates a canvas that fills up the entire window so the game is the correct size
        frameRate(300);
        circleX = 50;                                    //Initializes variables representing the first objects x and y coordinates
        circleY = 50;
        xdirection = 1.5;                               //Represents how much the objects location will change each time it moves
        ydirection = 1;
        xCircle = 350;                                  //Initializes variables representing the second objects x and y coordinates
        yCircle = 50;
        xdirection2 = 1;                               //Represent how much the objects location will change each time it moves
        ydirection2 = 2;
        back = new BackBtn(Home);
        bool = false;
    }

    this.draw = function() 
    {
       if(!bool) {
         background(220);                                                       //Sets background to light grey
         fill(0);                                                               //Sets fill color to black
         textSize(30);
         text('Click on the Moving Shapes',15,50);                              //Tells the user what to do in the activity
         textSize(15);
         text('*be careful not to press for too long*',windowWidth/4, 75);      //Shows the users instructions on how to play and end the game
         text('Press any key to end the game', windowWidth-250,windowHeight-30); 

         fill('Crimson');                                                //Sets the objects color to crimson
         ellipse(circleX, circleY, 100, 100);                            //Draws the circle at location specified by variables
         circleX = circleX + xdirection;                                 //Updates the circle's x coordinates
         circleY = circleY + ydirection;                                 //Updates the circle's y corrdinates
         if(circleX>windowWidth-50 || circleX<50)                        //Tests to see if the circle is nearing the sides of the screen
            {
               xdirection = xdirection * -1;                              //Makes the object go in the opposite direction(left or right) 
            }
         if(circleY>windowHeight-50 || circleY<50)                     //Tests to see if the circle is nearing the top or bottom of the screen
            {
               ydirection = ydirection * -1;                             //Makes the circle go in the opposite direction(up or down)
            }

         fill('Chocolate');                                           //Sets the fill color to chocolate
         ellipse(xCircle, yCircle, 100, 100);                         //Draws a circle at location specified by variables
         xCircle = xCircle - xdirection2;                             //Updates the circle's x coordinates
         yCircle = yCircle - ydirection2;                             //Updates the circle's y coordinates
         if(xCircle>windowWidth-50 || xCircle<50)                     //Tests to see if the circle is nearing the sides of the screen
            {
               xdirection2 = xdirection2 * -1;                         //Makes the object go in the opposite direction(left or right)
            }
         if(yCircle>windowHeight-50 || yCircle<50)                   //Tests to see if the circle is nearing the top or bottom of the screen
            {
               ydirection2 = ydirection2 * -1;                         //Makes the object go in the opposite direction(up or down)
            }


         if(mouseIsPressed)                                         //Tests to see if the user clicked the screen
            {
               if((mouseX >= circleX-50 && mouseX<=circleX+50) && (mouseY>=circleY-50 && mouseY<=circleY+50)) //Tests to see if where the users mouse is is near where the first circle is
               {          
                     background(25,200, 25);                                 //Changes the background color to green
                     fill(0);
                     textSize(30);
                     text('You got it!',150,windowWidth/4,windowHeight/4);  //Provides the user congratulatory feedback

               }

               else if((mouseY >= yCircle-50 && mouseY <=yCircle+50) && (mouseX >= xCircle-50 && mouseX<= xCircle+50))  //If the mouse wasn't clicked on the first circle it tests to see if the mouse is near the second circle
               {
                     background(25,200,25);                                //Changes background color to green
                     fill(0);
                     textSize(30);
                     text('You got it!',150,windowWidth/4,windowHeight/4);//Provides congratulatory feedback
               }
               else                                                                                                     //If the mouse is not near either circle
               {
                  background(200,25,25);                                  //Changes background to red 
                  fill(0);
                  textSize(50);
                  text('Try again',200,200,200);                         //Provides feedback that tells the user to repeat the exercise
               } 
            }
         }
          // Need it to keep running so I changed this

        if(keyIsPressed)                                   //Tests to see if a keyboard key has been pressed
         {
            bool = true;
            background(150,50,200);                        //Sets background to purple
            fill(0);
            textSize(42);
            text('Thank you for playing!',135,100,200);   //Diplays goodbye message
            // noLoop();                                     //Stops the draw function from repeating
         }

         back.on();
         back.show();
     }

     this.mousePressed = function() {
        if(back.onBtn) {
           this.sceneManager.showScene(back.loc);
        }
     }
}



