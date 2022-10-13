var DealsOfdDay = [
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925552/inatur_ayurveda_aromatherapy_facial_oil_kumkumadi_12_ml_0_0.jpg",
    name: "Inatur Ayurveda & Aromatherapy Kumkumadi Facial Oil 12 Ml",
    best_price: "₹360.00",
    sub_price: "₹ 900.00",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925553/inatur_herbals_foot_cream_100_gm_0_0.jpg",
    name: "Inatur Herbals Foot Cream 100 Gm",
    best_price: "₹160.00",
    sub_price: "₹ 400.00",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925554/inatur_pure_cold_pressed_oil_almond_oil_100_ml_0_0.jpg",
    name: "Inatur Pure & Cold Pressed Oil - Almond 100 Ml",
    best_price: "₹160.00",
    sub_price: "₹ 400.00",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925555/inatur_pure_cold_pressed_oil_olive_oil_100_ml_0_0.jpg",
    name: "Inatur Pure & Cold Pressed Oil - Olive 100 Ml",
    best_price: "₹140.00",
    sub_price: "₹ 350.00",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925556/inatur_re_growth_hair_oil_hibiscus_100_ml_0_0.jpg",
    name: "Inatur Re-Growth Hair Oil - Hibiscus 100 Ml",
    best_price: "₹160.00",
    sub_price: "₹400",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925557/inatur_herbals_hand_nail_cream_100_gm_0_0.jpg",
    name: "Inatur Herbals Hand & Nail Cream 100 Gm",
    best_price: "₹160.00",
    sub_price: "₹ 400.00",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925558/inatur_herbal_anti_mosquito_insect_spray_100_ml_0_0.jpg",
    name: "Inatur Herbal Anti- Mosquito & Inspect Spray 100 Ml",
    best_price: "₹128.00",
    sub_price: "₹ 320.00",
    Disount: "UPTO 75% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925560/inatur_facial_mist_toner_cucumber_100_ml_0_0.jpg",
    name: "Inatur Facial Mist Toner - Cucumber 100 Ml",
    best_price: "₹140.00",
    sub_price: "₹ 350.00",
    Disount: "UPTO 60% off",
  },

  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925561/inatur_hydrosol_floral_water_rose_100_ml_0_0.jpg",
    name: "Inatur Hydosol Floral Water - Rose 100 Ml",
    best_price: "₹160.00",
    sub_price: "₹ 400.00",
    Disount: "UPTO 60% off",
  },
  {
    image_url:
      "https://www.netmeds.com/images/product-v1/150x150/925562/inatur_natural_skin_care_baby_cream_200_gm_0_0.jpg",
    name: "Inatur Natural Skin Care Baby Cream 200 Gm",
    best_price: "₹180.00",
    sub_price: "₹ 450.00",
    Disount: "UPTO 60% off",
  },
];

displayproducts();
function displayproducts() {
  DealsOfdDay.map(function (el, i) {
    var div = document.createElement("div");
    div.setAttribute("class", "cardimageslider");

    var image = document.createElement("img");
    image.setAttribute("src", el.image_url);

    var h5 = document.createElement("h5");
    h5.innerText = el.name;

    var p = document.createElement("p");
    p.innerText = el.best_price;

    var p1 = document.createElement("p");
    p1.innerText = el.sub_price;

    var p3 = document.createElement("p");
    p3.innerText = el.Disount;

    var cartbtm = document.createElement("button");
    cartbtm.innerText = "Add To Cart";
    cartbtm.setAttribute("class", "card-btm");
    cartbtm.addEventListener("click", function () {
      addcart(el.id, i);
    });

    div.append(image, h5, p, p1, p3, cartbtm);
    document.querySelector(".s").append(div);
  });
}

const cardImageSlides = document.querySelectorAll(".cardimageslider");
console.log(cardImageSlides.length - 3);
var cardCounter = 0;
cardImageSlides.forEach((cardimageslider, index) => {
  cardimageslider.style.left = `${index * 25}%`;
});

function cardnext() {
  if (cardCounter < cardImageSlides.length - 3) {
    cardCounter++;
  }
  cardSlideImg();
}
function cardprev() {
  cardCounter--;
  cardSlideImg();
}

var cardSlideImg = () => {
  cardImageSlides.forEach((cardimageslider) => {
    cardimageslider.style.transform = `translateX(-${cardCounter * 155}%)`;
  });
};
////////////////////////////

displayproducts1();
function displayproducts1() {
  DealsOfdDay.map(function (el, i) {
    var div = document.createElement("div");
    div.setAttribute("class", "cardimageslider1");

    var image = document.createElement("img");
    image.setAttribute("src", el.image_url);

    var h5 = document.createElement("h5");
    h5.innerText = el.name;

    var p = document.createElement("p");
    p.innerText = el.best_price;

    var p1 = document.createElement("p");
    p1.innerText = el.sub_price;

    var p3 = document.createElement("p");
    p3.innerText = el.Disount;

    var cartbtm = document.createElement("button");
    cartbtm.innerText = "Add To Cart";
    cartbtm.setAttribute("class", "card-btm");
    cartbtm.addEventListener("click", function () {
      addcart(el.id, i);
    });

    div.append(image, h5, p, p1, p3, cartbtm);
    document.querySelector(".s1").append(div);
  });
}

const cardImageSlides1 = document.querySelectorAll(".cardimageslider1");
console.log(cardImageSlides1.length - 3);
var cardCounter1 = 0;
cardImageSlides1.forEach((cardimageslider1, index) => {
  cardimageslider1.style.left = `${index * 25}%`;
});

function cardnext1() {
  if (cardCounter1 < cardImageSlides1.length - 3) {
    cardCounter1++;
  }
  cardSlideImg1();
}
function cardprev1() {
  cardCounter1--;
  cardSlideImg1();
}

var cardSlideImg1 = () => {
  cardImageSlides1.forEach((cardimageslider1) => {
    cardimageslider1.style.transform = `translateX(-${cardCounter1 * 155}%)`;
  });
};
