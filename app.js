//tile 1 has 0% risk
//tile 2 has 20% risk
//tile 3 has 40% risk
//tile 4 has 60% risk
//tile 5 has 80% risk
//tile 6 has 100% risk

//grab the hand element
//make the hand element move

const leftButton = document.getElementById("leftButton");


//This is an attempt at a cascade of changing onclick Events, but doesn't work

const moveLeft = () => {
 console.log("one left");
 leftButton.style.backgroundColor = "red";
 leftButton.addEventListener( "click", secondMoveLeft );
 leftButton.removeEventListener( "click", moveLeft );
};

const secondMoveLeft = () => {
  console.log("two left");
  leftButton.style.backgroundColor = "blue";
  leftButton.addEventListener( "click", thirdMoveLeft );
 };

const thirdMoveLeft = () => {
  console.log("three left");
  leftButton.style.backgroundColor = "yellow";
  leftButton.addEventListener( "click", fourthMoveLeft );
};

const fourthMoveLeft = () => {
  console.log("four left");
  leftButton.style.backgroundColor = "orange";
  leftButton.addEventListener( "click", fifthMoveLeft );
};

const fifthMoveLeft = () => {
  console.log("five left");
  leftButton.style.backgroundColor = "yellow";
  leftButton.addEventListener( "click", sixthMoveLeft );
};

const sixthMoveLeft = () => {
  console.log("you lose");
};

const moveRight = () => {
 console.log("right");
 document.getElementById("hand").style.backgroundColor = "green";
};

leftButton.addEventListener("click", moveLeft);


//probability of a function happening at different stages

const twentyPercent = 0.2; 
const fortyPercent = 0.4;
const sixtyPercent = 0.6;
const eightyPercent = 0.8;
let randomPercentage = Math.random();

const movedOne = () => {
  if (randomPercentage > twentyPercent) {
  alert("you are still safe");
  } else {
  alert("you have been caught");
  };
};

const movedTwo = () => {
  if (randomPercentage > twentyPercent) {
  alert("you are less safe")
  } else {
  alert("you have been caught");
  };
};

const movedThree = () => {
  if (randomPercentage > fortyPercent) {
  alert("you are even less safe")
  } else {
  alert("you have been caught");
  };
};

const movedFour = () => {
  if (randomPercentage > sixtyPercent) {
  alert("you are risking much")
  } else {
  alert("you have been caught");
  };
};

const movedFive = () => {
  if (randomPercentage > eightyPercent) {
  alert("it is not wise to go further")
  } else {
  alert("you have been caught");
  };
};


// // how to decipher the position of an element on the page, to trigger each of the above functions
// //OR
// //how to trigger a different function for each successive press of the same button

// //***each call of the function rewrites the function associated with the hand
// document.getElementById('hand').setAttribute( "onClick", "secondMoveLeft" );