"use strict";

class peoples {
    constructor() {
      this.x = random(width-50);
      this.y = random(height-50);
      this.diameter = random(30, 70);
      this.speed = 1;
      this.faith = 0;
      this.conversion = false;
    }
  
    beliefs() {
    if (this.conversion == true){
            this.faith += 1;
            emoji(this.x, this.y)
        } 
    }

    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
      fill (0+this.faith,0,255-this.faith);
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    info() {
      if (overPeep(this.x, this.y, this.diameter)){
          textSize(32);
          text(this.faithR, this.x, this.y)
      }
    }
}