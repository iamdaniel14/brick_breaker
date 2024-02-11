
let paddle;
let ball ;
let cols;
let rows;
let scl=20;
let bricks=[];
let life =5;
let score=0;


function setup() {
let   canvas=createCanvas(windowWidth*0.3, windowHeight*0.8);
  canvas.parent ('canvas-container');
 cols= width/scl;
 rows= (height *0.5)/scl;
   for (let i=0; i<cols; i++) { 
   bricks[i]=[];
   for (let j=0; j<rows; j++) {
    
     
     let x=i*scl;
     let y=j *scl;

  bricks[i][j]=new Bricks (x,y);
  paddle= new Paddle ();
  ball =new Ball ();
   }
}}

function draw() {
  background(220);
  
  paddle.show ();
  paddle.update ();
  paddle.edges ();
  ball.show ();
  ball .update ();
  ball.edges ();

  if (ball.pos.y<=height+ball.r && ball.pos.y>=height ) {
    life--;

    ball.pos.set(random(width),random (height*0.7,height*0.8));

if (life<1) {

    push ()
    fill ('red');
    textAlign(CENTER);
    textSize (80);
    text ('GAME OVER',width/2,height*0.6)
    noLoop ()
   pop()

}

  }
  
  
  for (let i=0; i <cols; i++) {
    for (let j=0; j< bricks[i].length; j++) {
    
    bricks [i][j].show ();
    
    if (bricks[i][j].meets (ball)) {
      
      ball.dir.y*=-1;
      if ( bricks[i].splice (j,1) ){
        score++;

      if (score>200) {

        push ()
        fill ('red');
        textAlign(CENTER);
        textSize (80);
        text ('YOU WIN',width/2,height*0.6)
        noLoop ()

       pop()
      }

      }
     

    }
   

       }
       document.querySelector('#score').innerHTML=score;
       document.querySelector('#life').innerHTML=life;
  }
  if (ball.meets (paddle)) {
  ball.dir.y *=-1;
  }
  
}
function keyPressed (){
  
  switch (keyCode){
    
  case RIGHT_ARROW:
      
  paddle.isMovingRight=true;
     break;
    
    case LEFT_ARROW:
      
   paddle.isMovingLeft=true;
      
      break;
      
  }
  
  
  
  }

function keyReleased () {
  paddle.isMovingRight =false;
  
  paddle.isMovingLeft =false;
} 