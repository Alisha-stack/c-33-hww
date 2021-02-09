var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle;

var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;

var turn =0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",30,550);
 text("500",100,550);
 text("500",180,550);
 text("500",265,550);
 text("100",340,550);
 text("100",420,550);
 text("100",500,550);
 text("100",590,550);
 text("200",660,550);
 text("200",740,550);
 text("200",800,550);
  Engine.update(engine);

if(gameState ==="end"){
  text("GAME OVER",300,300);
}

for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}

if(particle!=null){
   particle.display();

   if(particle.body.position.y>760){
       if(particle.body.position.x<45){
             score = score+500;
                 particle = null;
       }else if(particle.body.position.x<125) {
        score = score+500;
        particle = null;
       } else if(particle.body.position.x<205) {
        score = score+500;
        particle = null;
       } else if(particle.body.position.x<285) {
        score = score+500;
        particle = null;
       } else if(particle.body.position.x<365) {
        score = score+100;
        particle = null;
       } else if(particle.body.position.x<445) {
        score = score+100;
        particle = null;
       } else if(particle.body.position.x<525) {
        score = score+100;
        particle = null;
       } else if(particle.body.position.x<605) {
        score = score+100;
        particle = null;
       } else if(particle.body.position.x<685) {
        score = score+200;
        particle = null;
       } else if(particle.body.position.x<765) {
        score = score+200;
        particle = null;
       }
      }
   if(turn>=5){
   gameState = "end";
   }
   
  }
  
  
    
  

   
  
 console.log(turn);

  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   
}

function mousePressed(){
  if (gameState !== "end"){
    particle = new Particle(mouseX, 10,10);
    turn++;
  }
}