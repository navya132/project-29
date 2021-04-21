const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand;

var polygon, polyIMG;

var slingShot;



function preload() {
  polyIMG = loadImage("polygon.png")
}



function setup() {
  var canvas =  createCanvas(800,400);
    
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(136,145,20);
 World.add(world,polygon);

 slingShot = new SlingShot (this.polygon,{x:200, y:145} );


    stand = new Block(640,200,160,8);
    stand2 = new Block(370,300,220,8);

    //stand2, row 1 (from down)
    square1 = new Block(300,280,23,32);
    square2 = new Block(325,280,23,32);
    square3 = new Block(350,280,23,32);
    square4 = new Block(375,280,23,32);
    square5 = new Block(400,280,23,32);
    square6 = new Block(425,280,23,32);
    square7 = new Block(450,280,23,32);
     //stand2, row 2
    square8 = new Block(325,247,23,32);
    square9 = new Block(350,247,23,32);
    square10 = new Block(375,247,23,32);
    square11 = new Block(400,247,23,32);
    square12 = new Block(425,247,23,32);
    //stand2, row 3
    square13 = new Block(350,214,23,32);
    square14 = new Block(375,214,23,32);
    square15= new Block(400,214,23,32);
    //stand2, row 4
    square16 = new Block(375,181,23,32);


    //stand,row 1
    square17 = new Block (580,180,23,32);
    square18 = new Block(605,180,23,32);
    square19 = new Block(630,180,23,32);
    square20 = new Block(655,180,23,32);
    square21 = new Block(680,180,23,32);

    //stand,row 2
    square22 = new Block(605,147,23,32);
    square23 = new Block(630,147,23,32);
    square24 = new Block(655,147,23,32);

    //stand,row3
    square25 = new Block(630,114,23,32);



}

function draw() {
background(230);
text(mouseX+","+mouseY,10,45)
text("Drag the hexagonal Stone and Release it, to launch towards the blocks", 45,70)


imageMode(CENTER)
image(polyIMG, polygon.position.x,polygon.position.y,40,40)

slingShot.display();
stand.display();
stand2.display();
square1.display();
square2.display();
square3.display();
square4.display();
square5.display();
square6.display();
square7.display();
square8.display();
square9.display();
square10.display();
square11.display();
square12.display();
square13.display();
square14.display();
square15.display();
square16.display();
square17.display();
square18.display();
square19.display();
square20.display();
square21.display();
square22.display();
square23.display();
square24.display();
square25.display();


drawSprites();
}

function mouseDragged() {
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
















