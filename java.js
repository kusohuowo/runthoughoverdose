let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 1240;
canvas.height = 768;

let grass = new Image();
grass.src = "трава.png";
let kangel = new Image();
let name = "kangel";
kangel.src = name+"_idle1.png";

let candy = new Image();
candy.src = "cat cookie.gif"
let cake = new Image();
cake.src = "cake.png"
let sweet = new Image();
sweet.src = "sweet.png"
let dxCandy = 0
let dyCandy = 0
let dxCake = 0
let dyCake = 0
let dxSweet = 0
let dySweet = 0
positionX = 600
positionY = 300
dy = 0
dx = 0
angelStart = false; 
let letgo = "stop"

window.onload = function () {
    ctx.drawImage(grass, 0, 0, 1240, 768);
    ctx.drawImage(kangel, 600, 300, 100, 100);
    ctx.font = '28px swis721 blkoul bt';
    ctx.fillStyle = '#FF1493';
    ctx.fillText('※Press ⭑Enter⭑ to start', 450, 600);
}
document.addEventListener("keydown", moveUp);
document.addEventListener("keyup", stopObject);
function newCandy(){
    dxCandy = Math.round(Math.random()*1140);
    dyCandy = Math.round(Math.random()*668);
}
function newSweet(){
    dxSweet = Math.round(Math.random()*1140);
    dySweet = Math.round(Math.random()*668);
}
function newCake(){
    dxCake = Math.round(Math.random()*1140);
    dyCake = Math.round(Math.random()*668);
}
function moveUp(event) {
    if (event.key=="Enter" && angelStart == false) {
        candyStart = true;
        sweetStart = true;
        cakeStart = true;
        angelStart = true;
        newCandy();
        newSweet();
        newCake();
        requestAnimationFrame(draw);}
    if(event.key == "ArrowLeft"){
        letgo = "left"
        if(positionX >= 0)
            dx = -8;
        else
            dx=0
    }
    else if(event.key == "ArrowRight"){
        letgo = "right"
        if(positionX <= 1140)
            dx = 8;
        else
            dx=0
    }
    else if(event.key == "ArrowUp"){
       if(positionY >= 0)
            dy = -8;
       else
            dy=0;
    }
    else if(event.key == "ArrowDown"){
        if(positionY <= 668)
            dy = 8;
        else
            dy=0;
    }
    
    
}
function stopObject(event){
    if(event.key == "ArrowUp"){
        dy = 0;
    }
    else if(event.key == "ArrowDown"){
        dy = 0;
    }
    else if(event.key == "ArrowLeft"){
        dx = 0;
    letgo = "stop"
    }
    else if(event.key == "ArrowRight"){
        dx = 0;
    letgo = "stop"
    }
}
let balance = 0
let time=0
function draw(){
    requestAnimationFrame(draw); //для запуска анимации
    time++
    positionX += dx
    positionY += dy
    if(positionX>=1140 || positionX<=0){
        dx=0
    }
    if(positionY>=668 || positionY<=0){
        dy=0
    }

    if(time%32==0 && letgo == "right"){
        kangel.src = name+"_walk2.2.png";
    }
    else if(time%16==0 && letgo == "right"){
        kangel.src = name+"_walk1.2.png";
    }
    if(time%32==0 && letgo == "left"){
        kangel.src = name+"_walk2.png";
    }
    else if(time%16==0 && letgo == "left"){
        kangel.src = name+"_walk1.png";
    }
    if(positionX <= dxSweet && positionX+70 >= dxSweet && positionY<= dySweet && positionY+70>=dySweet){
        ctx.clearRect(0, 0, 1240, 768);
        newSweet();
        balance = balance + 50
    }
    if(positionX <= dxCandy && positionX+70 >= dxCandy && positionY<= dyCandy && positionY+70>=dyCandy){
        ctx.clearRect(0, 0, 1240, 768);
        newCandy();
        balance = balance + 100
    }
    if(positionX <= dxCake && positionX+70 >= dxCake && positionY<= dyCake && positionY+70>=dyCake){
        ctx.clearRect(0, 0, 1240, 768);
        newCake();
        balance = balance + 300
    }
    ctx.drawImage(grass, 0, 0, 1240, 768);
    ctx.drawImage(sweet, dxSweet, dySweet, 50, 50);
    ctx.drawImage(candy, dxCandy, dyCandy, 50, 50);
    ctx.drawImage(cake, dxCake, dyCake, 50, 50);
    ctx.drawImage(kangel, positionX, positionY, 100, 100);
    ctx.fillText("Points:" + balance + "♡", 590, 80);
}

let buyMiku = false;
function buymiku(){
    if(balance >= 2200 && buyMiku == false){
        name = "miku"
        kangel.src = name+"_idle1.png";
        balance = balance - 2200
        document.getElementById("miku").innerHTML = "use♡"
        buyMiku = true
    }
    if(buyMiku == true){
        name = "miku"
        kangel.src = name+"_idle1.png";
    }
}
let buyCat = false;
function buycat(){
    if(balance >= 440 && buyCat == false){
        name = "cat"
        kangel.src = name+"_idle1.png";
        balance = balance - 440
        document.getElementById("cat").innerHTML = "use♡"
        buyCat = true
    }
    if(buyCat == true){
        name = "cat"
        kangel.src = name+"_idle1.png";
    }
}
let buyAme = false;
function buy(){
    if(balance >= 1100 && buyAme == false){
        name = "ame"
        kangel.src = name+"_idle1.png";
        balance = balance - 1100
        document.getElementById("ame").innerHTML = "use♡"
        buyAme = true
    }
    if(buyAme == true){
        name = "ame"
        kangel.src = name+"_idle1.png";
    }
}

function use(){
    name = "kangel"
    kangel.src = name+"_idle1.png"
}
function shop(){
    document.getElementById("shopokno").style.display = "block";
}
function minus(){
    document.getElementById("shopokno").style.display = "none";
}