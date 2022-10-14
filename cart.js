var cartItems = JSON.parse(localStorage.getItem("allcarts")) || [];
console.log(cartItems);

function displayCart() {
  document.getElementById("cart").innerHTML = null;
  cartItems.map(function (elem, i) {
    var main_div = document.createElement("div"); // img,subdiv
    main_div.setAttribute("class", "mainbox");
    var sub_div = document.createElement("div");
    var namediv = document.createElement("div"); // company name ,name

    var pricediv = document.createElement("div"); // bestprice,mrprice
    pricediv.setAttribute("class", "price");
    var buttondiv = document.createElement("div"); // para,remove,save for later
    buttondiv.setAttribute("class", "boxbtm");
    // image,name,

    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);

    var name = document.createElement("h2");
    name.innerText = elem.name;

    var company_name = document.createElement("p");
    company_name.innerText = elem.company_name;

    // price and dropdown
    var best_price = document.createElement("h3");
    best_price.innerText = elem.best_price;

    var mrp_price = document.createElement("h5");
    mrp_price.innerText = elem.mrp_price;

    let select = document.createElement("select");
    let option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    option1.innerText = "QTY :" + 1;
    let option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    option2.innerText = "QTY :" + 2;
    select.append(option1, option2);

    let para = document.createElement("p");
    para.innerText = "Delivery between Oct 13 11AM-Oct 14 10PM";
    let remove = document.createElement("button");
    remove.innerText = "REMOVE";
    let save_for_later = document.createElement("button");
    save_for_later.innerText = "SAVE FOR LATER";

    remove.addEventListener("click", function () {
      removeCart(i);
    });
    namediv.append(name, company_name);
    pricediv.append(best_price, mrp_price, select);
    // inputdiv.append();
    buttondiv.append(para, remove, save_for_later);
    sub_div.append(namediv, pricediv, buttondiv);
    main_div.append(image, sub_div);
    document.querySelector("#cart").append(main_div);
  });
}
displayCart();

function removeCart(i) {
  cartItems.splice(i, 1);
  localStorage.setItem("allcarts", JSON.stringify());
  displayCart();
}
