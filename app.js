// the global variables

const moveHandCloser = document.getElementById("moveCloser");
const moveAway = document.getElementById("moveAway");
const hand = document.getElementById("hand");
const chanceOfFail = 0.3;



//This is a cascade of click events. After each click, if you have not been caught, then you can proceed to the next click. Until the risk becomes to great, and failure is guaranteed.

const moveCloser = () => {
 console.log("one Closer");
 console.log("you can have this one for free")
 hand.innerHTML = "hand";
 hand.style.backgroundColor = "red";
 moveHandCloser.addEventListener( "click", secondMoveCloser );
 moveHandCloser.removeEventListener( "click", moveCloser );
};

const secondMoveCloser = () => {
  console.log("two Closer");
  if (Math.random() > chanceOfFail) {
    hand.style.backgroundColor = "blue";
    moveHandCloser.addEventListener( "click", thirdMoveCloser );
    moveHandCloser.removeEventListener( "click", secondMoveCloser );
    console.log("lucky you") 
  } else {
  sixthMoveCloser();
  moveHandCloser.removeEventListener( "click", secondMoveCloser );
  }
 };

const thirdMoveCloser = () => {
  console.log("three Closer");
  if (Math.random() > chanceOfFail) { 
    hand.style.backgroundColor = "yellow";
    moveHandCloser.addEventListener( "click", fourthMoveCloser );
    moveHandCloser.removeEventListener( "click", thirdMoveCloser );
    console.log("lucky you") 
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", thirdMoveCloser );
  }
};

const fourthMoveCloser = () => {
  console.log("four Closer");
  if (Math.random() > chanceOfFail) {
    hand.style.backgroundColor = "orange";
    moveHandCloser.addEventListener( "click", fifthMoveCloser );
    moveHandCloser.removeEventListener( "click", fourthMoveCloser );
    console.log("lucky you")
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", fourthMoveCloser );
  }
};

const fifthMoveCloser = () => {
  console.log("five Closer");
  if (Math.random() > chanceOfFail) {
    hand.style.backgroundColor = "green";
    moveHandCloser.addEventListener( "click", sixthMoveCloser );
    moveHandCloser.removeEventListener( "click", fifthMoveCloser );
    console.log("lucky you")
  } else {
    sixthMoveCloser();
    moveHandCloser.removeEventListener( "click", fifthMoveCloser );
  } 
};

const sixthMoveCloser = () => {
  console.log("you lose");
  document.getElementById("hand").style.backgroundColor = "palegoldenrod";
  document.getElementById("hand").innerText = "starting place";
  moveHandCloser.addEventListener("click", moveCloser);
  moveHandCloser.removeEventListener( "click", sixthMoveCloser );
};

const pullAway = () => {
 console.log("return to start");
 document.getElementById("hand").style.backgroundColor = "palegoldenrod";
 document.getElementById("hand").innerText = "starting place";
 moveHandCloser.removeEventListener( "click", moveCloser );
 moveHandCloser.removeEventListener( "click", secondMoveCloser );
 moveHandCloser.removeEventListener( "click", thirdMoveCloser );
 moveHandCloser.removeEventListener( "click", fourthMoveCloser );
 moveHandCloser.removeEventListener( "click", fifthMoveCloser );
 moveHandCloser.addEventListener("click", moveCloser);
};

moveHandCloser.addEventListener("click", moveCloser);
moveAway.addEventListener("click", pullAway);


