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
  totalScore = 0;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;
}
newGame();

// function playAgainBtn() {
//   $('<button id="play-again">PLAY AGAIN</button>').appendTo(".playBtn");

// };

// $(".playBtn button").click(newGame);
// $("#play-again").on('click', function(){
//   console.log("botton workig?")
//   newGame();
// });

function youWin() {
  alert("You win!");
  wins += 1;
  document.getElementById("wins").innerHTML = `${wins}`;
  newGame();
}

function youLoose() {
  alert("You lost! Try again!");
  // console.log(totalScore);
  // document.getElementById("totalScore").innerHTML = `You Lose!!!`;
  losses += 1;
  document.getElementById("losses").innerHTML = `${losses}`;
  // alert(`${totalScore}`);
  newGame();
  // playAgainBtn();
}

// Eventually this will allow us to change the HTML to match the value in the JavaScript.
document.getElementById("totalScore").innerHTML = `${totalScore}`;

// Here we created an on-click event that responds to button clicks of the crystal image.
$(".card-body1").on("click", function() {
  totalScore += card1num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;

  if (totalScore === goalNumber) {
    // whatever happens when you win
    youWin();
  }
  // If the user's counter ever exceeds the targetNumber...
  else if (totalScore > goalNumber) {
    youLoose();
  }
});

$(".card-body2").on("click", function() {
  //   alert("You random crystal BLACK number is " + card2num + "!");
  totalScore += card2num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;

  if (totalScore === goalNumber) {
    // whatever happens when you win
    youWin();
  } else if (totalScore >= goalNumber) {
    youLoose();
  }
});

$(".card-body3").on("click", function() {
  //   alert("You random crystal WHITE number is " + card3num + "!");
  totalScore += card3num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;

  if (totalScore === goalNumber) {
    youWin();
  } else if (totalScore >= goalNumber) {
    youLoose();
  }
});

$(".card-body4").on("click", function() {
  //   alert("You random crystal PURPLE number is " + card4num + "!");
  totalScore += card4num;
  document.getElementById("totalScore").innerHTML = `${totalScore}`;
  if (totalScore === goalNumber) {
    youWin();
  } else if (totalScore >= goalNumber) {
    youLoose();
  }
});
