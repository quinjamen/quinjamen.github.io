let slideIndex = 0;
let slideInterval;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";
  clearInterval(slideInterval);
  slideInterval = setInterval(showSlides, 3000); // Change image every 3 seconds
}

function moveSlide(n) {
  clearInterval(slideInterval);
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("slide").length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = document.getElementsByClassName("slide").length }
  showSlides();
}

slideInterval = setInterval(showSlides, 3000); // Change image every 3 seconds




