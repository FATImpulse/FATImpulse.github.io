/**
 * @author John Li
 * @constructor **function name, x position, y position**
 */

class BackBtn {

    constructor(loc) {
        this.loc = loc;
        this.x = 0;
        this.y = height-100;
        this.s = "<";
        this.xSize = width/10;
        this.ySize = height/10;
        this.onBtn = false;
        this.fill = 'grey';
    }

    on() {
        if(mouseX < (this.x+this.xSize) && mouseX > this.x && mouseY < (this.y + this.ySize) && mouseY > this.y) {
            this.fill = 'black';
            this.onBtn = true;
        }
        else {
            this.fill = 'grey';
            this.onBtn = false;
        }
    }

    show() {
        noStroke();
        fill(this.fill);
        rect(this.x, this.y, this.xSize, this.ySize, 0, (20*width*height)/(1290*720), (20*width*height)/(1290*720), 0);
        fill('white');
        textSize((50*height*width)/(1920*1080))
        textStyle(BOLD);
        text(this.s, this.x+(this.xSize)/2 - textWidth(this.s)/2, this.y+(this.ySize)/2 + textWidth(this.s)/2);
    }
}