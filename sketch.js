const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;
var box1,box2,box3,box4,box5,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
function setup() {
 createCanvas(1000, 550);
engine = Engine.create();
world = engine.world;

polygon = new Polygon(200, 300, 70);

floor1 = new Ground(390,400,250,10);
floor2 = new Ground(700,200,200,10);

//Upper
box1 = new Block(300, 275,30,40,"blue");
box2 = new Block(330, 275, 30, 40, "blue");
box3 = new Block(360, 275, 30, 40, "blue");
box4 = new Block(390, 275, 30, 40, "blue");
box5 = new Block(330, 235, 30, 40, "green");
box6 = new Block(360, 235, 30, 40, "green");
box7 = new Block(390, 235, 30, 40, "green");
box8 = new Block(360, 195, 30, 40, "yellow");
box9 = new Block(390, 195, 30, 40, "yellow");
box10 = new Block(390, 155, 30, 40, "red");

//Lower
box11 = new Block(640, 175, 30, 40, "blue");
box12 = new Block(670, 175, 30, 40, "blue");
box13 = new Block(700, 175, 30, 40, "blue");
box14 = new Block(730, 175, 30, 40, "blue");
box15 = new Block(640, 135, 30, 40, "green");
box16 = new Block(670, 135, 30, 40, "green");
box17 = new Block(700, 135, 30, 40, "green");
box18 = new Block(640, 95, 30, 40, "yellow");
box19 = new Block(670, 95, 30, 40, "yellow");
box20 = new Block(640, 75, 30, 40, "red");

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
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  sling.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}