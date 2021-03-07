var start = 0, play = 1, end = 2,win = 4 , begin = 5;
var gameState = start;
var obstacle = [];
var player;
var ground;
var obstacleSpeed;
var bug
var finishDistance = 1000;
function setup()
{
  createCanvas(400, 400);
  player = createSprite(40,40,30,30);
  player.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png");
  ground = createSprite(10,390,400,10);
  ground.shapeColor = "red";
  bug = createSprite( finishDistance , 370, 40 ,40 );
  bug.addAnimation("sprite_13.png","sprite_14.png","sprite_15.png","sprite_16.png");
  
}

function draw()
{
  startGame();
  beginGame();
  playGame();
  endGame();
  winGame();
}

function keyPressed(){
  if(keyDown("space")){
    player.velocityY = -12;  
  
  }  
}

function createHeading(){
  var heading = createElement("h1");
  heading.html(" SPACE JUMPERS ");
  heading.position(75, 20);
}

function createHe(){
  var he = createElement('h2');
  he.html(" Choose A Level ");
  he.position(75, 50);
}

  function createStartButton(){
    var startButton = createButton(" START ");
    startButton.position(165, 200);
    startButton.mousePressed(() =>
    {
      removeElements();
      frameCount = 0;
      player.destroy();
      setup();
      gameState = begin;
    })
  }

  function level1Functionality(){
    var ll1 = createButton(" Level 1 ");
    ll1.position(120, 200);
    ll1.mousePressed(()=>
    {
      for(var i = 0; i<obstacle.length; i++){
      obstacle[i].destroy();
      }
      gameState = play;
      removeElements();
      player.destroy();
      obstacleSpeed = -2;
      setup(); 
    })
  
  }

  function level2Functionality(){
    var ll2 = createButton(" Level 2 ");
    ll2.position(120, 250);
    ll2.mousePressed(()=>
    {
      for(var i = 0; i<obstacle.length; i++){
      obstacle[i].destroy();
      }
      gameState = play;
      removeElements();
      player.destroy();
      obstacleSpeed = -4;
      setup(); 
    })
  }

  function level3Functionality(){
    var ll3 = createButton(" Level 3 ");
    ll3.position(200, 200);
    ll3.mousePressed(()=>
    {
      for(var i = 0; i<obstacle.length; i++){
      obstacle[i].destroy();
      }
      gameState = play;
      removeElements();
      player.destroy();
      obstacleSpeed = -6;
      setup(); 
    })
  }

  function level4Functionality(){
    var ll4 = createButton(" Level 4 ");
    ll4.position(200, 250);
    ll4.mousePressed(()=>
    {
      for(var i = 0; i<obstacle.length; i++){
      obstacle[i].destroy();
      }
      gameState = play;
      removeElements();
      player.destroy();
      obstacleSpeed = -8;
      setup(); 
    })
  }

function creatingAlienKiller(){
  for(var i = 0; i < obstacle.length; i++){
    obstacle[i].collide(ground);
    obstacle[i].velocityX = obstacleSpeed;
    obstacle[i].velocityY = 0.8;
    obstacle[i].addAnimation("sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
    if(player.collide(bug)){
      gameState = win;
      console.log(gameState);
      
    }
    // if(player.collide(obstacle[i])){
      //obstacle[i].destroy();
      //player.destroy();
      //gameState = end;
      //console.log(gameState);
    //}
  }
}

function endText(){
  var he = createElement('h2')
  he.html("game over. Better luck next time :)");
  he.position(50,100);
}

function returnButton(){
  var returnButton = createButton("RETURN");
  returnButton.position(200,200)
  returnButton.mousePressed(()=>{
    removeElements();
    gameState = start;  
  })
}

function startGame(){
  if(gameState === start)
  {
    background(255, 0, 0)  
    createHeading();
    createStartButton();
  }
}

function beginGame(){
  if(gameState === begin)
  {
    background(0, 255, 0);
    createHe();
    level1Functionality();
    level2Functionality();
    level3Functionality();
    level4Functionality();
  }
}

function playGame(){
  if(gameState == play){
    ground.x = player.x;
    background("purple");
    player.velocityX = 4;
    player.velocityY = player.velocityY + 0.8
    player.collide(ground);
    camera.position.x = player.x;
    camera.position.y = player.y;
    drawSprites();
    if(frameCount % 100 == 0 ){
      obstacle.push(createSprite(player.x + 200,350,40,40));
    }
    creatingAlienKiller();
  }
}
function endGame(){
  if(gameState == end){
    background("green")
    endText();
    console.log("u lost");
    returnButton();
  }
}

function winGame(){
  if(gameState == win){
    background("pink");
    player.destroy();
    bug.destroy();
    ground.destroy();
    for(var i = 0 ; i<obstacle.length; i++){
      obstacle[i].destroy();
    }
    var heading = createElement("h3");
    heading.html("Congrats!!!! YOU WON!!!! :)")
    heading.position(50,100)
    returnButton();
  }
}