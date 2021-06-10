const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var complayer,combase;
var player1,plbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    combase = new computerBase(1000,500,150,150);
    plbase = new PlayerBase(300,random(450,height-300),180,150);
    complayer = new computerPlayer(1000,350,50,180);
    player1 = new Player(285,plbase.body.position.y - 153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   combase.display();
   plbase.display();
   //display Player and computerplayer
   complayer.display();
   player1.display();
}
