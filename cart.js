var cart = JSON.parse(localStorage.getItem("newcart")) || [];
console.log(cart);
displayCart(cart);

function displayCart(cart) {
  var price1 = 0;
  var discount = 0;

  document.querySelector("#cartitems").innerHTML = "";
  document.querySelector("#MRP").innerText = "Rs." + 0;
  document.querySelector("#netmeddiscount").innerText = "Rs." + 0;
  document.querySelector("#netmed").innerText = "Rs." + 0;
  document.querySelector("#total").innerText = "Rs." + 0;
  document.querySelector("#total1").innerText = "Rs." + 0;

  var uniqueCartItems = [];
  var itemsQuantity = [];

  cart.forEach(function (ele) {
    var flag = false;
    for (var i = 0; i < uniqueCartItems.length; i++) {
      var obj = uniqueCartItems[i];
      if (
        obj.image_url === ele.image_url &&
        obj.name === ele.name &&
        obj.best_price === ele.best_price &&
        obj.mrp_price === ele.mrp_price &&
        obj.company_name === ele.company_name
      ) {
        flag = true;
        break;
      }
    }
    if (flag) {
      itemsQuantity[i] = itemsQuantity[i] + 1;
    } else {
      uniqueCartItems.push(ele);
      itemsQuantity.push(1);
    }
  });

  uniqueCartItems.forEach(function (elem, index) {
    var card = document.createElement("div");
    card.setAttribute("class", "boxCard"); //bag12
    card.style.display = "flex";

    var card1 = document.createElement("div"); //img
    card1.setAttribute("class", "boxCard1");
    // card1.style.width = "100px";

    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);

    card1.append(image);

    var card2 = document.createElement("div"); //details      card2
    card2.setAttribute("class", "boxCard2");

    var details = document.createElement("p"); //details p tag  card2
    details.innerText = elem.name;

    var details1 = document.createElement("p"); //  card2
    details1.innerText = elem.company_name;

    var card3 = document.createElement("div"); //details     //card 2
    card3.setAttribute("class", "boxCard3");
    card3.style.display = "flex";

    var card31 = document.createElement("div"); //amount      card3->31 32
    card31.setAttribute("class", "boxCard31");

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.best_price;

    var Sprice = document.createElement("span");
    Sprice.innerText = "Rs." + elem.mrp_price;
    price1 = price1 + elem.mrp_price * itemsQuantity[index];
    document.querySelector("#MRP").innerText = "Rs." + price1;

    if (elem.mrp) {
      var discounted = elem.mrp - elem.best_price;
      discount = discount + itemsQuantity[index] * discounted;
    }
    document.querySelector("#netmeddiscount").innerText = "-Rs." + discount;

    document.querySelector("#netmed").innerText = "Rs." + discount;

    document.querySelector("#total").innerText = "Rs." + (price1 - discount);
    document.querySelector("#total1").innerText = "Rs." + (price1 - discount);

    var Delievery = document.createElement("p");
    Delievery.innerText = "Delivery between Oct-14 6PM - Oct-9 10PM";

    card31.append(price, Sprice, Delievery);

    var card32 = document.createElement("div");
    card32.setAttribute("class", "boxCard32");

    var quantityIncre = document.createElement("button");
    quantityIncre.setAttribute("class", "cc1");
    quantityIncre.innerText = "+";
    quantityIncre.addEventListener("click", function () {
      addItems(elem);
    });
    var quantityDecre = document.createElement("button");
    quantityDecre.innerText = "-";
    quantityDecre.setAttribute("class", "cc2");
    quantityDecre.addEventListener("click", function () {
      delItems(elem, index);
    });

    var quantityValue = document.createElement("span");

    quantityValue.innerText = " QTY:" + itemsQuantity[index];
    // let quantityDecre=document.createElement("div");
    // quantityDecre.setAttribute("class", "cc2");
    // let some=``;
    // some+= `<div _ngcontent-pet-c6="" class="ntg">
    //   <span _ngcontent-pet-c6="">Qty :</span>
    //   <select _ngcontent-pet-c6="" name="quantity">
    //     <option _ngcontent-pet-c6="" class="ng-star-inserted">1</option>
    //     <option _ngcontent-pet-c6="" class="ng-star-inserted">2</option>
    //     <option _ngcontent-pet-c6="" class="ng-star-inserted">3</option>
    //     <option _ngcontent-pet-c6="" class="ng-star-inserted">4</option>
    //   </select>
    // </div>`;
    // quantityDecre.innerHTML=some;

    var card321 = document.createElement("div");
    card321.setAttribute("class", "boxCard321");
    card321.style.display = "flex";

    var remove = document.createElement("button");
    remove.innerText = "REMOVE";
    remove.addEventListener("click", function () {
      removeFromCart(elem, index);
    });

    var later = document.createElement("button");
    later.innerText = "SAVE FOR LATER";
    later.addEventListener("click", function () {
      Saveforlater(elem, index);
    });

    var hr = document.createElement("hr");
    hr.setAttribute("class", "hr");
    hr.style.color = "blue";

    card321.append(remove, later);

    card32.append(quantityValue, quantityIncre, quantityDecre, card321);

    card3.append(card31, card32);
    card2.append(details, details1, card3, hr);
    // card1.append(hr)
    card.append(card1, card2);
    document.querySelector("#cartitems").append(card);
  });
}

