
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20;
 var block21,block22,block23,block24,block25;
 var block26,block27,block28,block29,block30,block31;
 var polygon1;
 var slingshot1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1=new Ground(400,700,800,20);
stand1=new Ground(300,540,290,20);
stand2=new Ground(600,450,200,20);
block1=new Block(190,510,30,40);

block2=new Block(230,510,30,40);
block3=new Block(270,510,30,40);
block4=new Block(310,510,30,40);
block5=new Block(350,510,30,40);
block6=new Block(390,510,30,40);
block7=new Block(210,470,30,40);
block8=new Block(250,470,30,40);
block9=new Block(290,470,30,40);
block10=new Block(330,470,30,40);
block11=new Block(370,470,30,40);
block12=new Block(230,430,30,40);
block13=new Block(270,430,30,40);
block14=new Block(310,430,30,40);
block15=new Block(350,430,30,40);
block16=new Block(250,390,30,40);
block17=new Block(290,390,30,40);
block18=new Block(330,390,30,40);
block19=new Block(310,350,30,40);
block20=new Block(270,350,30,40);
block21=new Block(290,310,30,40);
block22=new Block(530,418,30,40);
block23=new Block(570,418,30,40);
block24=new Block(610,418,30,40);
block25=new Block(650,418,30,40);
block26=new Block(550,378,30,40);
block27=new Block(590,378,30,40);
block28=new Block(630,378,30,40);
block29=new Block(570,338,30,40);
block30=new Block(610,338,30,40);
block31=new Block(590,298,30,40);
polygon1=new Polygon(50,200,90);
slingshot1=new Slingshot(polygon1.body,{x:80,y:400});



//block25=new Block(650,418,30,40);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  polygon1.display();
  slingshot1.display();
  
  
 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}



