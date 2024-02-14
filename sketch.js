
let paddle;
let ball ;
let cols;
let rows;
let scl=20;
let bricks=[];
let life =5;
let score=0;
let newGame;
let level=1;
let gameIsPlaying=false;
let youWin=false;
let youLose=false;
let chances =5;
let levelTwo=100;
let levelThree=200;


function setup() {
let canvas=createCanvas(windowWidth*0.3, windowHeight*0.8);
canvas.parent ('canvas-container');
newGame=select('#new-game');
newGame.mousePressed(refreshed);
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
 let buttonContinue=select('#continue');
 buttonContinue.mousePressed(continueLoop);
 let buttonStop=select('#stop');
 buttonStop.mousePressed(stopTheGame);
  paddle.show ();
  paddle.edges ();
  ball.show ();
  ball.edges ();
  if (gameIsPlaying)  {
  ball.update (); 
  } 
  if (gameIsPlaying) {
  paddle.update ();
  } 
 
  if (ball.pos.y<=height+ball.r && ball.pos.y>=height ) {
  life--;
 ball.pos.set(random(width),height*0.7);
 }
if (life<=0) {
    push ()
    fill ('red');
    textAlign(CENTER);
    textSize (80);
    text ('GAME OVER',width/2,height*0.7);
    youWin=false;
    gameIsPlaying=false;
    youLose=true;
   gameIsPlaying=false;
     chances--;
    noLoop();
    pop()
}

 
  for (let i=0; i <cols; i++) {
  for (let j=0; j< bricks[i].length; j++) {
    bricks [i][j].show ();
    if (bricks[i][j].meets (ball)) {
      ball.dir.y*=-1;
      if ( bricks[i].splice (j,1) ){
        score++;
      if (score===levelTwo) {
        push ()
        fill ('red');
        textAlign(CENTER);
        textSize (80);
        text ('YOU WIN',width/2,height*0.7);
        youWin=true;
        gameIsPlaying=false;
        chances++;
         noLoop();
        pop()
      } else if (score===levelThree) {
        push ()
        fill ('red');
        textAlign(CENTER);
        textSize (80);
        text ('YOU WIN',width/2,height*0.7);
        youWin=true;
        gameIsPlaying=false;
        chances++;
        noLoop();
        pop();
      }

      }
    }
       }
       document.querySelector('#score').innerHTML=score;
       document.querySelector('#life').innerHTML=life;
       document.querySelector('#level').innerHTML=level;
       document.querySelector('#chances').innerHTML=chances;
       if (!gameIsPlaying) {
        document.querySelector('#stop').innerHTML='play';
       } 
       if  (gameIsPlaying){
        document.querySelector('#stop').innerHTML='stop';
       }
      }
      if (ball.meets(paddle)) {
       ball.dir.y *=-1;
     }
  
    }
