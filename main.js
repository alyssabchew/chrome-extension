// define images 
// TODO: save all images from either slack or bio book
// link them here in an array so we can use Math.random to access random array items and replace images
const FTRIimages = ["aiden", "annie", "cody", "corey", "demi", "jared", "kat", "kristin", "laura", "louie", "mia", "mike", "peaches", "phillip", "samantha", "shanda", "simon", "sophia", "xochilt", "zachary"]; 

// use query selector to get all images off the DOM
const browserImages = document.querySelectorAll("a, img, div, picture, figure, .img._aagt, .img.css-9pa8cd");
// var divImages = document.getElementsByClassName("_ab8w _ab94 _ab99 _ab9f _ab9m _ab9p _abc0 _abcm");
const divImgs = document.getElementsByClassName("_aagt css-9pa8cd");
// set images to all be random images from FTRIimages
// start with setting all images to jared

function replaceImages (images) {
// replace browserImages src's with FTRIimages
  for (let i = 0; i < images.length; i++) {
    const index = Math.floor(Math.random() * FTRIimages.length);
    const newImage = chrome.runtime.getURL(
      "/docs/assets/images/" + FTRIimages[index] + ".png"
    );
    images[i].src = newImage;
    images[i].alt = FTRIimages[index];
    if (images[i].getAttribute('srcset')) {
      console.log("srcsest")
      images[i].setAttribute('srcset', newImage);
    }
    // if(images[i].getAttribute('currentSrc')) {
    //   images[i].setAttribute('currentSrc', newImage);
    // }
    if (images[i].currentSrc) {
      console.log("image: ", images[i])
      console.log("curr source:", images[i].currentSrc);
      images[i].currentSrc = newImage
    }
    if (images[i].style.backgroundImage) {
      images[i].style.backgroundImage = `url("${newImage}")`
    }
    // browserImages[i].onClick = chrome.runtime.getURL(
    //   "/docs/assets/images/" + FTRIimages[Math.floor(Math.random() * FTRIimages.length)] + ".png"
    // );
  }
}

replaceImages(browserImages);

setTimeout(() => {
  // console.log(divImages);
  // replaceImages(divImages);
  console.log(divImgs);
  console.log(divImgs.length);
  replaceImages(divImgs);
}, 8000);

// window.addEventListener("load", function(event) {
//   replaceImages(browserImages);
//   // console.log(divImages);
//   // replaceImages(divImages);
//   console.log(divImgs);
//   console.log(divImgs.length);
//   replaceImages(divImgs);
// });


// for (let i = 0; i < divImgs.length; i++) {
//   const index = Math.floor(Math.random() * FTRIimages.length);
//   const newImage = chrome.runtime.getURL(
//     "/docs/assets/images/" + FTRIimages[index] + ".png"
//   );
//   divImgs[i].src = newImage;
//   divImgs[i].innerHTML = `<img alt=${FTRIimages[index]} class=_aagt src=${newImage}>`
//   // browserImages[i].onClick = chrome.runtime.getURL(
//   //   "/docs/assets/images/" + FTRIimages[Math.floor(Math.random() * FTRIimages.length)] + ".png"
//   // );
// }
// console.log(divImgs);