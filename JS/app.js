const prod = [
    {
      id: "1p2w",
      name: "Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      size: ["s", "l"],
      price: 29,
      url: "https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg",
    },
    {
      id: "2g4qq",
      name: "Product 2",
      description:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      size: ["s", "m", "l"],
      price: 33,
      url: "https://64.media.tumblr.com/7918ca72d8cb3566a37fbd627dcb24ac/tumblr_oupo142eEs1slhhf0o1_1280.jpg",
    },
    {
      id: "43gl88",
      name: "Product 3",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      size: [],
      price: 35,
      url: "https://64.media.tumblr.com/4b5e14b48ae5129f5fd9d6eb8406cb50/tumblr_otdi8010Sf1slhhf0o1_1280.jpg",
    },
    {
      id: "87cxL3",
      name: "Product 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      size: ["m", "xl"],
      price: 30,
      url: "https://64.media.tumblr.com/7bed8273f621486faecdd407969aef51/tumblr_otfcxeacdO1slhhf0o1_1280.jpg",
    },
  ];
  
  let body = document.getElementsByTagName("body")[0];
  let divHeder = document.createElement("div");
  body.appendChild(divHeder);
  divHeder.classList.add("divHeder");
  
  let divCart = document.createElement("div");
  body.appendChild(divCart);
  divCart.classList.add("divCart");
  // console.log(divCart);
  
  function myCard() {
    prod.forEach((elem) => {
      let card = document.createElement("div");
      let img = document.createElement("img");
      img.src = elem.url;
      card.appendChild(img);
      let cardInner = document.createElement("div");
      card.appendChild(cardInner);
      //////
      let sizeEl = elem.size;
  
      let sizeAll = "";
      sizeEl.forEach((s) => {
        sizeAll += `<span class="sizeEl">${s}</span>`;
      });
      // console.log(sizeEl);
  
      /////
      cardInner.innerHTML =
        "<br>" +
        elem.name +
        "<br>" +
        " size: " +
        sizeAll +
        "<br>" +
        " price: " +
        elem.price +
        " $ " +
        "<br>";
  
      card.classList.add("cardEl");
      divCart.appendChild(card);
      card.dataset.name = elem.id;
  
      let btn = document.createElement("button");
      card.appendChild(btn);
      btn.classList.add("btnEl");
      btn.innerText = "read more";
      btn.dataset.name = elem.id;
  
      let btn1 = document.createElement("button");
      card.appendChild(btn1);
      btn1.classList.add("btnEl1");
      btn1.innerText = "Add to cart";
      btn1.dataset.name = elem.id;
    });
    return prod;
  }
  let allCard = myCard();
  ///////////////////////////////////
  let btnRead = document.querySelectorAll(".btnEl");
  let allbtnRead = Array.from(btnRead);
  // console.log(allbtnRead);
  let popup = document.querySelector(".popup");
  let popup_content = document.querySelector(".popup_content");
  let closePopup = document.querySelector(".popup_close");
  let popup_card = document.querySelector(".popup_card");
  
  allbtnRead.forEach((elem) => {
    elem.addEventListener("click", function () {
      prod.forEach((obj) => {
        if (elem.dataset.name === obj.id) {
          popup.classList.add("active");
          popup_card.innerText = obj.name + "\n" + obj.description;
        } else {
          popup.classList.add("notActive");
        }
      });
      closePopup.addEventListener("click", (e) => {
        e.preventDefault();
        popup.classList.remove("active");
      });
      popup.addEventListener("click", (e) => {
        if (!e.target.closest(".popup_content")) {
          popup.classList.remove("active");
        }
      });
    });
  });
  
  ///////////////////////////////////
  function newElemLenght() {
    let quantityL = document.querySelector(".quantity");
    quantityL.innerText = newElem.length;
  }
  
  let btnAdd = document.querySelectorAll(".btnEl1");
  let allbtnAdd = Array.from(btnAdd);
  
  const newElem = [];
  
  allbtnAdd.forEach((elemen) => {
    elemen.addEventListener("click", function (event) {
      let btnelem = event.target.dataset.name;
      if (newElem.length > 0) {
        if (!newElem.some((e) => e.id === btnelem)) {
          prod.forEach((obj) => {
            if (obj.id === btnelem) {
              let parentAdd = event.target.parentElement;
              let countSize = parentAdd.querySelector(".activeS");
              let countSizeVal = countSize.innerText;
              // console.log(countSizeVal)
              obj.activeSize = countSizeVal;
            }
            btnelem === obj.id ? newElem.push(obj) : null;
            newElemLenght();
          });
        }
      } else {
        prod.forEach((obj) => {
          if (obj.id === btnelem) {
            let parentAdd = event.target.parentElement;
            let countSize = parentAdd.querySelector(".activeS");
            let countSizeVal = countSize.innerText;
            // console.log(countSizeVal);
            obj.activeSize = countSizeVal;
          }
          btnelem === obj.id ? newElem.push(obj) : null;
          newElemLenght();
        });
      }
    });
  });
  
  let cart1 = document.querySelector(".cart_basket");
  let divHeder1 = document.querySelector(".divHeder");
  
  function popupCart() {
    const cart = `
          <div class="cart">
          <div class="cart_body">
          <div class="cart_content">
          <p class="cart_close">&times;</p>
          <div class="cart_card"> 
          </div>
          <span class="cart_footer">
          <button class="cart_footer_order">ORDER</button>
          <span class="cart_footer_total_all">
          <span class="cart_footer_total">Total: </span>
          <span class="cart_footer_total_sum"></span>
          <span class="cart_footer_total_s">$ </span>
          </span>
          </span>
          </div>
          </div> 
          </div>  
            `;
    divHeder1.innerHTML = cart;
  }
  popupCart();
  
  let cartall = document.querySelector(".cart");
  let cart_close = document.querySelector(".cart_close");
  
  cart_close.addEventListener("click", (e) => {
    e.preventDefault();
    cartall.classList.remove("active");
  });
  cartall.addEventListener("click", (e) => {
    if (!e.target.closest(".cart_content")) {
      cartall.classList.remove("active");
    }
  });

  let cardAll = document.querySelectorAll(".cardEl");
let cardInner = Array.from(cardAll);
// console.log(cardInner);
cardInner.forEach((elemen) => {
  // console.log(elemen);
  let sizeElAl = elemen.querySelectorAll(".sizeEl");
  let sizeElAll = Array.from(sizeElAl);
  // console.log(sizeElAll);
  sizeElAll.forEach((elem) => {
    elem.addEventListener("click", function () {
      sizeElAll.forEach((elem) => {
        elem.classList.remove("activeS");
      });
      elem.classList.add("activeS");
    });
  });
});

function RenderSize(array, actClass) {
  let sizeAll = "";
  array.forEach((s) => {
    const classes =
      s === actClass.toLowerCase()
        ? `"activeS cart_size_active"`
        : "cart_size_active";
    sizeAll += `<span class=${classes} data-name="" >${s}</span>`;
  });

  return sizeAll;
}