 /*----- constants -----*/

const images = document.querySelectorAll(".front")


// images.addEventListener("click", function() {
//     let data = parseInt(front.dataset.index)
//     console.log(front.dataset.index)
// })


  /*----- state variables -----*/

let isFirstCardClicked = -1
let firstCard
let selectedImages = [0]

  /*----- cached elements  -----*/
// const onClick = function (event) {
//     let isFirstCardClicked = true;
//     let convert = front.dataset.index
//     console.log(convert)
// }

  /*----- event listeners -----*/

// images.forEach(function(image) {
//     image.addEventListener("click", onClick)
// })

const eventListener =  images.forEach(function(image) {
    image.addEventListener("click", function() {
        isFirstCardClicked *= -1
        let data = parseInt(image.dataset.index)
        selectedImages.push(data)
        console.log(selectedImages)
        console.log(isFirstCardClicked)
        if (selectedImages[1] === selectedImages[2]) {
            console.log('winner!');
            selectedImages = []
            console.log(selectedImages)
        } else {
            selectedImages = []
        }
        })
})

// function eventListenerAdd() {
//     images.forEach(function(image){
//         image.addEventListener("click", function(){
//             if (selectedImages[1] === selectedImages[2]) {
//                 console.log('winner!');
//                 selectedImages = []
//                 console.log(selectedImages)
//             } else {
//                 selectedImages = []
//         }
//     })
// })
// }



    
    /*----- functions -----*/