
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;


// Hi , there are 5 hints numbered from 1) to 5) in this sketch.js file , 
//find them and fill in the blanks to complete the animation/game
// you may add your own additional creativity as well . 
// all the best :)


function preload(){
  boy=loadImage("images/boy.png");
  tree= loadImage("images/tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
  mango3=new mango(1010,140,30);
  
	//1)create a few more mangos , give x and y value such that it looks like mango is on the tree image
 //create atlest 5 more mangos.
 //uncomment line number 47 and run code,to see the x and y position of any point on canvas










	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  
	
	Engine.run(engine);

}

function draw() {

  background(230);
 
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  image (tree,780,0, 500 , 630 )
  //text(mouseX +","+mouseY, mouseX, mouseY);

  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  //2) write code to display all the mango objects you have created.



  groundObject.display();
  launcherObject.display();
  dropMango(mango1);
  dropMango(mango2);
  dropMango(mango3);

//3)write code for all the mangos to drop from tree, when stone hits it
  



}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 

    
  //4)write the code to attach the stone back to launcher object to get another chance to drop mangos
  //hint:1 line code,you need to call the attach function defined in launcher class on the stoneOject body
  


	}
  }

  function dropMango(mangoArgument){

  mangoBodyPosition=mangoArgument.body.position
  stoneBodyPosition=stoneObj.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=mangoArgument.r+stoneObj.r)
    {
//5)write the code to set the isStatic attribute of the body of the mango to false , so that it drops down
// you will have to use the setStatic function in Matter.Body module.
// in the same way you used it to make the packageBody fall	down when down arrow pressed in supply mission project  



    }

  }