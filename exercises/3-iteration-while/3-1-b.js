"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 1;
    let x = 25;
    let y = x;
    while (i <12) {
        Utils.drawLine(75, 50 + x, 325, 50 + x );
        Utils.drawLine(50+x, 75, 50 + x, 325);
        i += 1;
        x +=50;
    }
}
