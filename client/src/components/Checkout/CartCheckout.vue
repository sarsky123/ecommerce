<template>
  <div class="cartoverlay" v-if="cartOpend()" @click.self="showPopupCart()">
    <div class="whole-cart" @click.self="showPopupCart()">
      <div class="cart-modal">
        <button class="closeCart" @click.prevent="showPopupCart()"></button>
        <div class="cart__content">
          <div v-if="!hasProduct()">
            <div>
              <div class="row w-100">
                <div class="col mb-5">
                  <h3 class="capitalize py-3">Your Cart is empty</h3>
                  <p class="text-capitalize my-3">
                    click Button Below to our shop
                  </p>
                  <router-link :to="{ name: 'store' }">
                    <button @click="showPopupCart()" class="btn btn-dark ">
                      To Our store
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <form method="post" class="cart clearfix" v-if="hasProduct()">
            <h3 class="p-1">Your Cart</h3>
            <div class="cart__body" id="style-1">
              <cart></cart>
            </div>
            <div class="cart__footer clearfix">
              <div class="grid clearfix">
                <div class="grid__item">
                  <p class="cart__footer-text">
                    <span class="subtotal uppercase">Subtotal</span>
                    <span class="subtotal-money">${{ totalPrice() }}</span>
                  </p>
                  <p class="cart__footer__text">
                    <em>Shipping &amp; taxes calculated at checkout</em>
                  </p>
                  <p class="cart__footer-text">
                    <a
                      class="btn-secondary btn border-none text-uppercase text-light"
                      @click.prevent="clearTheCart()"
                      >Clear cart</a
                    >
                  </p>
                  <span @click="goCheckout()">
                    <input
                      name="checkout"
                      class="btn uppercase btn-dark w-100  rounded-0 py-3 mt-3"
                      value="Check Out"
                    />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cart from "@/components/Checkout/Cart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    cart
  },
  methods: {
    ...mapActions("cart", ["showOrHiddenPopupCart", "clearCart"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(function(current, next) {
        var total = next.Price * next.amount;
        return current + total;
      }, 0);
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
    cartOpend() {
      return this.getPopupCart;
    },
    incrementAmount(id) {
      const vm = this;
      var product = vm.getProductById(id);
      product.amount++;
    },
    clearTheCart() {
      this.clearCart();
    },
    goCheckout() {
      this.$router.push("/checkoutPage");
      this.showPopupCart();
    }
  },
  computed: {
    ...mapGetters("cart", [
      "getPopupCart",
      "getProductsInCart",
      "getProductById"
    ])
  }
};
</script>

<style lang="css" scoped>
.cart__body {
  border-bottom: 1px solid #ccc;
  max-height: 50vh;
  overflow: scroll;
}
#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

#style-1::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 2px rgba(134, 111, 111, 0.6);
  background-color: #aaa;
}
</style>
