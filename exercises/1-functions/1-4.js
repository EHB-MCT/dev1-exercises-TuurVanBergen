"use strict";

function drawRectangle(){

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(50,50);
    context.rect(50,50,300,300);
    context.moveTo(120,50);
    context.lineTo(120,200);
    context.stroke();
}

drawRectangle();