/*----- constants -----*/

const images = document.querySelectorAll(".front");
const scoreTracker = document.querySelector(".score");
const btn = document.querySelector("#playButton");
const pictures = document.querySelectorAll(".one");
const picturesTwo = document.querySelectorAll(".two");
const picturesThree = document.querySelectorAll(".three");
const picturesFour = document.querySelectorAll(".four");
const picturesFive = document.querySelectorAll(".five");
const picturesSix = document.querySelectorAll(".six");

// if you want to use array of images somewhere down the line
console.log(Array.from(images)[0]);

/*----- state variables -----*/

let selectedImages = [0];
let playerScore = 0;
let remove = [0];

/*----- cached elements  -----*/

/*----- event listeners -----*/

// need help with "else" condition
handleClick();

function handleClick() {
  images.forEach(function (image) {
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
        playerScore += 1

        removePairs()

      } else {
        if (selectedImages.length === 3) {
          console.log("wrong");
          selectedImages = [0];
        }
      }
      if (playerScore === 6) {
        console.log("YOU WIN");
        scoreTracker.innerText = "Test";
      }
     


    });
  });
}

 // to remove images of what has matched thus far
function removePairs () {
  if (remove[1] == "one") {
    pictures.forEach(function (picture) {
      picture.style.display = "none";
    });
    console.log("testing remove 1");
    remove = [0];
  }
  if (remove[1] == "two") {
    picturesTwo.forEach(function (picture) {
      picture.style.display = "none";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "three") {
    picturesThree.forEach(function (picture) {
      picture.style.display = "none";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "four") {
    picturesFour.forEach(function (picture) {
      picture.style.display = "none";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "five") {
    picturesFive.forEach(function (picture) {
      picture.style.display = "none";
    });
    console.log("testing remove 2");
    remove = [0];
  }
  if (remove[1] == "six") {
    picturesSix.forEach(function (picture) {
      picture.style.display = "none";
    });
    console.log("testing remove 2");
    remove = [0];
  }
}

// btn.addEventListener("click", function () {
//   images.forEach(function (image) {
//     if (image.style.display === "flex") {
//       image.style.display = "none"
//     }
//   })
// })

// function hide () {
//   images.forEach(function (image) {
//     if (image.style.display === "flex") {
//       image.style.display = "none"
//     }
//   })
// }

// function toggle() {
//   let x = document.getElementById("testhide");
//   x.style.color = "red"
//   console.log('test')

// }

// function toggle() {
//   let fark = document.getElementsByClassName("front")
//   fark.style.color = "red"
// }

// find a way to flip the images - transform / translate

// when all the images are matched correctly function  - iterate all images and see if theres a specific class

//

/*----- functions -----*/
