const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig, pig2;
var tronco, tronco2, tronco3, tronco4;
var bird

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig = new Pig(810,350);
    tronco = new Log(810,260,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    pig2 = new Pig(810,220);
    tronco2 = new Log(810,180,300,PI/2);
    tronco3 = new Log(760,120,150,PI/7);
    tronco4 = new Log(870,120,150,-PI/7);
    bird = new Bird(100,100);
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    tronco.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    bird.display();
}