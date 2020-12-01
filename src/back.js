/**
 * Creates the back button which takes a location and switches scenes to that location.
 * @constructor **location**
 * @author John Li
 */

class BackBtn {

    /**
     * @param {function} loc 
     */
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

    /**
     * Changes the color of the button and sets onBtn to true if the mouse is on it
     */
    on() {
        if(mouseX < (this.x+this.xSize) && mouseX > this.x && mouseY < (this.y + this.ySize) && mouseY > this.y) {
            this.fill = '#3F334D';
            this.onBtn = true;
        }
        else {
            this.fill = 'grey';
            this.onBtn = false;
        }
    }

    /**
     * Creates the back button with the < text
     */
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