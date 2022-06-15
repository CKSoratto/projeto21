const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;
var groundObj;
var wall1;
var wall2;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

var ball_options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}
/*Nunca confiem em autosave!!*/ console.log("Não confie em autosave.")
  
  ball = Bodies.circle(260, 100, 50, ball_options);
  World.add(world, ball);

  groundObj = new Ground(width/2, 670, width, 20);
  wall1 = new Ground(1100,600,20,120);
  wall2 = new Ground(1350,600,20,120);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(190, 56, 77);

  groundObj.display();
  wall1.display();
  wall2.display();

  fill(255, 61, 74)
  ellipse(ball.position.x, ball.position.y, 50);
 
  drawSprites();

}


function keyPressed(){

    if(keyCode === UP_ARROW){

     Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});

	}

}


