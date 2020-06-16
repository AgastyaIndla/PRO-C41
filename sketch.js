const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;

function preload(){
  road = loadImage("road.png");
  car =  loadImage("unnamed.png");
}



function setup() {
  createCanvas(600,700);

  engine = Engine.create();
    world = engine.world;

  player = new Player(200,200,30,30,100);
}

function draw() {
  background("lavender"); 

  text("x:"+mouseX,50,50);
  text("y:"+mouseY,50,70);
  
  player.display();
}