
class Bricks {
    constructor (x,y){
    this.pos=createVector (x,y);
    this.w=scl*0.9;
    this.h =scl*0.9;
    }
  
  show (){
    push ();
   fill ('#395C6B') 
   rect (this.pos.x, this.pos.y, this.w,this.h);
  pop ()
     
  }
    
    //checking the collision between the ball and bricks
    meets (ball){
     if (ball.pos.x> this.pos.x-ball.r && ball.pos.x <this.pos.x+this.w+ball.r &&  ball.pos.y>this.pos.y+this.h && ball.pos.y <this.pos.y +this.h +ball.r){
      return true;
     }else if (ball.pos.x>this.pos.x-ball.r && ball.pos.x <this.pos.x+this.w+ball.r && ball.pos.y >this.pos.y -ball.r  && ball.pos.y< this.pos.y) {
        
       return true;
      } else if (ball.pos.x> this.pos.x -ball.r && ball.pos.x< this.pos.x && ball.pos.y >this.pos.y && ball.pos.y < this.pos.y +this.h ){
        
        return true;
      } else if (ball.pos.x> this.pos.x +this.w && ball.pos.x< this.pos.x +this.w +ball.r && ball.pos.y >this.pos.y && ball.pos.y < this.pos.y +this.h) {
       return true;
      }
    }
  
   
    
  
  
  }