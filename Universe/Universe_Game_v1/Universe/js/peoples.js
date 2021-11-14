"use strict";

var border1 = 30;
var border2 = 370;
var returnX = 200;
var returnY = 200;
var returnSpeed = 5;

class peoples {
    
    constructor() {
      this.x = random(width-50);
      this.y = random(height-50);
      this.diameter = random(30, 70);
      this.speed = 4;
      this.faithR = 0;
      this.faithB = 0;
      this.conversion = false;
      this.return = false;
    }
  
    beliefs() {
    if (this.conversion == true){
        console.log(influenceMode);
        if (influenceMode == 1 && this.faithR <= 255){
            this.faithR += 1;
            if (this.faithB > 0){
                this.faithB -= 1;
            }
            emoji(this.x, this.y)
        } else if (influenceMode == 2 && this.faithB <= 255){
            this.faithB += 1;
            if (this.faithR > 0){
             this.faithR -= 1;
            }
            emoji(this.x, this.y)
        }
        }
    }

    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
      fill (this.faithR,0,this.faithB);
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    checkBoundaries(){
        if (this.y < border1 || this.y > border2){
            this.return = true;
            console.log("high or low")
        }
        if (this.x < border1 || this.x > border2) {
            this.return = true;
            console.log("left or right")
        }
        if (this.return == true){
            if (this.x > returnX ){
                this.x -= returnSpeed;
            } else if (this.x < returnX){
                this.x += returnSpeed;
            }
            if (this.y > returnY){
                this.y -= returnSpeed;
            } else if (this.y < returnY){
                this.y += returnSpeed;
            }
            if (this.x >= returnX && this.x <= returnX + 50){
                if (this.y >= returnY && this.y <= returnY + 50){
                    console.log("returned")
                    this.return = false;
                }
            }
        }
    }

    info() {
        if (mouseX >= this.x && mouseX <= this.x + this.diameter){
            if (mouseY >= this.y && mouseX <= this.y - this.diameter ){
            textSize(32);
            fill(150, 100, 0);
            text("Red Percentage"+this.faithR, this.x, this.y)
            }
        }
    }
  }