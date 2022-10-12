const slides = document.querySelectorAll(".slide");
console.log(slides.length - 3);
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 25}%`;
});

function next() {
  if (counter < slides.length - 3) {
    counter++;
  }
  slideImg();
}
function prev() {
  counter--;
  slideImg();
}

var slideImg = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const ImageSlides = document.querySelectorAll(".imageslider");
console.log(ImageSlides.length - 3);
var counter = 0;
ImageSlides.forEach((imageslider, index) => {
  imageslider.style.left = `${index * 35}%`;
});

function next() {
  if (counter < ImageSlides.length - 3) {
    counter++;
  }
  slideImg();
}
function prev() {
  counter--;
  slideImg();
}

var slideImg = () => {
  ImageSlides.forEach((imageslider) => {
    imageslider.style.transform = `translateX(-${counter * 155}%)`;
  });
};
/////////////

const ImageSlides1 = document.querySelectorAll(".imageslider1");
console.log(ImageSlides1.length - 3);
var counter1 = 0;
ImageSlides1.forEach((imageslider1, index) => {
  imageslider1.style.left = `${index * 35}%`;
});

function nextone() {
  if (counter1 < ImageSlides1.length - 3) {
    counter1++;
  }
  slideImgone();
}
function prevone() {
  counter1--;
  slideImgone();
}

var slideImgone = () => {
  ImageSlides1.forEach((imageslider1) => {
    imageslider1.style.transform = `translateX(-${counter1 * 155}%)`;
  });
};
/////////////

const ImageSlides2 = document.querySelectorAll(".imageslider2");
console.log(ImageSlides2.length - 3);
var counter2 = 0;
ImageSlides2.forEach((imageslider2, index) => {
  imageslider2.style.left = `${index * 35}%`;
});

function nexttwo() {
  if (counter2 < ImageSlides2.length - 3) {
    counter2++;
  }
  slideImgtwo();
}
function prevtwo() {
  counter2--;
  slideImgtwo();
}

var slideImgtwo = () => {
  ImageSlides2.forEach((imageslider2) => {
    imageslider2.style.transform = `translateX(-${counter2 * 155}%)`;
  });
};