function addItems(elem) {
  cart.push(elem);
  localStorage.setItem("cartitems", JSON.stringify(cart));
  displayCart(cart);
  console.log(cart);
}

function delItems(elem, index) {
  for (var i = cart.length - 1; i >= 0; i--) {
    var ele = cart[i];
    if (
      ele.img === elem.img &&
      ele.name === elem.name &&
      ele.price === elem.price &&
      ele.strikedoffprice === elem.strikedoffprice
    ) {
      break;
    }
  }
  cart.splice(i, 1);
  localStorage.setItem("newcart", JSON.stringify(cart));
  displayCart(cart);
  console.log(cart);
}

function removeFromCart(elem, index) {
  event.target.parentNode.remove();
  var newCartArr = [];
  cart.forEach(function (ele) {
    if (
      ele.image_url !== elem.image_url ||
      ele.name !== elem.name ||
      ele.best_price !== elem.best_price ||
      ele.mrp !== elem.mrp
    ) {
      newCartArr.push(ele);
    }
  });
  cart = newCartArr;
  localStorage.setItem("newcart", JSON.stringify(cart));
  displayCart(cart);
}

var bbc = document.querySelector("#promo");
bbc.addEventListener("click", (event) => {
  if (bbc.open) {
    document
      .querySelector(".suraj")
      .className.replace("fa fa-circle", "fa fa-check-circle");
  }
});

document.querySelector("#upload").addEventListener("click", myfunc);
var a = JSON.parse(localStorage.getItem("mobile"));
function myfunc() {
  if (a == null) {
    alert("Please do signup first");
  } else {
    window.location.href = "upload.html";
  }
}

document.querySelector("#empty").addEventListener("click", myfunc3);
var k = JSON.parse(localStorage.getItem("cartitems"));
function myfunc3() {
  if (k == null) {
    window.location.href = "emptycart.html";
  } else {
    window.location.href = "cart.html";
  }
}
var monkey = JSON.parse(localStorage.getItem("mobile"));
if (monkey !== null) {
  document.querySelector("#donkey").innerText = monkey;
}

document.querySelector("#last").addEventListener("click", myfunc7);
var k = JSON.parse(localStorage.getItem("otp"));
function myfunc7() {
  if (k == null) {
    alert("You need to SignUp First");
    window.location.href = "signUp.html";
  } else if (k !== null) {
    window.location.href = "cart2.html";
  }
}