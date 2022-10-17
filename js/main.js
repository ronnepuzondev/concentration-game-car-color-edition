console.log('Howdy folks')

 /*----- constants -----*/

const images = document.querySelectorAll("[data-index]")


  /*----- state variables -----*/

let isFirstCardClicked = false
let firstCardClicked 




  /*----- cached elements  -----*/


  /*----- event listeners -----*/
  images.forEach(function(image) {
    image.addEventListener("click", function() {
        console.log(image.dataset)
    })
})
 


  /*----- functions -----*/
// function below will add an event listener to each image, and give ability to retrieve data-index assigned to it


