const ImageSlides = document.querySelectorAll(".imageslider");
console.log(ImageSlides.length - 3);
console.log(window.innerWidth);
console.log(window.screen.availWidth);
var counter = 0;
ImageSlides.forEach((imageslider, index) => {
  if (screen.width > 1099) {
    imageslider.style.left = `${index * 35}%`;
  } else {
    imageslider.style.left = `${index * 75}%`;
  }
});

function next() {
  if (screen.width > 1099) {
    if (counter < ImageSlides.length - 3) {
      counter++;
    }
  } else {
    if (counter < ImageSlides.length - 1) {
      counter++;
    }
  }
  slideImg();
}
function prev() {
  counter--;
  slideImg();
}

var slideImg = () => {
  ImageSlides.forEach((imageslider) => {
    if (screen.width > 1099) {
      imageslider.style.transform = `translateX(-${counter * 155}%)`;
    } else {
      imageslider.style.transform = `translateX(-${counter * 300}%)`;
    }
  });
};
/////////////

const ImageSlides1 = document.querySelectorAll(".imageslider1");
console.log(ImageSlides1.length - 3);
var counter1 = 0;
ImageSlides1.forEach((imageslider1, index) => {
  if (screen.width > 1099) {
    imageslider1.style.left = `${index * 35}%`;
  } else {
    imageslider1.style.left = `${index * 75}%`;
  }
});

function nextone() {
  if (screen.width > 1099) {
    if (counter1 < ImageSlides1.length - 3) {
      counter1++;
    }
  } else {
    if (counter1 < ImageSlides1.length - 1) {
      counter1++;
    }
  }
  slideImgone();
}
function prevone() {
  counter1--;
  slideImgone();
}

var slideImgone = () => {
  ImageSlides1.forEach((imageslider1) => {
    if (screen.width > 1099) {
      imageslider1.style.transform = `translateX(-${counter1 * 155}%)`;
    } else {
      imageslider1.style.transform = `translateX(-${counter1 * 300}%)`;
    }
  });
};
/////////////

const ImageSlides2 = document.querySelectorAll(".imageslider2");
console.log(ImageSlides2.length - 3);
var counter2 = 0;
ImageSlides2.forEach((imageslider2, index) => {
  if (screen.width > 1099) {
    imageslider2.style.left = `${index * 35}%`;
  } else {
    imageslider2.style.left = `${index * 75}%`;
  }
});

function nexttwo() {
  if (screen.width > 1099) {
    if (counter2 < ImageSlides2.length - 3) {
      counter2++;
    }
  } else {
    if (counter2 < ImageSlides2.length - 1) {
    }
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
    if (screen.width > 1099) {
      imageslider2.style.transform = `translateX(-${counter2 * 155}%)`;
    } else {
      imageslider2.style.transform = `translateX(-${counter2 * 300}%)`;
    }
  });
};
