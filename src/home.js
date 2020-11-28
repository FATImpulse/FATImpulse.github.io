/**
 * @author John Li
 */

function Home() {

    var onBtn = false;
    var obj = MatchingShapes;
    var c, arr = [];
    // var back;

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        var x = 14, y = 7;
        for(var i = 0; i <= x; i++) {
            for(var j = 0; j<=y; j++) {
                c = new Circles(i,j,random(15,45),random(['#FF6F36','#3CA1A2','#0C2845','#006C8E','#FFB029']));
                arr.push(c);
            }
        }
        // back = new BackBtn(Login,0,height-100);
    }

    this.draw = function() {
        background('#EAF0CE');
        arr.forEach(e => {
            e.move();
            e.show();
        });

        if(mouseX > 152/1920*width && mouseX < 152/1920*width + 450/1920*width) {
            obj = MatchingShapes;
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

        // back.on();
        // back.show();
    }

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

        drawBtn(152/1920*width, 384/1080*height, "Matching Shapes", 40);
        drawBtn(735/1920*width, 384/1080*height, "Picking Up Objects In Motion", 30);
        drawBtn(1315/1920*width, 384/1080*height, "Zipping and Unzipping", 37);
    }

    function drawBtn(x,y,z,i) {
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

        if(mouseX > xPos && mouseX < xPos + btnX && mouseY > yPos && mouseY < yPos + btnY) {
            fill('#FFFFFF');
        }else{
            fill('#574B60');
        }
        textSize((i*height*width)/(1920*1080));
        textStyle(BOLD);
        text(z, x+btnX/2-textWidth(z)/2, 840/1080*height);
    }

    this.mousePressed = function() {
        clear();
        if(onBtn) {
            this.sceneManager.showScene(obj);
        }
        // if(back.onBtn) {
        //     this.sceneManager.showScene(back.loc);
        // }
    }
}