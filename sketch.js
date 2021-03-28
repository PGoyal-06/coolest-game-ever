var enemyImg, playerImg, playerKickImg, playerPuchImg,enemyKicking, enemyPunching;
var playerFightStatus;
var gameoverImg, restartImg
var backgroundImg
var gameState = "play";
var enemyFightStatus;
var roundNumber = 1;
var playerWinCount = 0 , enemyWinCount = 0;



function preload() {

enemyImg = loadImage("monster.png");
playerImg = loadImage("player.png");
playerKickImg = loadImage("playerkicking.png");
playerPunchImg = loadImage("playerPunching.png");
enemyPunching = loadImage("monsterPunching.png");
enemyKicking = loadImage("monsterKicking.png");
restartImg = loadImage("restart.png");
gameoverImg = loadImage("gameover.jpg");
backgroundImg = loadImage("background.jpg");

}


function setup() {
createCanvas(800,400);
  

enemy = new Enemy();
player = new Player();

gameOver = createSprite(400,150);
restart = createSprite(400,250);
gameOver.addImage(gameoverImg);
gameOver.scale = 0.1;
restart.addImage(restartImg);

gameOver.visible=false;
restart.visible = false;
}

function draw() {
  background(backgroundImg); 
  
  if(gameState==="play"){

  player.Kick();
  player.punch();
  player.move();

  enemy.emove();
  enemy.efight();

  //enemy.eSprite.collide(player.pSprite);
  enemyhealthControl(); 
  healthControl();
  
  if(player.pHealth<=0 || enemy.eHealth<=0){
    gameState = "end";
    if(enemy.eHealth<=0){
     playerWinCount = playerWinCount + 1; 
    }
    if(player.pHealth<=0){
      enemyWinCount = enemyWinCount + 1;
    }
  }

}else if(gameState==="end"){
 
  
  restart.visible = true;
  player.pSprite.addImage(playerImg);
  enemy.eSprite.addImage(enemyImg); 
  player.pSprite.x = 600; 
  player.pSprite.y = 200;
  enemy.eSprite.x = 200;
  enemy.eSprite.y = 200;
  push();
  textSize(30);
  strokeWeight(4);
  if(enemy.eHealth<=0 && playerWinCount<2){
    fill("purple");
    text("YOU WIN THIS ROUND", 300,100);
    //playerWinCount = playerWinCount + 1;
  }
  if(player.pHealth<=0 && enemyWinCount<2){
    fill("red");
    text("YOU LOSE THIS ROUND", 300,50);
    //enemyWinCount = enemyWinCount + 1;
    }
    fill("green")
    if(playerWinCount===2){
      text("YOU WIN THE MATCH", 300, 300)
      gameOver.visible=true;
     
    }
    if(enemyWinCount===2){
      text("YOU LOSE THE MATCH", 300,300)
      gameOver.visible=true;
     
    }
   pop();
}
textSize(30);
fill("orange");
text("Player Health:" + Math.round(player.pHealth), 500,50);
text("Enemy Health:" +Math.round(enemy.eHealth), 50,50);
text("roundNumber:" + roundNumber, 570,400)
if(gameState==="end" && mousePressedOver(restart) && roundNumber===1){

 gameState="play";
 console.log("play");
 gameOver.visible=false;
  restart.visible = false;
player.pHealth = 200;
enemy.eHealth = 200;
roundNumber = 2;
}
if(gameState==="end" && mousePressedOver(restart) && roundNumber===2){

  gameState="play";
  console.log("play");
  gameOver.visible=false;
   restart.visible = false;
 player.pHealth = 200;
 enemy.eHealth = 200;
 if(playerWinCount===2 || enemyWinCount===2){
  roundNumber = 1; 
  playerWinCount = 0;
  enemyWinCount = 0;
 }else{
 roundNumber = 3;
 }
 }
 if(gameState==="end" && mousePressedOver(restart) && roundNumber===3){

  gameState="play";
  console.log("play");
  gameOver.visible=false;
   restart.visible = false;
 player.pHealth = 200;
 enemy.eHealth = 200;
 roundNumber = 1;
 playerWinCount = 0;
 enemyWinCount = 0;
 }
  
drawSprites();
}

function healthControl(){
  if(player.pSprite.collide(enemy.eSprite)){
    if(playerFightStatus==="punch" && roundNumber===1){
      enemy.eHealth = enemy.eHealth - 5;
      console.log("EHealth "+enemy.eHealth );
    }
    if(playerFightStatus==="punch" && roundNumber===2){
      enemy.eHealth = enemy.eHealth - 4.5;
      console.log("EHealth "+enemy.eHealth );
    }
    if(playerFightStatus==="punch" && roundNumber===3){
      enemy.eHealth = enemy.eHealth - 4;
      console.log("EHealth "+enemy.eHealth );
    }
      if(playerFightStatus==="kick" && roundNumber===1){
        enemy.eHealth = enemy.eHealth - 8.5;
        console.log("EHealth "+enemy.eHealth );
    }
    if(playerFightStatus==="kick" && roundNumber===2){
      enemy.eHealth = enemy.eHealth - 7.5;
      console.log("EHealth "+enemy.eHealth );
  }
  if(playerFightStatus==="kick" && roundNumber===3){
    enemy.eHealth = enemy.eHealth - 6;
    console.log("EHealth "+enemy.eHealth );
}
}
}
function enemyhealthControl(){
  if(player.pSprite.isTouching(enemy.eSprite)){
    if(enemyFightStatus==="Kick" || enemyFightStatus==="Punch"){
      player.pHealth = player.pHealth- 9.5;
      console.log("PHealth "+player.pHealth );
      }
  }
}

