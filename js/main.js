 /*----- constants -----*/

 const images = document.querySelectorAll(".front")

// images.addEventListener("click", function() {
//     let data = parseInt(front.dataset.index)
//     console.log(front.dataset.index)
// })


  /*----- state variables -----*/

  let selectedImages = [0]
  let playerScore = []



  /*----- cached elements  -----*/
// const onClick = function (event) {
//     let isFirstCardClicked = true;
//     let convert = front.dataset.index
//     console.log(convert)
// }

  /*----- event listeners -----*/



// need help with "else" condition
 
  images.forEach(function(image) {
    image.addEventListener("click", function() {
        let data = parseInt(image.dataset.index)
        selectedImages.push(data)
        console.log(selectedImages)
        if (selectedImages[1] === selectedImages[2]) {
            console.log('winner!');
            selectedImages = [0]
            console.log(selectedImages)
            playerScore.push(1)
            console.log(playerScore)
        } else {
          if (selectedImages.length === 3) {
            console.log('wrong')
            selectedImages = [0]
          }
        }
        })
        })




// find a way to flip the images - transform / translate

// when all the images are matched correctly function  - iterate all images and see if theres a specific class


// 

    /*----- functions -----*/

  

