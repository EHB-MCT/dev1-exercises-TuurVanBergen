    "use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;
let width = 600;
let height = 300;

drawlines();

let step = width/horizontalLines;

function drawlines(){
    context.fillStyle = 'orange';
    context.fillRect(0,0,width,height);
    context.strokeStyle = "white";

    for(let i =0; i <60;i++){
        Utils.drawLine(i * step,0,width - i * step, height);
    }
    for(let i =0; i <60;i++){
        Utils.drawLine(i * step,0,width)
    }
}