class BackBtn {

    constructor(str,x,y) {
        this.x = x;
        this.y = y;
        this.str = str;
    }

    show() {
        rect(this.x, this.y, width/10,height/10,(20*height*width)/(1290*720));
        let str = "<";
        text(str,(this.x+width/10)/2 + textWidth(str)/2,(this.y+width/10)/2 + textWidth(str)/2);
    }
}