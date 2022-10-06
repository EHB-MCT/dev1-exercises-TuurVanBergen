"use strict";

function drawRectangle(){

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle="red";
    context.moveTo(50,50);
    context.rect(50,50,150,150);
    context.stroke();

    context.beginPath();
    context.strokeStyle="red";
    context.rect(200,200,150,150);
    context.moveTo(420,175);
    context.rect(275,75,50,50);
    context.stroke();

    context.beginPath();
    context.rect(125,125,150,150);
    context.fillStyle ="black";
    context.stroke();
    context.fill();

    context.beginPath();
    context.moveTo(50,350);

    context.strokeStyle="black";
    context.fillStyle="black";
    context.rect(50,325,25,25);
    context.stroke();
    context.fill();

    context.beginPath();
    context.strokeStyle="red";
    context.moveTo(50,325);
    context.rect(75,275,50,50);
    context.stroke();

    context.beginPath();
    context.strokeStyle="black";
    context.fillStyle ="black";
    context.moveTo(175,175);
    context.rect(325,50,25,25);
    context.stroke();
    context.fill();
}

drawRectangle();