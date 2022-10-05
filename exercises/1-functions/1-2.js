"use strict";

function drawRectangle() {

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');



    context.beginPath();
    context.strokeStyle="red";
    context.lineWidth = 5;
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(50,200);
    context.lineTo(200,50)
    context.stroke()

    context.beginPath();
    context.strokeStyle="black";
    context.lineWidth = 5;
    context.moveTo(50,50);
    context.lineTo(50,200);
    context.lineTo(200,200);
    context.lineTo(200,50);
    context.lineTo(50,50);
    context.stroke()
}

drawRectangle()