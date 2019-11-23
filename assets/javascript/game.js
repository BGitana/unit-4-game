// alert("Script Tags Work?");

// Initialize variables

var goalNumber = 0;
// id="goalNumber"
var losses = 0;
// class="losses"
var wins = 0;
// class="wins"
var totalScore = 0;
// id="totalScore"
var card1num = 0;
// id="card1"
var card2num = 0;
// id="card2"
var card3num = 0;
// id="card3"
var card4num = 0;
// id="card4"

// setting up a new game function
function newGame() {
  goalNumber = Math.floor(Math.random() * 100) + 19;
  // console.log(goalNumber);
  document.getElementById("goalNumber").innerHTML = `${goalNumber}`;

  card1num = Math.floor(Math.random() * 12) + 1;
  // console.log(card1);
  card2num = Math.floor(Math.random() * 12) + 1;
  // console.log(card2);
  card3num = Math.floor(Math.random() * 12) + 1;
  // console.log(card3);
  card4num = Math.floor(Math.random() * 12) + 1;
  // console.log(card4);
}
newGame();

// Eventually this will allow us to change the HTML to match the value in the JavaScript.
document.getElementById("totalScore").innerHTML = `${totalScore}`;

// Here we created an on-click event that responds to button clicks of the crystal image.
$(".card-body1").on("click", function() {
  // Clicking the button triggers an alert message.
  //   alert("You random crystal PINK number is " + card1num + "!");
  // Adding a caed1num value to the other Total Score
  totalScore += card1num;
  //   alert("New score: " + totalScore);
  document.getElementById("totalScore").innerHTML = `${totalScore}`;
  // setting conditional to compare total score and goal number
  if (totalScore === goalNumber) {
    // document.getElementById("wins").innerHTML = `${wins}`;
    alert("You win!");
    // Adding total numbers of of "wins" like in loops '++' this is '+=1'
    wins += 1;
    // resetting total score back to 0 after the win
    totalScore = 0;
    // printing updated wins om HTML
    document.getElementById("wins").innerHTML = `${wins}`;
    // printing updated Total Score om HTML
    document.getElementById("totalScore").innerHTML = `${totalScore}`;
    newGame();
  }
  // If the user's counter ever exceeds the targetNumber...
  else if (totalScore >= goalNumber) {
    // Then they are alerted with a loss.
    // document.getElementById("losses").innerHTML = `${losses}`;
    alert("You lose!! Try again!");
    // Adding total numbers of of "losses" like in loops '++' this is '+=1'
    losses += 1;
    // resetting total core back to 0 after the loss
    totalScore = 0;
    // printing updated wins om HTML
    document.getElementById("losses").innerHTML = `${losses}`;
    // printing updated Total Score om HTML
    document.getElementById("totalScore").innerHTML = `${totalScore}`;

    newGame();
  }
});


$(".card-body2").on("click", function() {
  //   alert("You random crystal BLACK number is " + card2num + "!");
  totalScore += card2num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;

  if (totalScore === goalNumber) {
    alert("You win!");
    wins += 1;
    totalScore = 0;
    document.getElementById("wins").innerHTML = `${wins}`;
    document.getElementById("totalScore").innerHTML = `${totalScore}`;
    newGame();
  } else if (totalScore >= goalNumber) {
    alert("You lose!!");
    losses += 1;
    totalScore = 0;
    document.getElementById("losses").innerHTML = `${losses}`;
    document.getElementById("totalScore").innerHTML = `${totalScore}`;

    newGame();
  }
});

$(".card-body3").on("click", function() {
  //   alert("You random crystal WHITE number is " + card3num + "!");
  totalScore += card3num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;

  if (totalScore === goalNumber) {
    alert("You win!");
    wins += 1;
    totalScore = 0;
    document.getElementById("wins").innerHTML = `${wins}`;
    document.getElementById("totalScore").innerHTML = `${totalScore}`;
    newGame();
  } else if (totalScore >= goalNumber) {
    alert("You lose!!");
    losses += 1;
    totalScore = 0;
    document.getElementById("losses").innerHTML = `${losses}`;
    document.getElementById("totalScore").innerHTML = `${totalScore}`;

    newGame();
  }
});

$(".card-body4").on("click", function() {
  //   alert("You random crystal PURPLE number is " + card4num + "!");
  totalScore += card4num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;
  if (totalScore === goalNumber) {
    alert("You win!");
    wins += 1;
    totalScore = 0;
    document.getElementById("wins").innerHTML = `${wins}`;
    document.getElementById("totalScore").innerHTML = `${totalScore}`;
    newGame();
  } else if (totalScore >= goalNumber) {
    alert("You lose!!");
    losses += 1;
    totalScore = 0;
    document.getElementById("losses").innerHTML = `${losses}`;
    document.getElementById("totalScore").innerHTML = `${totalScore}`;

    newGame();
  }
});
