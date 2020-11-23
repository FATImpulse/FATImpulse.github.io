function Circles() {

    var x = 14;
    var y = 7;

    var arr = [];

    this.enter = function() {
        createCanvas(windowWidth, windowHeight);
        background('#EAF0CE');
        createCircles();
    }

    this.draw = function() {
        
        arr.forEach(element => {
            element.position(mouseX,mouseY);
        });

    }

    function createCircles() {
        noStroke();

        for(var i = 0; i <= x; i++) {
            for(var j = 0; j<=y; j++) {
                fill(random(['#FF6F36','#3CA1A2','#0C2845','#006C8E','#FFB029']));
                var c = circle(i*width/x,j*height/y,random((15*height*width)/(1290*720),(45*height*width)/(1290*720)));
                arr.push(c);
            }
        }
    }
}

class Circles {
    constructor()
}