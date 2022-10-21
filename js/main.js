/*----- constants -----*/

/*----- state variables -----*/

let playerScore = 0;
let clickCounter = 0;
let selectedImages = [0];
let hideAllTheImages = [];

/*----- cached elements  -----*/

const images = document.querySelectorAll(".front");
const btn = document.querySelector("#playButton");
const hiddenImages = document.querySelectorAll(".front img");
const shuffleImages = document.querySelectorAll(".image");
const howManyClicks = document.querySelector(".clicks span");
const gameOver = document.querySelector(".clicks");
const scoreTracker = document.querySelector(".score");

/*----- event listeners -----*/

shuffle();
handleClick();

function handleClick() {
  hiddenImages.forEach(function (image) {
    image.addEventListener("click", function () {
      clickCounter += 1;
      howManyClicks.innerText = clickCounter;
      hideAllTheImages.push(image);
      let data = parseInt(image.dataset.index);
      selectedImages.push(data);
      image.style.opacity = "1";
      if (clickCounter === 30) {
        scoreTracker.innerText = ".....GAME OVER.....";
        scoreTracker.style.color = "red";
        images.forEach(function (image) {
          image.style.pointerEvents = "none";
        });
      }
      checkWinner();
    });
  });
}

/*----- functions -----*/

// to check for win or lose conditions
function checkWinner() {
  if (selectedImages[1] === selectedImages[2]) {
    selectedImages = [0];
    hideAllTheImages = [];
    playerScore += 1;
  } else {
    if (selectedImages.length === 3) {
      function hideTheImage() {
        hideAllTheImages[0].style.opacity = "0";
        hideAllTheImages[1].style.opacity = "0";
      }
      setTimeout(hideTheImage, 800);

      function clearSelectedImages() {
        selectedImages = [0];
        hideAllTheImages = [];
      }
      setTimeout(clearSelectedImages, 900);
    }
  }
  if (playerScore === 6) {
    scoreTracker.innerText = "Winner Winner Chicken Dinner!";
    selectedImages = [0];
    document.getElementById("container").style.backgroundImage =
      "url('css/images/fireworks.gif')";
    hiddenImages.forEach(function (image) {
      image.style.opacity = "0";
    });
    images.forEach(function (flag) {
      flag.style.backgroundImage = "url('css/images/finishline.gif')";
      flag.style.pointerEvents = "";
    });
  }
}
// to reset game board and call shuffle function
function restartGame() {
  hiddenImages.forEach(function (image) {
    image.style.opacity = "0";
    playerScore = 0;
    remove = [];
    clickCounter = 0;
    howManyClicks.innerText = 0;
    document.getElementById("container").style.backgroundImage = "";
    scoreTracker.innerText =
      "Click a race flag to reveal a car, remember its color and try to make your next race flag click match the previous car's color in 30 or less CLICKS!";
    scoreTracker.style.color = "white";
  });
  images.forEach(function (flag) {
    flag.style.backgroundImage = "url('css/images/raceflag.png')";
    flag.style.pointerEvents = "";
  });
  shuffle();
}

// shuffle images function
function shuffle() {
  shuffleImages.forEach(function (card) {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
