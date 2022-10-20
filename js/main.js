/*----- constants -----*/

const images = document.querySelectorAll(".front");
const btn = document.querySelector("#playButton");
const pictures = document.querySelectorAll(".one");
const picturesTwo = document.querySelectorAll(".two");
const picturesThree = document.querySelectorAll(".three");
const picturesFour = document.querySelectorAll(".four");
const picturesFive = document.querySelectorAll(".five");
const picturesSix = document.querySelectorAll(".six");
const hiddenImages = document.querySelectorAll(".front img");
const shuffleImages = document.querySelectorAll(".image");

// if you want to use array of images somewhere down the line
console.log(Array.from(images)[0]);

/*----- state variables -----*/

let selectedImages = [0];
let playerScore = 0;
let remove = [0];
let flip = [];
let scoreTracker = document.querySelector(".score");
let hideAllTheImages = [];

/*----- cached elements  -----*/

/*----- event listeners -----*/

handleClick();

function handleClick() {
  hiddenImages.forEach(function (image) {
    image.addEventListener("click", function () {
      console.log(image);
      hideAllTheImages.push(image);
      let data = parseInt(image.dataset.index);
      selectedImages.push(data);
      console.log(selectedImages);
      image.style.opacity = "1";
      checkWinner();
    });
  });
} 

/*----- functions -----*/

function checkWinner() {
  if (selectedImages[1] === selectedImages[2]) {
    console.log("winner!");
    console.log(selectedImages);
    let clickedImage = event.target.className;
    remove.push(clickedImage);
    console.log(clickedImage);
    console.log(remove);
    playerScore += 1;

    selectedImages = [0];

    hideAllTheImages = [];

    // showPairs();
  } else {
    if (selectedImages.length === 3) {
      function hideTheImage() {
        hideAllTheImages[0].style.opacity = "0";
        hideAllTheImages[1].style.opacity = "0";
        console.log("hide all the images", hideAllTheImages);
      }
      setTimeout(hideTheImage, 1000);

      console.log("not the same image!");
      function clearSelectedImages() {
        selectedImages = [0];
        console.log("im clearing after 10 seconds");
        hideAllTheImages = [];
      }
      setTimeout(clearSelectedImages, 2000);
    }
  }

  if (playerScore === 6) {
    console.log("YOU WIN");
    scoreTracker.innerText = "YOU WIN";
    selectedImages = [0];


  }
}


// to reset game board and call shuffle function
function restartGame() {
  hiddenImages.forEach(function (image) {
    image.style.opacity = "0";
    playerScore = 0;
    remove = [];
    scoreTracker.innerText = "Make a Move!";
    shuffle()
  });
}

// shuffle function
function shuffle() {
shuffleImages.forEach(function(card) {
  let randomPos = Math.floor(Math.random() * 12);
  card.style.order = randomPos;
})
}
