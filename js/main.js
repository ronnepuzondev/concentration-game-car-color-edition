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

// if you want to use array of images somewhere down the line
console.log(Array.from(images)[0]);

/*----- state variables -----*/

let selectedImages = [0];
let playerScore = 0;
let remove = [0];
let flip = []
let scoreTracker = document.querySelector(".score");

/*----- cached elements  -----*/

/*----- event listeners -----*/

handleClick();

function handleClick() {
  hiddenImages.forEach(function (image) {
    image.addEventListener("click", function () {
      let data = parseInt(image.dataset.index);
      selectedImages.push(data);
      console.log(selectedImages);


      if (selectedImages[1] === selectedImages[2]) {
        console.log("winner!");
        selectedImages = [0];
        console.log(selectedImages);
        let clickedImage = event.target.className;
        remove.push(clickedImage);
        console.log(clickedImage);
        console.log(remove);
        playerScore += 1;

        showPairs();
      } else {
        if (selectedImages.length === 3) {
          console.log("wrong");
          selectedImages = [0];
        }
      }
      if (playerScore === 6) {
        console.log("YOU WIN");
        scoreTracker.innerText = "YOU WIN";
      } 
    });
  });
}


/*----- functions -----*/

// to show images of what has matched thus far
function showPairs() {
  if (remove[1] == "one") {
    pictures.forEach(function (picture) {
      picture.style.opacity = "100";
    });
    console.log("testing remove 1");
    remove = [0];
  }
  if (remove[1] == "two") {
    picturesTwo.forEach(function (picture) {
      picture.style.opacity = "100";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "three") {
    picturesThree.forEach(function (picture) {
      picture.style.opacity = "100";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "four") {
    picturesFour.forEach(function (picture) {
      picture.style.opacity = "100";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "five") {
    picturesFive.forEach(function (picture) {
      picture.style.opacity = "100";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "six") {
    picturesSix.forEach(function (picture) {
      picture.style.opacity = "100";
    });
    console.log("testing remove 2");
    remove = [0];
  }
}

// to reset game board
function resetGame() {
  hiddenImages.forEach(function (image) {
    image.style.opacity = "0";
    playerScore = 0;
    remove = [0];
    scoreTracker.innerText = "Make a Move!"
  });
}