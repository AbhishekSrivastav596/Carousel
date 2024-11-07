const slides = document.querySelectorAll(".slide");
const progressBar = document.querySelector(".progress");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const callnext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
};

const callprev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  const progressWidth = ((counter + 1) / slides.length) * 100;
  progressBar.style.width = `${progressWidth}%`;

  if (counter === 0) {
    progressBar.style.backgroundColor = "#FF5733"; 
  } else if (counter === 1) {
    progressBar.style.backgroundColor = "#FF9800"; 
  } else if (counter === 2) {
    progressBar.style.backgroundColor = "#4CAF50"; 
  } else if (counter === 3) {
    progressBar.style.backgroundColor = "#2196F3"; 
  }
};

slideImage();
