class Ball {
    constructor (){
      this.pos=createVector (width/2,height-100);
      this.vel =createVector (2,4);
      this.r =10;
      this.dir= createVector (1,1);
      this.angle=random(TWO_PI);
    }
  show (){
    push ();
    noStroke();
    fill ('#80A4ED')
    circle (this.pos.x,this.pos.y, this.r*2);
     pop ()
  }
    update (){
      this.pos.x+=this.vel.x*this.dir.x
      this.pos.y+=this.vel.y*this.dir.y 
      
    }
      meets (paddle){
      if(this.pos.x>=paddle.pos.x-this.r && this.pos.x <paddle.pos.x+paddle.w+this.r && this.pos.y>paddle.pos.y -this.r  && this.pos.y<paddle.pos.y) {
        return true;
        } 
      }
    edges (){
      if (this.pos.x >width-this.r) {
        this.dir.x *=-1;
      } else if (this.pos.x<this.r){
        this.dir.x *=-1;
      } 
       else if (this.pos.y <=this.r){
        this.dir.y*=-1;
      }  
    }

  }