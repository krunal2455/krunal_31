const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var plinkos = [];
var particle = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = createSprite(600,789,1200,20);
  ground.shapeColor = ("white");

  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,75));
  }
  for(var j = 50;j <=width-10;j=j+50){
    plinkos.push(new Plinkos(j,175));
  }
  for(var j = 75;j <=width;j=j+50){
    plinkos.push(new Plinkos(j,275));
  }
  for(var j = 75;j <=width;j=j+50){
    plinkos.push(new Plinkos(j,375));
  }

  division = new Divisions(0,685,10,300);
  division1 = new Divisions(80,685,10,300);
  division2 = new Divisions(160,685,10,300);
  division3 = new Divisions(240,685,10,300);
  division4 = new Divisions(320,685,10,300);
  division5 = new Divisions(400,685,10,300);
  division6 = new Divisions(480,685,10,300);
  


}

function draw() {
  background("black"); 
   Engine.update(engine);

   for(var i = 0;i< plinkos.length;j++){
     plinkos[i].display();
   }

   division.display();
   division1.display();
   division2.display();
   division3.display();
   division4.display();
   division5.display();
   division6.display();

  drawSprites();
}