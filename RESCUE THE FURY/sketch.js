

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,Hospital,Home;
var launchingForce=100;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
Home=new home();
Hospital=new hospital();
car=new Car(200,200);
cat=new Cat(150,150);
cat1 =new Cat(400,150);
cat2 =new Cat (200,150);
cat3 =new Cat (90,350);
cat4 =new Cat (500,350);
cat5 =new Cat (800,350);
cat6 =new Cat (1000,350);

	Engine.run(engine);

}

function draw() {

  background("red");
 Home.display();
 Hospital.display();
 car.display();
 cat.display();
 cat1.display();
 cat2.display();
 cat3.display();
 cat4.display();
 cat5.display();
 cat6.display();
}

