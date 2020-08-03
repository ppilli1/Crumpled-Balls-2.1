const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,box,paper;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(200,600,25,25);

  ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = new Box(600,650,200,20);
  box2 = new Box(500,600,20,100);
  box3 = new Box(700,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
  paper1.display();
  //box1.display();
  //box2.display();
  //box3.display();
  image(dustbinImage,500,500,150,150);

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}



