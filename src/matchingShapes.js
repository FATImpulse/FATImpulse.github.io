function MatchingShapes() {
    let userCircle, ucX, ucY;
    let goalCircle, gcX, gcY;

    let userSquare, usX, usY;
    let goalSquare, gsX, gsY;
    let squareCenterX, squareCenterY;

    let userTriangle, utX, utY;
    let goalTriangle, gtX, gtY;
    let triangleCenterX, triangleCenterY;

    let ucGrid, gcGrid, usGrid, gsGrid, utGrid, gtGrid;

    let diameter, radius;
    let shapeSelected; //-1=no shape, 1=circle, 2=square, 3=triangle

    let circleGlow, squareGlow, triangleGlow;
    let showCircleGlow, showSquareGlow, showTriangleGlow;

    let /*wrongAudio, correctAudio, goalAudio,*/ squareAlreadyPlaced, circleAlreadyPlaced, triangleAlreadyPlaced, songAlreadyPlayed;

    this.start = function(){
        //Grid to prevent overlapping of user shapes
        ucGrid = Math.floor(random(0,3));
        usGrid = Math.floor(random(0,3));
        while(usGrid == ucGrid){
            usGrid = Math.floor(random(0,3));
        }
        utGrid = Math.floor(random(0,3));
        while(utGrid == usGrid || utGrid == ucGrid){
            utGrid = Math.floor(random(0,3));
        }
        
        //Grid to prevent overlapping of goal shapes
        gcGrid = Math.floor(random(0,3));
        gsGrid = Math.floor(random(0,3));
        while(gsGrid == gcGrid){
            gsGrid = Math.floor(random(0,3));
        }
        gtGrid = Math.floor(random(0,3));
        while(gtGrid == gsGrid || gtGrid == gcGrid){
            gtGrid = Math.floor(random(0,3));
        }
        
        //Initialize position of user's circle
        ucX = random(diameter + (ucGrid * width / 3), width / 3 - diameter + ucGrid * (width / 3));
        ucY = random(diameter, height / 2 - diameter);
        
        //Initialize position of goal's circle
        gcX = random(diameter + (gcGrid * width / 3), width / 3 - diameter + gcGrid * (width / 3));
        gcY = random(height / 2 + diameter, height - diameter);
        
        //Initialize position of user's square
        usX = random(diameter + (usGrid * width / 3), width / 3 - diameter + usGrid * (width / 3));
        usY = random(diameter, height / 2 - diameter);
        
        //Initiaize position of goal's square
        gsX = random(diameter + (gsGrid * width / 3), width / 3 - diameter + gsGrid * (width / 3));
        gsY = random(height / 2 + diameter, height - diameter);
        
        //Variables to take the center coordinates of the square
        squareCenterX = gsX + radius;
        squareCenterY = gsY + radius;
        
        //Initialize position of user's triangle
        utX = random(diameter + (utGrid * width / 3), width / 3 - diameter + utGrid * (width / 3));
        utY = random(diameter, height / 2 - diameter);
        
        //Initialize position of goal's square
        gtX = random(diameter + (gtGrid * width / 3), width / 3 - diameter + gtGrid * (width / 3));
        gtY = random(height / 2 + diameter, height - diameter);
        
        //Variables to easily take the center coordinates of the triangle
        triangleCenterX = gtX + radius;
        triangleCenterY = gtY - radius;
        
        //Initialize shape selected from mouse
        shapeSelected = -1;
        
        //Shapes are not glowing at start
        showCircleGlow = false;
        showSquareGlow = false;
        showTriangleGlow = false;
        
        //Shapes are not already placed at start
        circleAlreadyPlaced = false;
        squareAlreadyPlaced = false;
        triangleAlreadyPlaced = false;
        songAlreadyPlayed = false;
    }
    
    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        
        //RATIO USED HERE
        //Diamater and radius
        diameter = 100 / 800 * width;
        radius =  diameter / 2;
        
        this.start();
    }

    this.draw = function() {
        background(220);
        
        //Title
        textSize(70);
        fill('black');
        textAlign(CENTER, CENTER);
        text('Match the Shapes!', width / 2, 50 / 800 * width);
        
        //Create glowing shapes
        circleGlow = new Circle(gcX, gcY, radius + 10, diameter + 50);
        squareGlow = new Square(gsX - 25, gsY - 25, radius + 25, diameter + 50);
        triangleGlow = new Triangle(gtX - 25, gtY + 25, radius + 25, diameter + 50);
        
        //Display glowing shapes
        if(showCircleGlow == true){
            fill('yellow');
            stroke('yellow');
            circleGlow.display();
        }
        if(circleAlreadyPlaced){
            fill('lime');
            stroke('lime');
            circleGlow.display();
        }
        if(showSquareGlow == true){
            fill('yellow');
            stroke('yellow');
            squareGlow.display();
        }
        if(squareAlreadyPlaced){
            fill('lime');
            stroke('lime');
            squareGlow.display();
        }
        if(showTriangleGlow == true){
            fill('yellow');
            stroke('yellow');
            triangleGlow.display();
        }
        if(triangleAlreadyPlaced){
            fill('lime');
            stroke('lime');
            triangleGlow.display();
        }
        
        //Create goal shapes
        fill('white');
        stroke('black');
        
        goalCircle = new Circle(gcX, gcY, radius, diameter);
        goalCircle.display();
        
        goalSquare = new Square(gsX, gsY, radius, diameter);  
        goalSquare.display();

        goalTriangle = new Triangle(gtX, gtY, radius, diameter);  
        goalTriangle.display();

        //Create user shapes
        fill('Chocolate');
        stroke('Chocolate');
        userTriangle = new Triangle(utX, utY, radius, diameter);  
        userTriangle.display();
        
        fill('Crimson');
        stroke('Crimson');
        userSquare = new Square(usX, usY, radius, diameter);  
        userSquare.display();
        
        fill('DarkCyan');
        stroke('DarkCyan');
        userCircle = new Circle(ucX, ucY, radius, diameter);
        userCircle.display();
        
        //Completion title and song
        if(circleAlreadyPlaced && triangleAlreadyPlaced && squareAlreadyPlaced){
            textSize(50);
            fill('black');
            textAlign(CENTER, CENTER);
            text('You Did it!', width / 2, height / 2);
            if(songAlreadyPlayed == false){
                // mg.goalAudio.play();
                // songAlreadyPlayed = true;
            }
            
            //reset activity
            if(mouseIsPressed){
                this.start();
            }
        }
    }


    /**
     * Moved this function to start
     */
    // //Adds songs
    // this.preload = function(){
    //     wrongAudio = loadSound('../assets/wrongbuzzer.mp3')
    //     correctAudio = loadSound('../assets/acorrectbuzzer.mp3');
    //     goalAudio = loadSound('../assets/endSong.mp3');
    // }

    //Checks whether user shape is on correct/incorrect goal shape, or neither
    this.mouseReleased = function(){
        //User circle is on correct goal shape
        if(ucX > gcX - 25 && ucX < gcX + 25 &&
            ucY > gcY - 25 && ucY < gcY + 25){
            ucX = gcX;
            ucY = gcY;
            if(circleAlreadyPlaced == false){
                // mg.correctAudio.play();
                circleAlreadyPlaced = true;
            }
        }
        
        //User circle is on incorrect goal shape
        if((ucX > squareCenterX - 25 && ucX < squareCenterX + 25 &&
            ucY > squareCenterY - 25 && ucY < squareCenterY + 25) ||
            (ucX > triangleCenterX - 25 && ucX < triangleCenterX + 25 &&
            ucY > triangleCenterY - 25 && ucY < triangleCenterY + 25)){
                showCircleGlow = true;
                fill('white');
                stroke('black');
                goalCircle.display();
                //insert incorrect audio
                // mg.wrongAudio.play();
        }
        else{
            showCircleGlow = false;
        }
        
        //User square is on correct goal shape
        if(usX > gsX - 25 && usX < gsX + 25 &&
            usY > gsY - 25 && usY < gsY + 25){
            usX = gsX;
            usY = gsY;
            if(squareAlreadyPlaced == false){
                // correctAudio.play();
                squareAlreadyPlaced = true;
            }
        }
        
        //User square is on incorrect goal shape
        if((usX + radius > gcX - 25 && usX + radius < gcX + 25 &&
            usY + radius > gcY - 25 && usY + radius < gcY + 25) ||
            (usX + radius > triangleCenterX - 25 && usX + radius < triangleCenterX + 25 &&
            usY + radius > triangleCenterY - 25 && usY + radius < triangleCenterY + 25)){
                showSquareGlow = true;
                fill('white');
                stroke('black');
                goalSquare.display();
                // wrongAudio.play();
        }
        else{
            showSquareGlow = false;
        }
        
        //User triangle is on correct goal shape
        if(utX > gtX - 25 && utX < gtX + 25 &&
            utY > gtY - 25 && utY < gtY + 25){
            utX = gtX;
            utY = gtY;
            if(triangleAlreadyPlaced == false){
                // correctAudio.play();
                triangleAlreadyPlaced = true;
            }
        }
        
        //User triangle is on incorrect goal shape
        if((utX + radius > gcX - 25 && utX + radius < gcX + 25 &&
            utY - radius > gcY - 25 && utY - radius < gcY + 25) ||
            (utX + radius > squareCenterX - 25 && utX + radius < squareCenterX + 25 &&
            utY + radius > squareCenterY - 25 && utY - radius < squareCenterY + 25)){
                showTriangleGlow = true;
                fill('white');
                stroke('black');
                goalTriangle.display();
                // wrongAudio.play();
        }
        else{
            showTriangleGlow = false;
        }
    }

    //In order of circle -> square -> triangle, the shape the mouse moves is selected
    //Cannot select a shape that is already matched
    this.mousePressed = function(){
        if(mouseX > ucX - radius && mouseX < ucX + radius &&
            mouseY > ucY - radius && mouseY < ucY + radius && !circleAlreadyPlaced){
            shapeSelected = 1;
        }
        else if(mouseX > usX && mouseX < usX + diameter &&
                mouseY > usY && mouseY < usY + diameter && !squareAlreadyPlaced){
            shapeSelected = 2;
        }
        else if(mouseX > utX && mouseX < utX + diameter &&
                mouseY < utY && mouseY > utY - diameter && !triangleAlreadyPlaced){
            shapeSelected = 3;
        }
        else{
            shapeSelected = -1;
        }
    }

    //Moves the shape
    this.mouseDragged = function(){
        userCircle.moveit();
        userSquare.moveit();
        userTriangle.moveit();
    }

    //Creation of both circles, and movement of the user circle
    class Circle{
        constructor(x1, y1, radius, diameter){
            this.x = x1;
            this.y = y1;
            this.diameter = diameter;
        }
        
        moveit(){
            if(mouseIsPressed && shapeSelected == 1 && ucX != gcX && ucY != gcY){
                ucX = mouseX;
                ucY = mouseY;
            }
        }
        
        display(){
            circle(this.x, this.y, this.diameter);
        }
    }

        //Creation of both squares, and movement of the user square
    class Square{
        constructor(x1, y1, radius, diameter){
            this.x = x1;
            this.y = y1;
            this.length = diameter;
        }
        
        display(){
            square(this.x, this.y, this.length);
        }
        
        moveit(){
            if(mouseIsPressed && shapeSelected == 2 && usX != gsX && usY != gsY){
                usX = mouseX - radius;
                usY = mouseY - radius;
            }
        }
    
    }

    //Creation of both triangles, and movement of the user triangle
    class Triangle{
        constructor(x1, y1, radius, diameter){
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x1 + diameter;
            this.y2 = y1;
            this.x3 = x1 + radius;
            this.y3 = y1 - diameter;
        }
        
        display(){
            triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        }
        
        moveit(){
            if(mouseIsPressed && shapeSelected == 3 && utX != gtX && utY != gtY){
                utX = mouseX - radius;
                utY = mouseY + radius;
            }
        }
    }


}
