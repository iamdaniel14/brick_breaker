


let paddle;
let ball ;
let cols;
let rows;
let scl=20;
let bricks=[];

function setup() {
  createCanvas(900, 900);
  
  
  
  
 
 cols= width/scl;
 rows= (height *0.5)/scl;
  
  console.log (cols)
 
   for (let i=0; i<cols; i++) { 
     
       bricks[i]=[];
   for (let j=0; j<rows; j++) {
    
     
     let x=i*scl;
     let y=j *scl;
     
     // let obj= { x:i*scl,y:j *scl};
     
     bricks[i][j]=new Bricks (x,y);
       
    
   //bricks.push ();
      
       
  
  
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
  
  
  
  
  
  
  for (let i=0; i <cols; i++) {
    for (let j=0; j< bricks[i].length; j++) {
    
    bricks [i][j].show ();
    
    if (bricks[i][j].meets (ball)) {
      
      ball.dir.y *=-1;
      //console.log ('meets');
      bricks[i].splice (j,1);
      
      
    }
    
    
       }
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