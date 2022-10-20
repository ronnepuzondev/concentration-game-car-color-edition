/*----- constants -----*/

const images = document.querySelectorAll(".front");
const btn = document.querySelector("#playButton");
const hiddenImages = document.querySelectorAll(".front img");
const shuffleImages = document.querySelectorAll(".image");
const howManyClicks = document.querySelector(".clicks span")
const scoreTracker = document.querySelector(".score");
const winningFlag = document.querySelectorAll(".front")

/*----- state variables -----*/

let selectedImages = [0];
let playerScore = 0;
let hideAllTheImages = [];
let clickCounter = 0

/*----- cached elements  -----*/

/*----- event listeners -----*/

restartGame();
handleClick();

function handleClick() {
  hiddenImages.forEach(function (image) {
    image.addEventListener("click", function () {
      clickCounter += 1
      howManyClicks.innerText = clickCounter
      hideAllTheImages.push(image);
      let data = parseInt(image.dataset.index);
      selectedImages.push(data);
      image.style.opacity = "1";
      checkWinner();
    });
  });
} 

/*----- functions -----*/

function checkWinner() {
  if (selectedImages[1] === selectedImages[2]) {
    console.log("winner!");
    selectedImages = [0];
    hideAllTheImages = [];
    playerScore += 1;
  } else {
    if (selectedImages.length === 3) {
      function hideTheImage() {
        hideAllTheImages[0].style.opacity = "0";
        hideAllTheImages[1].style.opacity = "0";
      }
      setTimeout(hideTheImage, 1000);

      console.log("not the same image!");
      function clearSelectedImages() {
        selectedImages = [0];
        hideAllTheImages = [];
      }
      //test from 1500 to 1100
      setTimeout(clearSelectedImages, 1100);

    }
  }

  if (playerScore === 6) {
    console.log("YOU WIN");
    scoreTracker.innerText = "Winner Winner Chicken Dinner!";
    selectedImages = [0];
    document.getElementById("container").style.backgroundImage = "url('css/images/fireworks.gif')"
    hiddenImages.forEach(function(image) {
      image.style.opacity = "0"
    })
    winningFlag.forEach(function(flag) {
      flag.style.backgroundImage = "url('css/images/finishline.gif')"
    })
    
  }
}


// to reset game board and call shuffle function
function restartGame() {
  hiddenImages.forEach(function (image) {
    image.style.opacity = "0";
    playerScore = 0;
    remove = [];
    clickCounter = 0
    howManyClicks.innerText = 0;
    document.getElementById("container").style.backgroundImage = ""
    scoreTracker.innerText = "Click a race flag to reveal a car, remember its color and try to make your next race flag click match the previous car's color!"
    shuffle()
  })
  winningFlag.forEach(function(flag) {
    flag.style.backgroundImage = "url('css/images/raceflag.png')"
  })
}

// shuffle function
function shuffle() {
shuffleImages.forEach(function(card) {
  let randomPos = Math.floor(Math.random() * 12);
  card.style.order = randomPos;
})
}
