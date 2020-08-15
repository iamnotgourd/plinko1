const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300


function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(440,798,880,10)
}

function draw() {
  background("black");  

  for(var k = 0;k<=width;k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  ground.display()

  drawSprites();
}