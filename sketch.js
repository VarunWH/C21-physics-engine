//Giving nickname-name aliasing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
 
var myEngine, myWorld, ground,ball;

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld= myEngine.world;

  var groundOptions={
    isStatic:true,
    density:1
  }

  ground= Bodies.rectangle(200,380,400,20,groundOptions);
  World.add(myWorld,ground);

  console.log(ground);

  var ballOptions={
     restitution:1

  }
    

  ball=Bodies.circle(200,200,20,ballOptions);
  World.add(myWorld,ball);
  
}

function draw() {
  background("black");  
  Engine.update(myEngine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);

  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}