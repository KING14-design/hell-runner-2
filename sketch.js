
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var HellBoy
var boyrunning
var Background,BGImg
var PlayButton
var gameState=0
function preload()
{
BGImg=loadImage("Images/BG3.gif")
BGImg2=loadImage("Images/BG1.gif")
boyrunning=loadAnimation("Images/h1.png","Images/h2.png","Images/h3.png","Images/h4.png")	
}

function setup() {
	createCanvas(displayWidth,displayHeight );
  Background=createSprite(width/2,height/2,displayWidth,displayHeight)
  Background.addImage(BGImg)
  Background.scale=3
PlayButton=createButton("PLAY!")
PlayButton.position(displayWidth/2+100,height-400)
PlayButton.style("width","100px")
PlayButton.style("height","50px")
PlayButton.style("background","white")
	engine = Engine.create();
	world = engine.world;
HellBoy=createSprite(100,displayHeight-100,10,10)
HellBoy.addAnimation("running",boyrunning)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  drawSprites();
  if(gameState===0){
    background(BGImg);
    fill("White")
    textSize(50)
    text("HELL RUNNER",width/2,100)
    text("Rules:",width/2-500,height/2-300)
    text("1:",width/2-500,height/2-250)
  }
  
  PlayButton.mousePressed(()=>{
    gameState=1
    PlayButton.hide()
    
  })
  if(gameState===1){
    Background.addImage(BGImg2)
    Background.velocityX=-3
    console.log(Background.x)
    if(Background.x<500){
      Background.x=width/2
    }
  }
  
 
}



