const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box16,box17,box18,box19;
function setup() {
 createCanvas(1000, 550);
engine = Engine.create();
world = engine.world;

polygon = new Polygon(100, 300, 70);

floor1 = new Ground(500,200,250,10);
floor2 = new Ground(700,200,200,10);

//upper roof lower most
box1 = new Block(610, 175,30,40,"blue");
box2 = new Block(640, 175, 30, 40, "blue");
box3 = new Block(670, 175, 30, 40, "blue");
box4 = new Block(700, 175, 30, 40, "blue");
//upper roof middle 
box5 = new Block(610, 135, 30, 40, "green");
box6 = new Block(640, 135, 30, 40, "green");
box7 = new Block(670, 135, 30, 40, "green");
//upper roof upper one
box8 = new Block(610, 95, 30, 40, "yellow");
box9 = new Block(640, 95, 30, 40, "yellow");
//upper roof top most
box10 = new Block(550, 55, 30, 40, "red");

//lower roof lower most
box11 = new Block(550, 175, 30, 40, "blue");
box12 = new Block(580, 175, 30, 40, "blue");
box13 = new Block(700, 175, 30, 40, "blue");
box14 = new Block(730, 175, 30, 40, "blue");
//lower roof middle 
box16 = new Block(580, 135, 30, 40, "green");
box17 = new Block(550, 135, 30, 40, "green");
//lower roof upper one
box18 = new Block(550, 95, 30, 40, "yellow");
box19 = new Block(580, 95, 30, 40, "yellow");
sling= new SlingShot(polygon.body,{x:100, y:250});

Engine.run(world, engine);
}
function draw() {
  background(0);  
  Engine.update(engine);
  floor1.display();
  floor2.display();
 
  polygon.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  sling.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}