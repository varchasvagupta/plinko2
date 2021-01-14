const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
  
var engine,world;

  var particles;
  var divisons;
  var particles = [particle];
  var plinkos=[];
  var line;
  var divisionHeight=300;
  var gameState = "PLAY" ;

  var count = 0;
  var score = 0;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);

  for(var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2 , 10, division))
  }

  for (var j =75; j <=width; j=j+50)
   {
     plinkos.push(new Plinko(j,75));
   }
   

   for (var j =50; j <=width-10; j=j+50)
   {
     plinkos.push(new Plinko(j,175));
   }


   for (var j =75; j<=width; j=j+50)
  {
   plinkos.push(new Plinko(j,275));
  } 


  for (var j =50; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background("black");
  textSize(20);
  
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++)
   {
     plinkos(i).dispaly();
   }

   if(frameCount%60===0)
   {
     particles.push(new Particles(random(100,700), 10,10));
     score++;
   }

   for(var j = 0; j < particles.length; j++)
   {
     particles(j).display();
   }

   for(var k = 0; k < divisons.length; k++)
   {
     divisions(k).display();
   }
  
 drawSprites();
 }
 