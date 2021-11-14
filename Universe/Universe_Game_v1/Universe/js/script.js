"use strict";

/*****************

Universe
Altered Memories


******************/

var numberOfPeople = 2;
let peeps = [];
var buttonB;
var buttonR;
var influenceMode;



// preload()
//
// Description of preload

function preload() {

}

// setup()
//
// Description of setup

function setup() {
    createCanvas(400,400);
    
    buttonB = createButton('Blue')
    buttonB.position(340,140);
    buttonB.mousePressed(function(){
        influenceMode = 2
    });

    buttonR = createButton('Red')
    buttonR.position(340,200);
    buttonR.mousePressed(function(){
        influenceMode = 1
    });

    for (let i = 0; i < numberOfPeople; i++) {
        peeps.push(new peoples());
    }
}


// draw()
//
// Description of draw()

function draw() {
    background(100,0,0);
    for (let i = 0; i < peeps.length; i++) {
        peeps[i].move();
        peeps[i].display();
        peeps[i].beliefs();
        peeps[i].checkBoundaries();
        peeps[i].info();
    }
}


function overPeep(x,y,r){
    if (dist(x,y,mouseX,mouseY) < r) {
        return true;
    } else {
        return false;
    }
}

function mouseClicked() {
    for(var i = 0; i < numberOfPeople; i ++) {
        if (overPeep(peeps[i].x, peeps[i].y, peeps[i].diameter)){
            if (peeps[i].conversion == false){
                peeps[i].conversion = true;
            } else {
                peeps[i].conversion = false;
            }
        }
    }
}

function emoji(x,y){
    console.log("Hey someone's changing at", x, y)
}

function changeInfluence(r){
   console.log(r);
}
