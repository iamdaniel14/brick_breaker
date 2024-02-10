class Ball {
    constructor (){
      this.pos=createVector (width/2,height-100);
      this.vel =createVector (2,4);
      this.r =10;
      this.dir= createVector (2,1);
    }
  show (){
    circle (this.pos.x,this.pos.y, this.r*2);
  }
    update (){
      
      let angle= random (TWO_PI);
      this.pos.x+=this.vel.x*this.dir.x +cos(angle);
      this.pos.y+=this.vel.y*this.dir.y +sin (angle);
    }
      meets (paddle){
        if (this.pos.x>paddle.pos.x-this.r && this.pos.x <paddle.pos.x+paddle.w+this.r && this.pos.y >paddle.pos.y -this.r  && this.pos.y< paddle.pos.y) {
          return true;
        } 
      }
    edges (life){
      if (this.pos.x >width-this.r) {
        
        this.dir.x *=-1;
      } else if (this.pos.x<this.r){
        this.dir.x *=-1;
      } 
       else if (this.pos.y <this.r){
        this.pos.y *=-1;
      } 
      
       
    }

  }