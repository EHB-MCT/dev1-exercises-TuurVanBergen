"use strict";


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawPattern();

function drawPattern(){
    context.beginPath();
    context.moveTo(50,50);
    context.rect(50,50,150,50);
    context.fillStyle = "#2c3e50";
    context.rect(350,50,150,50);
    context.rect(50,200,150,50);
    context.rect(350,200,150,50);
    context.fill();
    context.beginPath();
    context.fillStyle = "#ecf0f1"
    context.rect(200,50,150,50);
    context.rect(200,200,150,200);
    context.fill();
    context.beginPath();
    context.fillStyle ="#e84c3c";
    context.rect(50,100,450,100);
    context.fill();

    context.beginPath();
    context.fillStyle ="#3498db";
    context.rect(50,250,150,150);
    context.rect(350,250,150,150);
    context.stroke();
    context.fill();

}