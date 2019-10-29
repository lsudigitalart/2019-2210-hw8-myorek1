
  var w = 150;
  var z = 100;
  var diam1 = 55;
    var diam2 = 55;

   // background
   var woods;
   var logo;

   // music 
   var music;
// creature function 

function animal(x,y){
// animal body function 

// function body 
function body(){
    // boddy choice 
    var bod = [];
    var which; 
    
    which = int(random(5));
    print(which);

    // array 
    bod[0] = createImg("monster1.png")
    bod[1] = createImg("monster2.png")
    bod[2] = createImg("monster3.png")
    bod[3] = createImg("monster4.png")
    bod[4] = createImg("monster5.png")

    for(var i = 0; i<bod.length; i++){
        bod[i].hide;
    }

    
    if (which == 0) {
        bod[1].hide();
        bod[2].hide();
        bod[3].hide();
        bod[4].hide();
        bod[0].show();
        bod[0].position (30,20); 
        bod[0].size(400,400);
        bod[0].style("z-indedx","-2");
    }
     
    if (which == 1) {
        bod[0].hide();
        bod[2].hide();
        bod[3].hide();
        bod[4].hide();
        bod[1].show();
        bod[1].position (30,20); 
        bod[1].size(400,400);
        bod[1].style("z-indedx","-2");
    }

    if (which == 2) {
        bod[0].hide();
        bod[1].hide();
        bod[3].hide();
        bod[4].hide();
        bod[2].show();
        bod[2].position (30,30); 
        bod[2].size(400,400);
        bod[2].style("z-indedx","-2");
    }

    if (which == 3) {
        bod[0].hide();
        bod[1].hide();
        bod[2].hide();
        bod[4].hide();
        bod[3].show();
        bod[3].position (30,20); 
        bod[3].size(400,400);
        bod[3].style("z-indedx","-2");
    }
    if (which == 4) {
        bod[0].hide();
        bod[1].hide();
        bod[2].hide();
        bod[3].hide();
        bod[4].show();
        bod[4].position (30,-5); 
        bod[4].size(400,400);
        bod[4].style("z-indedx","-2");
    }
    
    
    
}
// eye function
function eye() {

    var eyes = [];
    var which;

    which = int(random(5));
    print(which);

    // array 
    eyes[0] = createImg("eye1.gif");
    eyes[1] = createImg("eye2.gif");
    eyes[2] = createImg("eye3.gif");
    eyes[3] = createImg("eye4.gif");
    eyes[4] = createImg("eye5.gif");
    


     for(var i = 0; i<eyes.length; i++){
        eyes[i].hide;
    }

    
    if (which == 0) {
        eyes[1].hide();
        eyes[2].hide();
        eyes[3].hide();
        eyes[4].hide();
        eyes[0].show();
        eyes[0].position (125,60); 
        eyes[0].size(210,210);
       
    }
    if (which == 1) {
        eyes[0].hide();
        eyes[2].hide();
        eyes[3].hide();
        eyes[4].hide();
        eyes[1].show();
        eyes[1].position (180,100); 
        eyes[1].size(100,100);
       
    }

    if (which == 2) {
        eyes[0].hide();
        eyes[1].hide();
        eyes[3].hide();
        eyes[4].hide();
        eyes[2].show();
        eyes[2].position (155,80); 
        eyes[2].size(150,150);
       
    }
    
    if (which == 3) {
        eyes[0].hide();
        eyes[1].hide();
        eyes[2].hide();
        eyes[4].hide();
        eyes[3].show();
        eyes[3].position (180,110); 
        eyes[3].size(100,100);
       
    }

    if (which == 4) {
        eyes[0].hide();
        eyes[1].hide();
        eyes[2].hide();
        eyes[3].hide();
        eyes[4].show();
        eyes[4].position (130,25); 
        eyes[4].size(200,200);
       
    }

}
// mouth function 
function mouth () {
    // mouth array and choice 
var mouths = [];
var which;

    which = int(random(4));
    print(which);

    // array
    mouths[0] = createImg("mouthToung.gif");
    mouths[1] = createImg("mouthSmile.gif");
    mouths[2] = createImg("biglips.gif");
    mouths[3] = createImg("mouth3.gif");


    // x and y position of the mouth 
    var mx = random(170,175);
    var my = random(190,190);

    // choosing the random mouth 
    for(var i = 0; i<mouths.length; i++){
        mouths[i].hide;
    }

    
    if (which == 0) {
        mouths[1].hide();
        mouths[2].hide();
        mouths[3].hide();
        mouths[0].show();
        mouths[0].position (mx,my); 
        mouths[0].size(110,110);
    }
     
    if (which == 1) {
        mouths[0].hide();
        mouths[2].hide();
        mouths[3].hide();
        mouths[1].show();
        mouths[1].position(mx,my);
        mouths[1].size(130,130);
        
    }
    
    if (which == 2) {
        mouths[0].hide();
        mouths[1].hide();
        mouths[3].hide();
        mouths[2].show();
        mouths[2].position(mx,my);
        mouths[2].size(130,130);
        
    }
   
    if (which == 3) {
        mouths[0].hide();
        mouths[1].hide();
        mouths[2].hide();
        mouths[3].show();
        mouths[3].position(mx,my);
        mouths[3].size(130,130);
        
    }


}


body();
mouth();
eye();
//multieye();
}
/*
function eye(){
    // calls the eye at diffrent places 
       w = random(70,200);
       z = random(50,160);
       diam1 = random(30,80);
        diam2 = random(30,80);
    
       // eye color diffrent cool tones 
            var col = {
                r:99,
                g:185,
                b:283,
            }
    
            function eyecol(){
           col.r = random(99,200);
           col.g = random(185, 255);
           col.b = random(100,283);
    
           var eyecoll = fill(col.r,col.g,col.b);
           
        //    eyecoll;
        
    
           strokeWeight(1);
           stroke(5);
           noStroke();
           ellipse(w,z,diam1/1.7, diam2/1.7)
       
            }
    
        // wight circle
        strokeWeight(2)
        stroke(5)
        //noStroke();
        fill(255,255,255)
        ellipse(w,z,diam1,diam2)
    
        // collored iris 
        eyecol(); 
    
        // pupil 
        fill(5)
        stroke(5)
       //noStroke();
        ellipse(w,z,diam1/4, diam1/4)
    
    // multiple eyes accoding to x and y 
    
    function multieye(){
    
       // w = random(100,360);
        //z = random(50,150);
        // draws one eye 
    
        if (w > 99 && w < 370 && z > 49 && z < 160){
            eye();  
        }
    
        // draws 2 eyes
        if (w > 150 && w < 250 && z > 49 && z < 160){
            w+=10
            z+= 10
            eye();  
        }
    
        // draws 3 eyes 
          // draws 2 eyes
          if (w > 230 && w < 370 && z > 60 && z < 200){
            eye();  
        }
    }

    multieye();
}*/

function name(){
    
}

function preload(){
    music = loadSound("monstermash.mp3");
    woods = loadImage("woods.png");
    logo = loadImage("logo.png");

}
function setup(){
    if(music.isLoaded()){
        loadtime = millis();
        print(loadtime);
        music.play();

    }

    createCanvas(900, 400);
    background(92,124,121);
  
    // background 
    image(woods,0,0, woods.width, woods.height*1.13);
    // title 
    image(logo,400,10,logo.width/1.15);

    animal(10,20);
    //animal(400,20);

    //eye();


}


function draw(){
  
   
   // toung.position (200,200);
//toung.size(100,100);
    //background(92,124,121);


}