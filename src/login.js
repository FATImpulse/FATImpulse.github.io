/**
 * @author John Li
 */

function Login() {

    var onBtn = false, onTF = false, error = false, isText = false;;
    var c;
    var arr = [];
    var mouseClicked = false;
    var timeT = 3;

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        var x = 14, y = 7;
        for(var i = 0; i <= x; i++) {
            for(var j = 0; j<=y; j++) {
                c = new Circles(i,j,random(15,45),random(['#FF6F36','#3CA1A2','#0C2845','#006C8E','#FFB029']));
                arr.push(c);
            }
        }
    }

    this.draw = function() {
        background('#EAF0CE');
        arr.forEach(e => {
            e.move();
            e.show();
        });
        drawBox();

        if(error) {
            errorBox();
        }

        if(textArr.length > 0) {
            isText = true;
        }

        // For testing
        // text(iteratorI, width/2, height-50);
    }

    function drawBox() {
        fill('#FFFFFF');
        //stroke(0.1);
        noStroke();
        rect1 = rect(width/2-width*(519/1280)/2,height*(136/720),width*(519/1280),height*(449/720),(20*height*width)/(1290*720));

        textSize((66*height*width)/(1290*720));
        textFont('Arial');
        textStyle(BOLD);
        fill('#707070');
        let str = "Welcome";
        text(str,width/2-textWidth(str)/2,(245/720)*height);

        textSize((21*height*width)/(1290*720));
        textStyle(NORMAL);
        str = 'What should we call you?';
        text(str,width/2-textWidth(str)/2,300/720*height);

        textBox();

        loginBtn();
    }

    function textBox() {
        var btnX = 425/1280*width, btnY = 67/720*height, 
        posX = 428/1280*width, posY = 329/720*height;
        if(mouseX > posX && mouseX < posX + btnX && mouseY > posY && mouseY < posY + btnY) {
            strokeWeight((3*height*width)/(1290*720));
            onTF = true;

        }else{
            strokeWeight((1*height*width)/(1290*720));
            onTF = false;
        }

        if(mouseClicked) {
            strokeWeight((3*height*width)/(1290*720));
        }

        stroke('#707070');
        noFill();
        rect(posX,posY,btnX,btnY,(20*height*width)/(1290*720));

        if(mouseX > posX && mouseX < posX + btnX && mouseY > posY && mouseY < posY + btnY) {
            tint(255,0);
        }else{
            tint(255,200);
        }

        fill('#3F334D');
        noStroke();
        textSize((16*height*width)/(1290*720));
        let str = "Username";
        if(mouseClicked || isText){
            str = "";
        }
        text(str,453/1280*width,355/720*height);
        text(textField,453/1280*width,364/720*height);
        if(mouseClicked) {
            blinkCursor();
        }
    }

    function loginBtn() {

        var btnX = 135/1280*width, btnY = 52/720*height, 
        posX = 573/1280*width, posY = 435/720*height;

        if(mouseX > posX && mouseX < posX + btnX && mouseY > posY && mouseY < posY + btnY) {
            fill('#3F334D');
            onBtn = true;
        }else{
            fill('#B696DB');
            onBtn = false;
        }
        
        noStroke();
        rect(posX,posY,btnX,btnY,(20*height*width)/(1290*720));

        fill('#FFFFFF');
        textSize((21*height*width)/(1290*720));
        let str = 'ENTER';
        text(str,width/2-textWidth(str)/2,469/720*height);
    }

    function errorBox() {
        let str = "There is a 25 character limit to usernames!";
        fill('red');
        textSize((15*height*width)/(1280*720));
        text(str,width/2-textWidth(str)/2,530/720*height);
        if(timeT == 0) {
            error = false;
        }
        if(frameCount % 60 == 0 && timeT > 0) {
            timeT--;
        }
    }

    function blinkCursor(xPos) {
        strokeWeight(10);
        line(width,height,453/1280*width,370/720*height)
    }

    var textArr = [];
    let rg = /\S/;
    var textField = "";
    var iteratorI = 0;

    this.keyTyped = function() {
        if(mouseClicked) {
            if(rg.test(key)) {
                if(textArr.length <= 25) {
                    if(iteratorI < 0) {
                        iteratorI = 0;
                    }
                    textArr.push(key);
                    textField += textArr[iteratorI];
                    iteratorI++;
                }
                else {
                    error = true;
                    timeT = 3;
                }
            }
        }
    }

    this.keyPressed = function() {
        if(mouseClicked) {
            if(keyCode == BACKSPACE) {
                textArr.pop();
                iteratorI--;
            }
        }
    }

    this.keyReleased = function() {
        textField = "";
        textArr.forEach(e => textField+=e);
        return false;
    }

    this.mousePressed = function() {
        if(onTF){
            mouseClicked = true;
        }
        else if(!onTF) {
            mouseClicked = false;
        }
        if(onBtn){
            this.sceneManager.showScene(Home);
        }
    }
}