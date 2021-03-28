class Player{

    constructor(){
    this.pSprite = createSprite(600,200);
    this.pHealth = 200;
    this.pSprite.addImage(playerImg);
    //this.pSprite.addImage("playerPunch",playerPuchImg);
    //this.pSprite.addImage("playerKick",playerKickImg);      
    this.pSprite.scale = 4;
      
    
    }
    
    Kick(){
    if(keyWentDown("a")){
    this.pSprite.addImage(playerKickImg); 
    playerFightStatus = "kick";
    
    }if(keyWentUp("a")){
    this.pSprite.addImage(playerImg);   
    playerFightStatus = "standing";    
    }    
    }

    punch(){
        if(keyWentDown("w")){
            this.pSprite.addImage(playerPunchImg);
            playerFightStatus = "punch";
        }
        if(keyWentUp("w")){
            this.pSprite.addImage(playerImg); 
            playerFightStatus = "standing";
        }
    }


    move(){
    if(keyDown("UP_ARROW")&& this.pSprite.y>100){
        this.pSprite.y=this.pSprite.y-5;   
    }   
    if(keyDown("Down_ARROW")&& this.pSprite.y<220){
        this.pSprite.y=this.pSprite.y+5;   
    } 
    if(keyDown("RIGHT_ARROW")&& this.pSprite.x<650){
        this.pSprite.x=this.pSprite.x+5;   
    }
    if(keyDown("LEFT_ARROW")&& this.pSprite.x>0){
        this.pSprite.x=this.pSprite.x-5;   
    }
    }
    }

