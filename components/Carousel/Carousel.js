/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselMaker = () => {
  let currentImageIndex = 0;
  const imageSrcObj = [
    "./assets/carousel/mountains.jpeg", //0
    "./assets/carousel/computer.jpeg",  //1
    "./assets/carousel/trees.jpeg",     //2
    "./assets/carousel/turntable.jpeg"  //3
  ]
  const carouselContainer = document.querySelector('.carousel-container')
  const carouselDiv = document.createElement('div')
  carouselDiv.classList.add('carousel')
  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  const image = document.createElement('img')
  image.setAttribute('src', imageSrcObj[currentImageIndex])
  carouselContainer.appendChild(carouselDiv)
  carouselDiv.appendChild(leftButton)
  carouselDiv.appendChild(image)
  carouselDiv.appendChild(rightButton)

  leftButton.addEventListener('click', () => {
    if(currentImageIndex === 0) {
      currentImageIndex = 3;
    }
    else {
      currentImageIndex -= 1;
    }
    image.setAttribute('src', imageSrcObj[currentImageIndex])
  })

  rightButton.addEventListener('click', () => {
    if(currentImageIndex === 3) {
      currentImageIndex = 0;
    }
    else {
      currentImageIndex += 1;
    }
    image.setAttribute('src', imageSrcObj[currentImageIndex])
  })
}

carouselMaker()