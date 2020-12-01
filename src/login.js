/** Global variable which stores the username string */
var o;

/**
 * The login function constists mainly of the user input field and the Enter button.
 * @author John Li
 */
function Login() {

    var onBtn = false, onTF = false, error = false, isText = false;;
    var c;
    var arr = [];
    var mouseClicked = false;
    var timeT = 3;
    var int = 1;

    /**
     * The Scenemanager library replaces start with enter but they both preform the same function.
     */
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
    /**
     * Standard draw function implemented from p5.js
     */
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

        o = textField;

        // For testing
        // text(textArr.length, width/2, height-50);
    }

    /**
     * Creates the white box in the center of the screen. Also creates thes text box and the login button.
     */
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

    /**
     * The textBox consists of three components, the initial username string, the textfield outline, and the empty username string.
     * When the mouse clicks on the textfield, the initial username string becomes empty and you can begin typing. This will be shown 
     * through the empty username string which will be populated from an array.
     */
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

    /**
     * Creates a login button which changes colors and sets onBtn to true when the mouse is over it.
     */
    function loginBtn() {

        var btnX = 135/1280*width, btnY = 52/720*height, 
        posX = 573/1280*width, posY = 435/720*height;

        if(mouseX > posX && mouseX < posX + btnX && mouseY > posY && mouseY < posY + btnY) {
            fill('#3F334D');
            onBtn = true;
        }else{
            fill('grey');
            onBtn = false;
        }
        
        noStroke();
        rect(posX,posY,btnX,btnY,(20*height*width)/(1290*720));

        fill('#FFFFFF');
        textSize((21*height*width)/(1290*720));
        let str = 'ENTER';
        text(str,width/2-textWidth(str)/2,469/720*height);
    }

    var str;
    /**
     * Creates the error message at the bottom of the drawBox.
     */
    function errorBox() {
        if(int == 1) {
            str = "There is a 25 character limit to usernames!";
        }
        else if(int == 2) {
            str = "Enter a username";
        }
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

    /**
     * This fuction hasn't been implemented 
     * @param {number} xPos 
     */
    function blinkCursor(xPos) {
        strokeWeight(10);
        line(width,height,453/1280*width,370/720*height)
    }

    var textArr = [];
    let rg = /./;
    var textField = "";
    var iteratorI = 0;

    /**
     * Reads a key and matches it with the regex expression rg, if it matches, it adds it to the array textArr.
     */
    this.keyTyped = function() {
        if(mouseClicked) {
            if(rg.test(key)) {
                if(textArr.length < 25) {
                    if(iteratorI < 0) {
                        iteratorI = 0;
                    }
                    textArr.push(key);
                    // Found that it works better without this declaration in the function
                    // textField += textArr[iteratorI];
                    iteratorI++;
                }
                else {
                    int = 1;
                    error = true;
                    timeT = 3;
                }
            }
        }
    }

    /**
     * Checks if the keyPressed is a backspace, if it is pops the end of textArry.
     */
    this.keyPressed = function() {
        if(mouseClicked) {
            if(keyCode == BACKSPACE) {
                textArr.pop();
                textArr.length --;
                iteratorI--;
            }
        }
    }

    /**
     * Every time a key is released, this function takes the textArray and iterates over it and adds it to the textField string.
     */
    this.keyReleased = function() {
        textField = "";
        textArr.forEach(e => textField+=e);
        return false;
    }

    /**
     * Dictates the action to perform if the mouse if pressed and a the bool values are true.
     */
    this.mousePressed = function() {
        if(onTF){
            mouseClicked = true;
        }
        else if(!onTF) {
            mouseClicked = false;
        }
        if(onBtn && textField === "") {
            int = 2;
            error = true;
        }
        else if(onBtn){
            this.sceneManager.showScene(Home);
        }
    }
}