"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let height = 550;
let width = 550;
let marginH = 50;
let marginW = 50;

randomRectangle(height, width, marginH, marginW);

function randomRectangle(x,y,a,b){
    
    context.moveTo(50,50);

    for (let i = 0; i<8; i++){
        context.beginPath();
        //genereren van rgb kleuren
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let c= Math.floor(Math.random() * 255);

        //rgb kleuren samenvoegen
        let kleur = "rgb(" + r + "," + g + "," + c + ")";
        //console.log(kleur);
        
        //tekenen van vierkant
        context.rect(a,b,x,y);
        context.fillStyle = kleur;
        context.stroke();
        //inkleuren van vierkant
       context.fill();

       //veranderen locatie en grootte van vierkant
        x= x-50;
        y = y - 50;
        a = a + 25;
        b = b + 25;
    } 
}