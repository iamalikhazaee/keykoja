// Slideshow functionality
var slideIndex = 0;
var slides = [
  { imgSrc: "image1.jpg", heading: "Construction Image 1", description: "Description for Construction Image 1" },
  { imgSrc: "image2.jpg", heading: "Construction Image 2", description: "Description for Construction Image 2" },
  { imgSrc: "image3.jpg", heading: "Construction Image 3", description: "Description for Construction Image 3" }
  // Add more slides as needed
];

var slideshowImg = document.getElementById("slideshow-img");
var slideshowTextHeading = document.getElementById("slideshow-text-heading");
var slideshowTextDesc = document.getElementById("slideshow-text-desc");

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  
  slideshowImg.src = slides[slideIndex].imgSrc;
  slideshowTextHeading.textContent = slides[slideIndex].heading;
  slideshowTextDesc.textContent = slides[slideIndex].description;
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

showSlide(slideIndex);
