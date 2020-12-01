/**
 * The Home function builds the home screen with its main function being the three buttons which takes the 
 * user to the different activities.
 * @author John Li
 */

function Home() {

    var onBtn = false;
    var obj = MatchingShapes;
    var c, arr = [];

    /**
     * The Scenemanager library replaces start with enter but they both preform the same action.
     */
    this.enter = function() {
        createCanvas(windowWidth, windowHeight);

        // Constant dictating the number of rows and columns of dots
        var x = 14, y = 7;
        for(var i = 0; i <= x; i++) {
            for(var j = 0; j<=y; j++) {
                c = new Circles(i,j,random(15,45),random(['#FF6F36','#3CA1A2','#0C2845','#006C8E','#FFB029']));
                arr.push(c);
            }
        }
    }

    /**
     * Standard draw function from p5.js library
     */
    this.draw = function() {
        background('#EAF0CE');
        arr.forEach(e => {
            e.move();
            e.show();
        });

        if(mouseX > 152/1920*width && mouseX < 152/1920*width + 450/1920*width) {
            obj = MSInstructions;
        }
        if(mouseX > 735/1920*width && mouseX < 735/1920*width + 450/1920*width) {
            obj = ObjectsInMotion;
        }
        if(mouseX > 1315/1920*width && mouseX < 1315/1920*width + 450/1920*width) {
            obj = Zipper;
        }
        else {
            onBtn = false;
        }

        drawBox();
    }

    /**
     * Creates the white box and the Play Room test along with the username. Also creates the three buttons.
     */
    function drawBox() {
        fill('#FFFFFF');
        noStroke();
        rect(87/1920*width,81/1080*height,1769/1920*width,946/1080*height,(50*height*width)/(1920*1080));

        fill('#707070');
        textStyle(BOLD);
        textFont('Arial');
        textSize((150*height*width)/(1920*1080));
        let str = 'Play Room';
        text(str,width/2-textWidth(str)/2,250/1080*height);
        str = o;
        textSize((35*height*width)/(1920*1080));
        fill('#C0C5C1');
        rect(width/10 - (15*height*width)/(1280*720),200/1080*height - (30*height*width)/(1280*720), textWidth(str) + (30*height*width)/(1280*720), 
            (50*height*width)/(1280*720),(15*height*width)/(1280*720));
        fill('#707070');
        text(str,width/10,200/1080*height);

        drawBtn(152/1920*width, 384/1080*height, "Matching Shapes", 40, 1);
        drawBtn(735/1920*width, 384/1080*height, "Picking Up Objects In Motion", 30, 2);
        drawBtn(1315/1920*width, 384/1080*height, "Zipping and Unzipping", 37, 3);
    }

    /**
     * Creates a button with given x and y coordinate, button string, string text size, and button id.
     * 
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {string} z string on the button
     * @param {number} i text size
     * @param {number} j ID to determine image on the button
     */
    function drawBtn(x,y,z,i,j) {
        var btnX = 450/1920*width, btnY = 489/1080*height, xPos = x, yPos = y;

        fill('#3F334D');
        noStroke();
        rect(x,y,btnX,btnY,(20*height*width)/(1920*1080));

        if(mouseX > xPos && mouseX < xPos + btnX && mouseY > yPos && mouseY < yPos + btnY) {
            fill('#3F334D');
            onBtn = true;
        }else{
            fill('#C0C5C1');
        }
        rect(x,2*y,btnX,btnY/4,0,0,(20*height*width)/(1920*1080),(20*height*width)/(1920*1080));

        fill('#C0C5C1');
        if(j == 1) {
            msImage();
        }
        else if(j == 2) {
            objImage();
        }
        else if(j == 3) {
            zImage();
        }

        noStroke();
        if(mouseX > xPos && mouseX < xPos + btnX && mouseY > yPos && mouseY < yPos + btnY) {
            fill('#FFFFFF');
        }else{
            fill('#574B60');
        }
        textSize((i*height*width)/(1920*1080));
        textStyle(BOLD);
        text(z, x+btnX/2-textWidth(z)/2, 840/1080*height);
    }

    /**
     * Shows two rectangles with different colors, design copied from the MatchingShapes function
     */
    function msImage() {
        stroke('black');
        fill('white');
        square(152/1920*width + 450/1920*width/2, 360/1080*height + 489/1080*height/2, (200*height*width)/(1920*1080));
        fill('crimson');
        square(152/1920*width + 450/1920*width/6, 360/1080*height + 489/1080*height/6, (200*height*width)/(1920*1080));
    }

    /**
     * Shows two circles with different colors, design copied from the ObjectsInMotion function
     */
    function objImage() {
        fill('crimson');
        circle(790/1920*width + 450/1920*width/2, 400/1080*height + 489/1080*height/2, (200*height*width)/(1920*1080));
        fill('Chocolate');
        circle(790/1920*width + 450/1920*width/6, 400/1080*height + 489/1080*height/6, (200*height*width)/(1920*1080));
    }

    /**
     * Copied from the Zipper function and modified to fit the button. Shows the zipper.
     */
    function zImage() {
        let xConst = 1/5, yConst = 1/5;
        let sizeX = width * (75 / 600)*xConst, sizeY = height * (25 / 550)*yConst;
        let xTrans = 1370/1920*width, yTrans = 412/1080*height;

        stroke('black');
        rect(width * (200 / 600)* xConst + xTrans, height * (0 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (25 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (50 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (75 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (100 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (125 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (150 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (175 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (200 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (225 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (250 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (275 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (300 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (325 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (350 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (375 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (400 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (250 / 600)* xConst + xTrans, height * (425 / 550) * yConst + yTrans, sizeX, sizeY);
        rect(width * (200 / 600)* xConst + xTrans, height * (450 / 550)* yConst + yTrans, width * (125 / 600) * xConst, 
            height * (325 / 550) * yConst);

        let c = color(250, 250, 0)
        fill(c);
        
        let xDiff = 80;
        let yDiff = 0;
        rect((xTrans - height * (83 / 600)) * yConst + xTrans - xDiff, 
            (yTrans- height * (35 / 550)) * yConst + yTrans, 
            width * (100 / 600) * xConst, width * (100 / 600) * yConst, height * (20 / 550) * yConst);
        rect((xTrans - width * (25 / 600)) * yConst + xTrans - xDiff, 
            (yTrans-height * (15 / 550)) * yConst + yTrans, 
            width * (50 / 600) * xConst, width * (160 / 600) * yConst, height * (20 / 550) * yConst);
        rect((xTrans - width * (20 / 600)) * yConst + xTrans - xDiff, 
            (yTrans-height * (35 / 550)) * yConst + yTrans, 
            width * (40 / 600) * xConst, width * (100 / 600) * yConst, height * (20 / 550) * yConst);
    }

    /**
     * Standard mousePressed function from p5.js which calls the sceneManager objects and passes a function
     */
    this.mousePressed = function() {
        if(onBtn) {
            arr = [];
            this.sceneManager.showScene(obj);
        }
    }
}