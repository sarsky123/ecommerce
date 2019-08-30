/* Document Queryselect */
const productDOM = document.querySelector(".grid-uniform");
const menuToggle = document.querySelector(".menuToggle");
const headerMenu = document.querySelector(".header-menu");
const cartBtn = document.querySelectorAll(".cartToggle");
const closeCartBtn = document.querySelector(".closeCart");
const clearCartBtn = document.querySelector(".clear-btn");
const cartDOM = document.querySelector(".whole-cart");
const cartOverlay = document.querySelector(".cartoverlay");
const cartItems = document.querySelector(".cartCount");
const cartTotal = document.querySelector(".subtotal-money");
const cartContent = document.querySelector(".cart__body");
const menuCart = document.querySelector(".menuCart");
const cartItemTotal = document.querySelector(".iteMoney");
const body = document.querySelector("body");
const modal = document.querySelector(".cart-modal");
//cart
let cart = [];
//buttonDOM
let buttonDOM = [];
//meida
//show & hide
/*get API from contentful*/

/* Display products */
class UI {
  //button
  getBagButton() {
    const button = [...document.querySelectorAll(".bag-btn")];
    buttonDOM = button;
    button.forEach(button => {
      let id = button.dataset.id;
      let inCart = cart.find(item => item === id);
      if (inCart) {
        buttonDOM.innerText = "In Cart";
        buttonDOM.disabled = true;
      }
      button.addEventListener("click", event => {
        event.target.innerText = "In Cart";
        event.target.disabled = true;
        //get product from items
        let cartItem = { ...Storage.getProducts(id), amount: 1 };
        //add products to the cart
        cart = [...cart, cartItem];
        //save the cart into storage
        Storage.saveCart(cart);
        //set the cart values

        this.setCartValue(cart);
        //display cart item
        this.addCartItem(cartItem);
        //show the cart
      });
    });
  }

