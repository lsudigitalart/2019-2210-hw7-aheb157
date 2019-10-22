
var sound;
var playTime;
var loadTime;
var amp,level;

function preload(){
sound = loadSound ("panic.mp3")
}

function setup(){
    createCanvas(800,800);
if(sound.isLoaded()){
loadTime = millis();
print(loadTime);
sound.play();
}
amp= new p5.Amplitude();
fft = new p5.FFT();
}

function draw(){
    if (playTime>0010){
    background (0);}
    playTime = millis()-loadTime;
    print(playTime);
    level = amp.getLevel();
    //print(level);


cSize= map(level, 0,1,0,width);

noStroke();
let lerping =lerpColor(color("red"),color("blue"),level);
fill(lerping);
background(0);
circle (width/2, height/2, cSize);


    

let spectrum = fft.analyze();
var trebleVol = fft.getEnergy("treble");
var midVol = fft.getEnergy("mid");
var bassVol = fft.getEnergy("bass");

fill( 0,0,255);
circle (100,100,trebleVol);
fill (0,0,255);
circle (700,700, trebleVol);
fill(255,0,0);
circle(700,100,midVol);
circle (100,700, midVol);
fill(250,215,0);
circle(400,100, bassVol);
circle(100,400, bassVol);
circle(400,700, bassVol);
circle(700,400, bassVol);

//first verse

if (playTime > 25000 && playTime <26500 ){
    textSize(43);
    fill(255);
    stroke(255);
    text("LET ME HEAR YOU SAY SOMETHING", 25, height/2);}

if (playTime> 27000 && playTime< 30500){
    textSize(40);
    fill(255);
    stroke(255);
    text("I'm sorry to get sentimental tonight.", 50, height/2);}
if (playTime > 31000 && playTime< 34000){
    textSize(40);
    fill(255);
    stroke(255);
    text("(my perfume lingers in your hair)", 50, height/2);}
 if (playTime> 34500 && playTime< 37000){
        textSize(40);
        fill(255);
        stroke(255);
        text("It's just that everything reminds me", 30, height/2);}
 if (playTime > 37000 && playTime< 40000){
        textSize(40);
        fill(255);
        stroke(255);
        text(" of things I thought I shouldn't ", 60, height/2);}
        if (playTime > 37000 && playTime< 41000){
            textSize(40);
            fill(255);
            stroke(255);
            text("  have to see again.", 80, 500);}
if (playTime > 41500 && playTime< 45000){
        textSize(40);
        fill(255);
        stroke(255);
        text(" See, the thing is I'm so sorry to say. ", 60, height/2);}
if (playTime > 45000 && playTime< 47000){
            textSize(40);
            fill(255);
            stroke(255);
            text(" (you need me don't you).", 80, height/2);}

 if (playTime > 47750 && playTime< 50500){
                textSize(40);
                fill(255);
                stroke(255);
                text(" Someone still loves you ", 60, height/2);}
  if (playTime > 51000 && playTime< 55000){
                    textSize(40);
                    fill(255);
                    stroke(255);
                    text("  Someone still Looooves you", 80, height/2);}

//verse

if (playTime > 56000 && playTime< 57000){
    textSize(40);
    fill(255);
    stroke(255);
    text(" MEET ME", 100, height/2);}
    if (playTime > 57000 && playTime< 61000){
        textSize(40);
        fill(255);
        stroke(255);
        text("  MEET ME AT THE OVERPASS", 60, height/2);}
if (playTime > 61000 && playTime< 62000){
            textSize(40);
            fill(255);
            stroke(255);
            text("  AT THE OVERPASS ", 100, height/2);}
if (playTime > 62500 && playTime< 64000){
                textSize(40);
                fill(255);
                stroke(255);
                text("  SKETCHY GIRLS AND LIPSTICK BOYS", 30, height/2);}
                if (playTime > 65000 && playTime< 66000){
                    textSize(40);
                    fill(255);
                    stroke(255);
                    text(" (sketchy girls and lipstick boys)", 60, height/2);}
                    if (playTime > 66000 && playTime< 68000){
                        textSize(35);
                        fill(255);
                        stroke(255);
                        text(" TROUBLED LOVE AND HIGHSPEED NOISE", 10, height/2);}

                        if (playTime > 69000 && playTime< 72000){
                            textSize(40);
                            fill(255);
                            stroke(255);
                            text(" I KNOW YOU WANT TO MEET ME", 100, height/2);}
                            if (playTime > 72000 && playTime< 75000){
                                textSize(40);
                                fill(255);
                                stroke(255);
                                text("  MEET ME AT THE OVERPASS", 60, height/2);}
                        if (playTime > 75000 && playTime< 77000){
                                    textSize(40);
                                    fill(255);
                                    stroke(255);
                                    text("  AT THE OVERPASS ", 100, height/2);}
                        if (playTime > 77000 && playTime< 79000){
                                        textSize(40);
                                        fill(255);
                                        stroke(255);
                                        text("  SKETCHY GIRLS AND LIPSTICK BOYS", 30, height/2);}
                                        if (playTime > 79000 && playTime< 81250){
                                            textSize(40);
                                            fill(255);
                                            stroke(255);
                                            text(" (sketchy girls and lipstick boys)", 60, height/2);}
                                            if (playTime > 81250 && playTime<82500){
                                                textSize(35);
                                                fill(255);
                                                stroke(255);
                                                text(" TROUBLED LOVE AND HIGHSPEED NOISE", 10, height/2);}
 if (playTime > 83000 && playTime< 84000){
    textSize(40);
    fill(255);
    stroke(255);
    text(" I KNOW YOU WANNA", 100, height/2);}
    if (playTime > 84000 && playTime< 86000){
        textSize(40);
        fill(255);
        stroke(255);
        text("  LET ME HEAR YOU SAY SOMETHING!", 40, height/2);}
if (playTime > 87000){
    sound.stop();
}
  }