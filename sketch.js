
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;
var ball;
var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9 ,box10;

function setup(){
createCanvas(400, 400);
engine = Engine.create();
world = engine.world;
box1=new Box(200,100,50,50);
box2=new Box(100,50,50,100);
var ground_options={
  isStatic:true
  
}


ground= Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);
console.log(ground);
var ball_options={
  restitution: 1.0
}
ball= Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
}

function draw(){
background(0);
Engine.update(engine);
box1.display();
box2.display();
}

