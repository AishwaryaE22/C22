const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, box, ground


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options={isStatic : false,
                restitution : 2}
  var options_gr={isStatic : true}


  box = Bodies.rectangle(200,200,50,50,options);
  World.add(world,box);
  console.log(box)

  ground = Bodies.rectangle(10,350,500,40,options_gr)
  World.add(world,ground);
  console.log(ground)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rect(CENTER)
  fill("green");
  rect(box.position.x,box.position.y, 50,50);
  fill("brown");
  rect(ground.position.x, ground.position.y, 500,40)
}