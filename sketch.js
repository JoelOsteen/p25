
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1,rectangle2,rectangle3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectangle1=createSprite(900,685,200,20);
	rectangle2=createSprite(800,645,20,100);
 	rectangle3 = createSprite(1000,645,20,100);
	paperObj= new Paper(200,450,20);
	ground=new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  keyPressed();
  paperObj.display();


  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		
    }
}

