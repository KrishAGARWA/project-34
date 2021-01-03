
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1,bob2,bob3;
var ground;
var ro;
var ro1;
var ro2;
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;
bob1=new Pp(400,600)
bob2= new Pp(450,600)
	//Create the Bodies Here.
	bob3= new Pp(350,600)
ground=Bodies.rectangle(400,400,250,20,{isStatic:true})
World.add(world,ground)
ro=new Chain(bob1.body,ground,0,5)
ro1= new Chain(bob2.body,ground,50,10)
ro2= new Chain(bob3.body,ground,-50,10)

console.log (ro1)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  rect(ground.position.x,ground.position.y,250,20)
  bob1.display()
    bob2.display()
  bob3.display()
  ro.display()
    ro1.display()
ro2.display()
//keyPressed()
  drawSprites();
 
}
function mouseDragged(){
Body.setPosition(bob3.body,{x:mouseX,y:mouseY})





}


/*function keyPressed(){
	if(keyCode===LEFT_ARROW){
  //  Body.setStatic(bob3, false);

	Body.applyForce(bob3.body,bob3.body.position,{x:-185,y:-180})
}}*/









