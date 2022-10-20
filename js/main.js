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
    // function clearSelectedImages() {
    selectedImages = [0];
    //   console.log("im clearing after 10 seconds");
    hideAllTheImages = [];
    // }
    // setTimeout(clearSelectedImages, 4000);

    // showPairs();
  } else {
    if (selectedImages.length === 3) {
      // selectedImage is an array of the dataset index of the img in html file
      function hideTheImage() {
        hideAllTheImages[0].style.opacity = "0";
        hideAllTheImages[1].style.opacity = "0";
        console.log("hide all the images", hideAllTheImages);
      }
      setTimeout(hideTheImage, 5000);

      console.log("not the same image!");
      function clearSelectedImages() {
        selectedImages = [0];
        console.log("im clearing after 10 seconds");
        hideAllTheImages = [];
      }
      setTimeout(clearSelectedImages, 6000);
    }
  }
  // function clearSelectedImages() {
  //   selectedImages = [0];
  //   console.log("im clearing after 10 seconds");
  //   hideAllTheImages = [];
  // }
  // setTimeout(clearSelectedImages, 6000);
  if (playerScore === 6) {
    console.log("YOU WIN");
    scoreTracker.innerText = "YOU WIN";
    selectedImages = [0];
    showAllImages();
    function showAllImages() {
      hiddenImages.forEach(function (image) {
        image.style.opacity = "1";
      });
    }
    setTimeout(showAllImages, 2000);
    // hiddenImages.forEach(function(image) {
    // image.style.opacity = "1"
    // })
    // setTimeout(image, 5000)
  }
}

// showPairs()
// to show images of what has matched thus far
// function showPairs() {
//   if (remove[1] == "one") {
//     pictures.forEach(function (picture) {
//       picture.style.opacity = "0";
//     });
//     console.log("testing remove 1");
//     remove = [0];
//   }
//   if (remove[1] == "two") {
//     picturesTwo.forEach(function (picture) {
//       picture.style.opacity = "100";
//     });
//     console.log("testing remove 2");
//     remove = [0];
//   }
//   if (remove[1] == "three") {
//     picturesThree.forEach(function (picture) {
//       picture.style.opacity = "100";
//     });
//     console.log("testing remove 2");
//     remove = [0];
//   }
//   if (remove[1] == "four") {
//     picturesFour.forEach(function (picture) {
//       picture.style.opacity = "100";
//     });
//     console.log("testing remove 2");
//     remove = [0];
//   }
//   if (remove[1] == "five") {
//     picturesFive.forEach(function (picture) {
//       picture.style.opacity = "100";
//     });
//     console.log("testing remove 2");
//     remove = [0];
//   }
//   if (remove[1] == "six") {
//     picturesSix.forEach(function (picture) {
//       picture.style.opacity = "100";
//     });
//     console.log("testing remove 2");
//     remove = [0];
//   }
// }

// to reset game board
function resetGame() {
  hiddenImages.forEach(function (image) {
    image.style.opacity = "0";
    playerScore = 0;
    remove = [];
    scoreTracker.innerText = "Make a Move!";
  });
}
