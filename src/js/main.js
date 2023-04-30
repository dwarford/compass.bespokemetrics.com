/**
 * Sets the height of the hero element based on the navigation height.
 * If the navigation element is not found, the height is set to 0.
 */
function setHeroHeight() {
    let nav = document.querySelector("#navigation");
    if (nav) {
      this.navHeight = nav.offsetHeight;
    } else {
      this.navHeight = 0;
    }
  }



/**
 * This script creates a rotating ticker of images by duplicating the images,
 * calculating their widths and animation duration, and applying the animation
 * to the ticker container. The images will scroll seamlessly in a loop.
 */

// Get a reference to the ticker container element and the images within it
const tickerContainer = document.getElementById('ticker-container');
const images = tickerContainer.getElementsByTagName('img');
const numImages = images.length;

// Calculate the total width of all the images
let totalWidth = 0;
for (let i = 0; i < numImages; i++) {
  totalWidth += images[i].getBoundingClientRect().width;
}
// Get the width of the ticker container
const containerWidth = tickerContainer.getBoundingClientRect().width;
const translationDistance = containerWidth + totalWidth;

// Duplicate the images in the ticker container to make the animation loop seamlessly
let newHTML = '';
for (let i = 0; i < numImages; i++) {
  newHTML += images[i].outerHTML;
}
tickerContainer.innerHTML += newHTML;

// Set the width of the ticker container to accommodate the duplicated images
tickerContainer.style.width = (containerWidth + totalWidth * 2) + 'px';

// Calculate the duration of the animation based on the translation distance and desired speed
const animationDuration = translationDistance / 35; // adjust this value to control the scrolling speed
tickerContainer.style.animationDuration = animationDuration + 's';
