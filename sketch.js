const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.render
const Constraint = Matter.Constraint;
var engine, world



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(400,height,800,20);
  ground2 = new Ground(500,200,250,15)  
  box1 = new Box(400, 190, 40, 40)
  box2 = new Box(450, 190, 40, 40)
  box3 = new Box(500, 190, 40, 40)
  box4 = new Box(550, 190, 40, 40)
  box5 = new Box(600, 190, 40, 40)
  box6 = new Box(425, 100, 40, 40)
  box7 = new Box(475, 100, 40, 40)
  box8 = new Box(525, 100, 40, 40)
  box9 = new Box(575, 100, 40, 40)
  box10 = new Box(450, 70, 40, 40)
  box11 = new Box(500, 70, 40, 40)
  box12 = new Box(550, 70, 40, 40)
  
  player = new Player(100, 300, 20, 20)

  ground3 = new Ground(600, 350, 100, 10)
  box14 = new Box(600,325,25,25)
  box15 = new Box(635,325,25,25)
  box16 = new Box(565,325,25,25)
  box17 = new Box(582.5,285,25,25)
  box18 = new Box(617.5,285,25,25)
  box19 = new Box(600,245,25,25)


  slingshot = new SlingShot(player.body, {x:200, y:250})

}

function draw() {
  background("white");  
  
  Engine.update(engine)
  ground1.display();
  ground2.display();
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
 
  player.display();
  ground3.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(player.body, {x: mouseX, y: mouseY} )
  
  
  }
  
  function mouseReleased()  {
  
  slingshot.fly()
  
  }
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(player.body);
    }
 }