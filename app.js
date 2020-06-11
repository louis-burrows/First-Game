// the global variables

const moveHandCloser = document.getElementById("moveCloser");
const moveAway = document.getElementById("moveAway");
const hand = document.getElementById("hand");
const headPicture = document.getElementById("headpic");
const chanceOfFail = 0.3;



//This is a cascade of click events. After each click, if you have not been caught, then you can proceed to the next click. Until the risk becomes to great, and failure is guaranteed.

const moveCloser = () => {
  console.log("one Closer");
  hand.style.top = "400px"
  headPicture.src = "./images/head-normal.png"
  moveHandCloser.addEventListener( "click", secondMoveCloser );
  moveHandCloser.removeEventListener( "click", moveCloser );
};

const secondMoveCloser = () => {
  console.log("two Closer");
  if (Math.random() > chanceOfFail) {
    hand.style.top = "360px";
    moveHandCloser.addEventListener( "click", thirdMoveCloser );
    moveHandCloser.removeEventListener( "click", secondMoveCloser );
    console.log("lucky you") 
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", secondMoveCloser );
    headPicture.src = "./images/head-caught.png";
  }
 };

const thirdMoveCloser = () => {
  console.log("three Closer");
  if (Math.random() > chanceOfFail) { 
    hand.style.top = "300px";
    moveHandCloser.addEventListener( "click", fourthMoveCloser );
    moveHandCloser.removeEventListener( "click", thirdMoveCloser );
    console.log("lucky you") 
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", thirdMoveCloser );
    headPicture.src = "./images/head-caught.png";
  }
};

const fourthMoveCloser = () => {
  console.log("four Closer");
  if (Math.random() > chanceOfFail) {
    hand.style.top = "260px";
    moveHandCloser.addEventListener( "click", fifthMoveCloser );
    moveHandCloser.removeEventListener( "click", fourthMoveCloser );
    console.log("lucky you")
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", fourthMoveCloser );
    headPicture.src = "./images/head-caught.png";
  }
};

const fifthMoveCloser = () => {
  console.log("five Closer");
  if (Math.random() > chanceOfFail) {
    hand.style.top = "240px";
    moveHandCloser.addEventListener( "click", sixthMoveCloser );
    moveHandCloser.removeEventListener( "click", fifthMoveCloser );
    console.log("lucky you")
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", fifthMoveCloser );
    headPicture.src = "./images/head-caught.png";
  } 
};

const sixthMoveCloser = () => {
  console.log("you lose");
  hand.style.top = "400px";
  moveHandCloser.addEventListener("click", moveCloser);
  moveHandCloser.removeEventListener( "click", sixthMoveCloser );
  headPicture.src = "./images/head-caught.png";
};

const pullAway = () => {
 console.log("return to start");
 hand.style.top = "400px";
 headPicture.src = "./images/head-normal.png"
 moveHandCloser.removeEventListener( "click", moveCloser );
 moveHandCloser.removeEventListener( "click", secondMoveCloser );
 moveHandCloser.removeEventListener( "click", thirdMoveCloser );
 moveHandCloser.removeEventListener( "click", fourthMoveCloser );
 moveHandCloser.removeEventListener( "click", fifthMoveCloser );
 moveHandCloser.addEventListener("click", moveCloser);
};

moveHandCloser.addEventListener("click", moveCloser);
moveAway.addEventListener("click", pullAway);