  hideMenu() {
    headerMenu.classList.add("noShowMeWhatUGot");
  }
  showMenu() {
    headerMenu.classList.remove("noShowMeWhatUGot");
  }
  mediaMenu() {
    if (matchMedia) {
      const mq = window.matchMedia("(max-width: 960px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
    function WidthChange(mq) {
      if (mq.matches) {
        headerMenu.classList.add("noShowMeWhatUGot");
      } else {
        headerMenu.classList.remove("noShowMeWhatUGot");
      }
    }
  }
  toggleMenu() {
    menuToggle.addEventListener("click", () => {
      if (headerMenu.classList.contains("noShowMeWhatUGot")) {
        this.showMenu();
      } else {
        this.hideMenu();
      }
    });
  }
  //cart
  showCart() {
    cartOverlay.classList.add("is-visable");
    body.classList.add("noscroll");
    cartDOM.classList.add("is-visable");
    cartDOM.classList.remove("noscroll");
  }
  hideCart() {
    cartOverlay.classList.remove("is-visable");
    cartDOM.classList.remove("is-visable");
    body.classList.remove("noscroll");
  }
  setupAPP() {
    this.mediaMenu();
    this.toggleMenu();
    for (let i = 0; i < cartBtn.length; i++) {
      cartBtn[i].addEventListener("click", this.showCart);
    }
    closeCartBtn.addEventListener("click", this.hideCart);
    //overlay hiding
    document.addEventListener("click", function(event) {
      var specifiedElement = modal;
      var overlayClicked = cartOverlay.contains(event.target);
      var isClickInside = specifiedElement.contains(event.target);
      if (!isClickInside && overlayClicked) {
        cartOverlay.classList.remove("is-visable");
        cartDOM.classList.remove("is-visable");
        body.classList.remove("noscroll");
      }
    });
  }
  cartLogic() {
    //overlay clear

    //clear cart btn
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });
    //cart functionality
    cartContent.addEventListener("click", event => {
      if (event.target.classList.contains("cart__remove")) {
        let remove = event.target;
        let id = remove.dataset.id;
        cartContent.removeChild(
          remove.parentElement.parentElement.parentElement.parentElement
            .parentElement
        );
        this.removeItem(id);
      } else if (event.target.classList.contains("plus")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount++;
        let total = tempItem.amount * tempItem.price;
        Storage.saveCart(cart);
        this.setCartValue(cart);

        addAmount.previousElementSibling.value = tempItem.amount;
        addAmount.parentElement.parentElement.nextElementSibling.children[1].innerHTML = total;
      } else if (event.target.classList.contains("minus")) {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;

        let tempItem = cart.find(item => item.id == id);
        tempItem.amount--;
        let total = tempItem.amount * tempItem.price;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValue(cart);
          lowerAmount.nextElementSibling.value = tempItem.amount;
          lowerAmount.parentElement.parentElement.nextElementSibling.children[1].innerHTML = total;
        } else {
          cartContent.removeChild(
            lowerAmount.parentElement.parentElement.parentElement.parentElement
              .parentElement.parentElement.parentElement
          );

          this.removeItem(id);
        }
      }
    });
  }
  clearCart() {
    let cartItem = cart.map(item => item.id);
    cartItem.forEach(id => this.removeItem(id));
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }
  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setCartValue(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>
              add to cart`;
  }
  getSingleButton(id) {
    return buttonDOM.find(button => button.dataset.id === id);
  }
  setCartValue(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;

    cart.map(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });

    const total = "$" + parseFloat(tempTotal).toFixed(2);
    cartTotal.innerText = "$" + parseFloat(tempTotal).toFixed(2);
    cartItems.innerHTML = `${itemsTotal}`;

    menuCart.innerHTML = `Cart (${total})`;
  }
  addCartItem(item) {
    const div = document.createElement("div");

    div.innerHTML += `
    <div class="cart__row" data-id=${item.id}>
          <div class="grid--full cart__row--table-large cart-content">
            <div class="grid__item large--one-half">
              <div class="grid--full cart__row--table-large">

                <div class="grid__item one-third">
                  <a href="javascript:void(0)" class="cart__image">
                    <img src="${item.image}" alt="${item.name}">
                  </a>
                </div>

                <div class="grid__item two-thirds cart__item__title">
                  <a href="javascript:void(0)" class="h4--body">${item.name}
                  </a>
                  
                    <p >$ ${item.price}</p>
                  

                  
                    <p>${item.title}</p>
                  

                  
                  

                  <a href="javascript:void(0)" class="cart__remove uppercase lighten ajaxcart__remove" data-id=${item.id}>
                    <small>Remove</small>
                  </a>
                </div>

              </div>
            </div>

            <div class="grid__item large--one-half">
              <div class="grid--full cart__row--table-large">
                
                  <div class="grid__item one-third text-left">
                    
                    <span class="h3--body money">$ ${item.price}</span>
                  </div>

                  <div class="grid__item one-third text-center">
                    
                    
  
    <div class="ajaxcart__qty">
      <button type="button" class="ajaxcart__qty-adjust minus" data-id=${item.id} >−</button>
      <input type="text" class="ajaxcart__qty-num" value="${item.amount}" min="0" data-id=${item.id} aria-label="quantity" pattern="[0-9]*">
      <button type="button" class="ajaxcart__qty-adjust plus" data-id=${item.id} >+</button>
    </div>
  
  
                  </div>
                

                <div class="grid__item one-third text-right totalHere">
                  <span class="cart__mini-labels">Total</span>
                  <span class="h3--body iteMoney">${item.price}</span>
                </div>
              </div>

              <div class="ajaxcart__errors hidden errors text-center" id="ajaxcart__item__11815313113124__errors">
                All available stock is in cart
              </div>
            </div>
            </div>
            </div>

          `;
    cartContent.appendChild(div);
  }
}

/* local storage */
class Storage {
  static saveProduct(products) {
    window.localStorage.setItem("products", JSON.stringify(products));
  }
  static getProducts(id) {
    let products = JSON.parse(window.localStorage.getItem("products"));
    return products.find(products => products.id === id);
  }
  static saveCart(cart) {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
}

/*initiation */
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
  ui.setupAPP();
  products
    .getProducts()
    .then(products => {
      Storage.saveProduct(products);
      ui.displayProduct(products);
    })
    .then(() => {
      ui.cartLogic();
      ui.getBagButton();
    });
});
