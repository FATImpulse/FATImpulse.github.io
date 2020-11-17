function Home() {

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        background('#EAF0CE');

        Circles();
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

        drawBtn(152/1920*width, 384/1080*height);
        drawBtn(735/1920*width, 384/1080*height);
        drawBtn(1315/1920*width, 384/1080*height);
    }

    function drawBtn(x,y) {
        var btnX = 450/1920*width, btnY = 489/1080*height;

        fill('#EAF0CE')
        noStroke();
        rect(x,y,btnX,btnY,(20*height*width)/(1920*1080));
    }
}