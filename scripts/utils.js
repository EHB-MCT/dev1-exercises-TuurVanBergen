"use strict";
import context from "./context.js";

export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function strokeRect(x1,y1,x2,y2){
    context.beginPath();
    context.rect(x1,y1,x2,y2);
    context.stroke();
}

export function strokeCircle(x1,y1,radius){
    context.beginPath();
    context.ellipse(x1,y1, radius, radius, 0,0,2*Math.PI);
    context.stroke();
}

export function rgb(r,g,b){
    let rgb = "rgb(" + r + ","+ g + "," + b + ")";
    return rgb;
}

export function rgba(r,g,b,a){
    let rgba = "rgb(" + r + ","+ g + "," + b + "," + a + ")";
    return rgba;
}