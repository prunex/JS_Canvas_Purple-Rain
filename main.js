"use strict"

var canvas = document.getElementById("canvas");

canvas.width = 640;
canvas.height = 360;
//canvas.style("background", "purple");
canvas.style.backgroundColor = "rgb(230, 230, 250)";

var c = canvas.getContext("2d");

c.fillStyle = "rgb(230, 230, 250)";
c.fillRect(0, 0, canvas.width, canvas.height);


var d = new Drop();

animate();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    d.show();
    d.fall();
    
}

function Drop() {
    this.x = canvas.width / 2;
    this.y = 0;
    this.yspeed = 1;

    this.fall = function () {
        this.y = this.y + this.yspeed;
    }

    this.show = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y + 10);
        c.strokeStyle = "rgb(138, 43, 226)";
        //c.closePath();
        c.stroke();
        c.beginPath();
    }
}