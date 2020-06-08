//tile 1 has 0% risk
//tile 2 has 20% risk
//tile 3 has 40% risk
//tile 4 has 60% risk
//tile 5 has 80% risk
//tile 6 has 100% risk

//grab the hand element
const moveLeft = () => {
 console.log("left");
 document.getElementById("hand").style.backgroundColor = "red";
};

const moveRight = () => {
 console.log("right")
 document.getElementById("hand").style.backgroundColor = "green";
};
//make the hand element move