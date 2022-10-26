"use strict";


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 50;
let spacing = 50;

drawLines(width,height);
function drawLines(x,y){
    context.beginPath();

    context.moveTo(margin, spacing);
    context.lineTo(x- margin,spacing);
    context.lineTo(margin,spacing * 2);
    
    context.moveTo(margin,spacing * 2);
    context.lineTo(x- margin,spacing * 2);
    context.lineTo(margin,spacing * 3);

    context.moveTo(margin,spacing * 3);
    context.lineTo(x- margin,spacing * 3);
    context.lineTo(margin,spacing * 4);

    context.moveTo(margin,spacing * 4);
    context.lineTo(x- margin,spacing * 4);
    context.lineTo(margin,spacing * 5);

    context.moveTo(margin,spacing * 5);
    context.lineTo(x- margin,spacing * 5);

    context.stroke();
}