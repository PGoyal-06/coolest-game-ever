class Enemy{

constructor(){
this.eSprite = createSprite(200,200);
this.eHealth = 200;
this.eSprite.addImage(enemyImg);    
this.eSprite.scale = 2;

}


emove(){

  var rand = Math.round(random(1,8));
 if(frameCount%50===0){
     
     if((rand===1 || rand===2 || rand===3)&& this.eSprite.x>0){
        this.eSprite.x =  this.eSprite.x -10  ;
     }
     else if(this.eSprite.x<700){
        this.eSprite.x =  this.eSprite.x +20  ;
     }
   }   
 var rand2 = Math.round(random(3,10));
 if(frameCount%50===0){
 if((rand2===3 || rand2===4 || rand2===5 || rand2===6)&& this.eSprite.y>100){
    this.eSprite.y = this.eSprite.y - 20;
 }
 else if(this.eSprite.y<220){
    this.eSprite.y = this.eSprite.y + 12;
 }   
 }
}

efight(){
var rand = Math.round(random(10,25));
if(frameCount%30===0){
 if(rand<=17){
this.eSprite.addImage(enemyPunching);
enemyFightStatus = "Punch";
 } 
 else{
 this.eSprite.addImage(enemyKicking);   
 enemyFightStatus = "Kick";
 } 
 if(frameCount%60===0){
 setInterval(()=>{
  this.eSprite.addImage(enemyImg);  
  enemyFightStatus = "Standing";
 },1000);
}   
}
}
}