
let paddle;
let ball ;
let cols;
let rows;
let scl=20;
let bricks=[];
let life =5;
let score=0;
let button;
let level=1;
let isGoing=false;


function setup() {
let canvas=createCanvas(windowWidth*0.3, windowHeight*0.8);
canvas.parent ('canvas-container');
button=select('#button');
button.mousePressed(refreshed);


 cols=(width/scl);
 rows= (height *0.5)/scl;
   for (let i=0; i<=cols; i++) { 
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
  paddle.edges ();
  ball.show ();
  if(isGoing) ball .update (); 
 if (isGoing) paddle.update ();
  
  
  
 
  ball.edges ();
  if (ball.pos.y<=height+ball.r && ball.pos.y>=height ) {
  life--;
 ball.pos.set(random(width),height*0.7);

if (life==0) {

    push ()
    fill ('red');
    textAlign(CENTER);
    textSize (80);
   isGoing=false;
   text ('GAME OVER',width/2,height*0.6);
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
      if (score==10) {
        push ()
        fill ('red');
        textAlign(CENTER);
        textSize (80);
        text ('YOU WIN',width/2,height*0.6);
        // noLoop()
        pop()
      }

      level=2;

      }
    }
   

       }
       document.querySelector('#score').innerHTML=score;
       document.querySelector('#life').innerHTML=life;
       document.querySelector('#level').innerHTML=level;
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
 case ENTER: 
  isGoing=true; 
  break;
  }
}
function keyReleased () {
  paddle.isMovingRight =false;
  paddle.isMovingLeft =false;
} 


function refreshed (){
  window.location.reload()
}
