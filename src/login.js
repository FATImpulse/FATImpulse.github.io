function Login() {

    var onBtn = false;
    var arr = [];

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        background('#EAF0CE');

        noStroke();
        var x = 14;
        var y = 7;
        for(var i = 0; i <= x; i++) {
            for(var j = 0; j<=y; j++) {
                fill(random(['#FF6F36','#3CA1A2','#0C2845','#006C8E','#FFB029']));
                circle(i*width/x,j*height/y,random((15*height*width)/(1290*720),(45*height*width)/(1290*720)));
            }
        }
    }

    this.draw = function() {

        drawBox();

    }

    function moveCircles() {

    }

    function drawBox() {
        fill('#FFFFFF');
        //stroke(0.1);
        noStroke();
        rect(width*(381/1280),height*(136/720),width*(519/1280),height*(449/720),(20*height*width)/(1290*720));

        textSize((66*height*width)/(1290*720));
        textFont('Arial');
        textStyle(BOLD);
        fill('#707070');
        text('Welcome',(473/1280)*width,(245/720)*height);

        textSize((21*height*width)/(1290*720));
        textStyle(NORMAL);
        text('What should we call you?',(508/1280)*width,300/720*height);

        textBox();

        loginBtn();
    }

    function textBox() {
        var btnX = 425/1280*width, btnY = 67/720*height, 
        posX = 428/1280*width, posY = 329/720*height;
        if(mouseX > posX && mouseX < posX + btnX && mouseY > posY && mouseY < posY + btnY) {
            strokeWeight((3*height*width)/(1290*720));
            onBtn = true;
        }else{
            strokeWeight((1*height*width)/(1290*720));
            onBtn = false;
        }

        stroke('#707070');
        noFill();
        rect(posX,posY,btnX,btnY,(20*height*width)/(1290*720));

        if(mouseX > posX && mouseX < posX + btnX && mouseY > posY && mouseY < posY + btnY) {
            tint(255,0)
            onBtn = true;
        }else{
            tint(255,255)
            onBtn = false;
        }

        fill('#3F334D');
        noStroke();
        textSize((16*height*width)/(1290*720));
        text('Username',453/1280*width,355/720*height);
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
        text('ENTER',603/1280*width,469/720*height);
    }

    this.mousePressed = function() {
        if(onBtn){
            this.sceneManager.showScene(Home);
        }
    }
}