
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperbody = new Paper2(100,100,20)
	groundbody = new Ground(500,390,1000,20)
	dustbinleftbody = new Dustbin(600,330,10,100)

	dustbinrightbody = new Dustbin(800,330,10,100)
	
	dustbinbottombody = new Dustbin (700,375,200,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperbody.display();
  groundbody.display();
  dustbinleftbody.display();
  dustbinrightbody.display();
  dustbinbottombody.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paperbody.body, paperbody.body.position, {x:15, y:-15});  		

}



