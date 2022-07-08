

let width = window.innerWidth-10;
let height = window.innerHeight - 100;
let isBoom = false;

function dis(x,y){
    return Math.sqrt((x-width/2)*(x-width/2) + (y-height/2)*(y-height/2));
}
let img;
function setup(){
    createCanvas(width, height);
    // let btn = createButton("don't click this");
    // btn.mousePressed(boom);
    //img = loadImage('scam.jpg');

}
let da = 0;
let str = 'Hi.\nIt\'s me:)\nWelcome to my website.'
let end = 0;
let inc = 1;

function draw(){
    
    background(255);
    sketch1();
    
    da+=0.01;
}

let intros = ['<sin-wave>', '<dist+sin>', '<perlin-noise>']
let inc0 = 0;
let inc1 = 0;
let inc2 = 0;

function reset0(){
    inc0 = 0;
}


function sketch0(){
    noFill();

    if(inc0>=0){
        stroke(0);
        let intro = intros[0].substring(0, inc0);
        textSize(30);
        textFont('Courier New');
        textAlign(CENTER);
        text(intro, width/2, height/2);
    }else{
        for(let y = height/4; y<3*height/4; y+=5){
            beginShape();
            let w1 = width*0.15;
            let w2 = width*0.85;
            for(let x =w1;x<=w2;x++){
                vertex(x, y+40*sin((x+y)/100+da));
            }
            endShape();
        }
    }

    if(frameCount%8==0){
        inc0++;
        if(inc0 > intros[0].length) {
            inc0 = -Infinity;
        }
    } 

}



function sketch1(){
    noFill();

    for(let y = height/4; y<3*height/4; y+=10){
        beginShape();
        let w1 = width*0.15;
        let w2 = width*0.85;
        for(let x =w1;x<=w2;x++){
            vertex(x, y+40*sin(dis(x,y)/30-da));
        }
        endShape();
    }
}

function sketch2(){
    noFill();

    for(let y = height/4; y<3*height/4; y+=10){
        beginShape();
        let w1 = width*0.15;
        let w2 = width*0.85;
        for(let x =w1;x<=w2;x++){
            vertex(x, height/2+y*sin(x/100+da)/5+noise(dis(x,y)/100,x/100)*y/10);
        }
        endShape();
    }
}

function boom(){
    isBoom = true;
}
function normally(da){
    noFill();
    //stroke(255,100);
    
    let thickness = 5;
    strokeWeight(thickness);
    // for(let y = height/4; y<3*height/4;y+=10){
    //     beginShape();
    //     for(let x = width/4; x<3*width/4;x++){
    //         vertex(x,10*sin(dis(x,y)/10 + da)+y);
    //     }
    //     endShape();
    // }
    let t = 10;
    translate(width/5,0);
    for(let x = width/4;x<3*width/4;x+=t){
        for(let y = height/4; y<3*height/4; y+=t){
            if(noise(x/100+da,y/100+da,da)>0.4){
                stroke(50,155,255);
                line(x,y,x+t,y+t);
            }else{
                stroke(200,155,55);
                line(x,y-t,x+t,y);
            }
        }
    }
    translate(-width/5,0);
    
    translate(-width/2.5,0);

    stroke(0);

    fill(0);
    strokeWeight(2);
    textSize(30);
    textFont('Courier New');
    //textAlign(CENTER);
    let s = str.substring(0, end+1);
    text(str, width/2,height/2-30);

    if(frameCount%10==0){
        if(end == str.length || end<0){
            inc *= -1;
        }
        end+=inc; 
    }

    
}
