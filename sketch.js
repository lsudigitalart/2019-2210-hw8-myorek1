
  var w = 150;
  var z = 100;
  var diam1 = 55;
    var diam2 = 55;

   // background
   var woods;

   var logo;
// creature function 

function animal(x,y){
// animal body function 

function body(){

    // body color diffrent warm tones
    var colB = {
        r:226,
        g:122,
        b:61,
    }

    function bodycol(){
   colB.r = random(200,250);
   colB.g = random(60, 205);
   colB.b = random(30,70);

   var bodycoll = fill(colB.r,colB.g,colB.b);

    }

    // randomize body points to draw diffrent curved shapes
    var ax = random (50,100);
    var ay = random (20, 100);
    var bx = random(10,70);
    var by = random(100,150);
    var cx = random(150,230);
    var cy = random(230,310);
    var dx = random(200,300);
    var dy = random(310,410);
    var ex = random(280,340);
    var ey = random(200,300);
    var fx = random(320,420);
    var fy = random(110,200);
    var gx = random(230,330);
    var gy = random(20,60);

    // points plotted for body
/*strokeWeight (4)
stroke(5)
point (100,58)
point (56, 150)
point (150, 230)
point(200, 310)
point(280, 200)
point(320,110)
point(230,40)
*/ 
// shape connected using random points
//noStroke();
stroke(5)
strokeWeight (3)
bodycol();

beginShape();
curveVertex(ax,ay)
curveVertex(ax,ay)
curveVertex(bx, by)
curveVertex(cx, cy)
curveVertex(dx, dy)
curveVertex(ex, ey)
curveVertex(fx,fy)
curveVertex(gx,gy)
curveVertex(ax,ay)
curveVertex(ax,ay)
endShape();

}

function eye(){
// calls the eye at diffrent places 
   w = random(100,350);
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

}

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


// mouth function 
function mouth () {
    // mouth array and choice 
var mouths = [];
var which;

    which = int(random(3));
    print(which);

    // array
    mouths[0] = createImg("mouthToung.gif");
    mouths[1] = createImg("mouthSmile.gif");
    mouths[2] = createImg("biglips.gif");

    // x and y position of the mouth 
    var mx = random(150,250);
    var my = random(160,250);

    // choosing the random mouth 
    for(var i = 0; i<mouths.length; i++){
        mouths[i].hide;
    }

    
    if (which == 0) {
        mouths[1].hide();
        mouths[2].hide();
        mouths[0].show();
        mouths[0].position (mx,my); 
        mouths[0].size(100,100);
    }
     
    if (which == 1) {
        mouths[0].hide();
        mouths[2].hide();
        mouths[1].show();
        mouths[1].position(mx,my);
        mouths[1].size(150,150);
        
    }
    
    if (which == 2) {
        mouths[0].hide();
        mouths[1].hide();
        mouths[2].show();
        mouths[2].position(mx,my);
        mouths[2].size(150,150);
        
    }



}

translate(x,y)
body();
multieye();
mouth();
}

function preload(){

    woods = loadImage("woods.png");
    logo = loadImage("logo.png");

}
function setup(){
    createCanvas(900, 400);
    background(92,124,121);
  
    // background 
    image(woods,0,0, woods.width, woods.height*1.13);
    // title 
    image(logo,400,10,logo.width/1.15);

    animal(10,20);
    //animal(400,20);

   // toung = createImg("mouthToung.gif");
}


function draw(){

   // toung.position (200,200);
//toung.size(100,100);
    //background(92,124,121);


}