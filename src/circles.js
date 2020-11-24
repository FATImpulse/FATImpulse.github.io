class Circles {

    constructor(x,y,r,fill) {
        this.widthX = 14;
        this.heightY = 7;
        this.x = x*width/this.widthX;
        this.y = y*height/this.heightY;
        this.r = r*height*width/(1280*720);
        this.fill = fill;
        this.r2 = 75*height*width/(1280*720);
        this.x2 = this.x;
        this.y2 = this.y;
        this.easing = 0.075;
        this.arr = [];
    }

    setX(x) {
        this.x = x*width/this.widthX;
    }

    setY(y) {
        this.y = y*height/this.heightY;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getArr() {
        return this.arr;
    }

    move() {
        if(mouseX < (this.x2 + this.r2) && mouseX > (this.x2 - this.r2) && mouseY < (this.y2 + this.r2) && mouseY > (this.y2 - this.r2)) {
            str = mouseX + " " + mouseY;
            var dirX, dirY, tempX, tempY, dist;
            dist = Math.sqrt((mouseX-this.x2)*(mouseX-this.x2) + (mouseY-this.y2)*(mouseY-this.y2));
            if(mouseX < this.x2) {
                dirX = 1;
            }
            else {
                dirX = -1;
            }
            if(mouseY < this.y2) {
                dirY = 1;
            }
            else {
                dirY = -1;
            }

            // tempX = this.easing*dirX*(mouseX - this.x2) -this.x2;
            // tempY = this.easing*dirY*(mouseY - this.y2) -this.y2;
            tempX = this.easing*dirX*(1-(mouseX/width))*this.x2 + this.x2;
            tempY = this.easing*dirY*(1-(mouseY/height))*this.y2 + this.y2;
            tempX = constrain(tempX,-(this.r*2)+this.x2,this.r*2+this.x2);
            tempY = constrain(tempY,-(this.r*2)+this.y2,this.r*2+this.y2);

            this.x = tempX;
            this.y = tempY;
        }
        else {
            str = mouseX + " " + mouseY;
            this.x = this.x2;
            this.y = this.y2;
        }
    }

    show() {
        fill(this.fill)
        circle(this.x,this.y,this.r);
    }
}