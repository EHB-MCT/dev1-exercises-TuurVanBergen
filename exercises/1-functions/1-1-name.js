"use strict";



function drawName() {

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle="red"
    context.moveTo(100,50);
    context.lineTo(100,150);
    context.stroke();
    
    context.moveTo(160,50);
    context.lineTo(50,50);
    context.stroke();

    context.beginPath();
    context.lineWidth =10;
    context.strokeStyle="green"
    context.moveTo(200,50);
    context.lineTo(200,150);
    context.lineTo(290,150);
    context.lineTo(290,50);
    context.stroke();
    
    context.beginPath();
    context.lineWidth =5;
    context.strokeStyle="blue"
    context.moveTo(330, 50);
    context.lineTo(330,150);
    context.lineTo(420,150);
    context.lineTo(420,50);
    context.stroke();

    context.beginPath();
    context.lineWidth =5;
    context.strokeStyle="yellow"
    context.moveTo(460,50); 
    context.lineTo(460,150);
    context.moveTo(460,50);
    context.lineTo(520,50);
    context.lineTo(520,90);
    context.lineTo(490,90);
    context.lineTo(500,150);
    context.stroke();
}

drawName()
