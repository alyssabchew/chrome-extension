// define images 
// TODO: save all images from either slack or bio book
// link them here in an array so we can use Math.random to access random array items and replace images
const FTRIimages = ["aiden", "annie", "cody", "corey", "demi", "jared", "kat", "kristin", "laura", "louie", "mia", "mike", "peaches", "phillip", "samantha", "shanda", "simon", "sophia", "xochilt", "zachary"]; 

// use query selector to get all images off the DOM
var browserImages = document.querySelectorAll("img");

// set images to all be random images from FTRIimages
// start with setting all images to jared

// replace browserImages src's with FTRIimages
for (let i = 0; i < browserImages.length; i++) {
  const index = Math.floor(Math.random() * FTRIimages.length);
  browserImages[i].src = chrome.runtime.getURL(
    "/docs/assets/images/" + FTRIimages[index] + ".png"
  );
}

