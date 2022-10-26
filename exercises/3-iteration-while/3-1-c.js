"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    let step =25 ;
    while (i < 5) {
        Utils.drawLine(50, 125 + step, 350, 125+ step);
        Utils.drawLine(125 + step, 50, 125 + step, 350);
        i += 1 ;
        step +=25
    }
}