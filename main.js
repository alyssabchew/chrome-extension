// define images 
// TODO: save all images from either slack or bio book
// link them here in an array so we can use Math.random to access random array items and replace images
const FTRIimages = ["./docs/assets/images/jared_bio_book.png"]; //["https://media-exp2.licdn.com/dms/image/C5603AQE9wR5a5MRIJw/profile-displayphoto-shrink_200_200/0/1641847254960?e=2147483647&v=beta&t=QbJoZJaVH0I53PJxq-sEb5tThIb-TkdX62lQTBfpdFU"];


// use query selector to get all images off the DOM
var browserImages = document.querySelectorAll("img");

// set images to all be random images from FTRIimages
// start with setting all images to jared

// replace browserImages src's with FTRIimages
console.log(FTRIimages[0]);
for (let i = 0; i < browserImages.length; i++) {
  browserImages[i].src = chrome.runtime.getURL(
    FTRIimages[0]
  );
}
console.log(chrome.runtime.getURL(
  FTRIimages[0]
))
