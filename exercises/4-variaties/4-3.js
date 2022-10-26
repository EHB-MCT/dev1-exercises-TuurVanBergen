"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let lengte = 100;
let startwaarde = 50;
let eindwaarde = 50;

for(let c=0;c<3;c++){

    for(let b=0;b<2;b++){
    for(let i=0;i<6;i++){
    Utils.strokeRect(startwaarde +(i*lengte),eindwaarde,100,50);
    }
    startwaarde += 50;
    eindwaarde +=50 ;
    }
    startwaarde -= 50;
    eindwaarde -=50 ;
}