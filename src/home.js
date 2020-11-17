function Home() {

    var onBtn1 = false, onBtn2 = false, onBtn3 = false;

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        background('#EAF0CE');
    }

    this.draw = function() {
        drawBox();
    }

    function drawBox() {
        fill('#FFFFFF');
        noStroke();
        rect(87/1920*width,81/1080*height,1769/1920*width,946/1080*height,(50*height*width)/(1920*1080));

        fill('#707070');
        textStyle(BOLD);
        textFont('Helvetica Neue');
        textSize((150*height*width)/(1920*1080));
        text('Play Room',660/1920*width,250/1080*height);

        drawBtn(152/1920*width, 384/1080*height, "Matching Shapes", 40, 250, onBtn1);
        drawBtn(735/1920*width, 384/1080*height, "Picking Up Objects In Motion", 30, 800, onBtn2);
        drawBtn(1315/1920*width, 384/1080*height, "Zipping and Unzipping", 37, 1390, onBtn3);
    }

    function drawBtn(x,y,z,i,j,bool) {
        var btnX = 450/1920*width, btnY = 489/1080*height, xPos = x, yPos = y;

        fill('#3F334D');
        noStroke();
        rect(x,y,btnX,btnY,(20*height*width)/(1920*1080));

        if(mouseX > xPos && mouseX < xPos + btnX && mouseY > yPos && mouseY < yPos + btnY) {
            fill('#3F334D');
            bool = true;
        }else{
            fill('#C0C5C1');
            bool = false;
        }
        rect(x,2*y,btnX,btnY/4,0,0,(20*height*width)/(1920*1080),(20*height*width)/(1920*1080));

        if(mouseX > xPos && mouseX < xPos + btnX && mouseY > yPos && mouseY < yPos + btnY) {
            fill('#FFFFFF');
            bool = true;
        }else{
            fill('#574B60');
            bool = false;
        }
        textSize((i*height*width)/(1920*1080));
        textStyle(BOLD);
        text(z, j/1920*width, 840/1080*height);
    }

    this.mousePressed = function() {
        if(onBtn1) {
            this.sceneManager.showScene(MatchingShapes);
        }
        else if(onBtn2) {
            this.sceneManager.showScene(ObjectsInMotion);
        }
        else if(onBtn3) {
            this.sceneManager.showScene(Zipper);
        }
    }
}