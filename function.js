function keyPressed (){
    switch (keyCode){
    case RIGHT_ARROW:
    paddle.isMovingRight=true;
      break;
      case LEFT_ARROW:  
     paddle.isMovingLeft=true;
     break;   
   case ENTER: 
    isGoing=true; 
    gameIsPlaying=true;
    break;
    }
  }
  
  
  function keyReleased () {
    paddle.isMovingRight =false;
    paddle.isMovingLeft =false;
  } 
  
  
  function refreshed (){
    window.location.reload();
  }
  
   function continueLoop () {
  
    //if the game is not won the player can continue to play until the chances are over
   if(!youWin && youLose && chances>=1) {
    loop ();
    isGoing=true;
    life=5;
  }
   if (youWin && score>=levelTwo){ 
    isGoing=true;
    level=2;
    loop ();
  }  
  if (youWin&& score>=levelThree) {
    isGoing=true;
    level=3;
  
  }
   }
  function stopTheGame (){
    if(!gameIsPlaying && chances>=1 && youLose ) {
    isGoing=true;
    gameIsPlaying=true;
    life=5;
   loop ();
    } 
    if (gameIsPlaying && chances>=1 && youLose ) {
        isGoing=false;
        gameIsPlaying=false;
    //  noLoop();
    }
  } 
   
  
  
  
  
  
  