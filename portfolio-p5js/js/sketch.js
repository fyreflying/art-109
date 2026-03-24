let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.1;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", 1);
    //background(220);
}

function windowResized(){
    console.log("resized window");
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear(); 

    drawBrush01(80, 160, 688, 688);

    drawBrush01(40, 80, mouseX, mouseY);

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawBrush01(20, 40, xPos, yPos);
}

function mouseMoved(){
    drawBrush01(40, 80, mouseX, mouseY);
    drawBrush01(40, 80, mouseX / 2 + 344, mouseY / 2 + 344);

}

function drawBrush01(_r, _g, _x, _y){
    strokeWeight(0);
    fill(random(_g, _r), random(_r, _g), 220, 44);
    ellipse(_x, _y, random(_g, _r), random(_r, _g));
}