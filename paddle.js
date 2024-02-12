class Paddle {
    constructor (){
      this.w=100;
      this.h =20;
      this.pos= createVector (width/2,height-this.h);
      this.isMovingLeft =false;
      this.isMovingRight =false;
    }
    
    show (){
      push ()
      noStroke ();
      fill ('#D4CB92')
      rect (this.pos.x,this.pos.y, this.w,this.h)
      pop ()
      
    }
    
    move (steps) {
      this.pos.x+=steps;
    }
    
    update (){
      
      if (this.isMovingRight) {
        this.move (20);
      } else if (this.isMovingLeft) {
        this.move (-20);
      }
      
    }
    
    edges (){
      

    if (this.pos.x >width-this.w){
      this.pos.x= width-this.w;
    } else if (this.pos.x <0){
      this.pos.x=0;
    
    }}
    
    
    
  }