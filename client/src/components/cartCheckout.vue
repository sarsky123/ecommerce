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
            <h3>Your Cart</h3>
            <div class="cart__body">
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
                      class="btn-secondary btn border-dark text-uppercase"
                      @click.prevent="clearTheCart()"
                      >Clear cart</a
                    >
                  </p>
                  <span>
                    <input
                      type="submit"
                      name="checkout"
                      class="btn uppercase btn btn-dark w-100  rounded-0 py-3 mt-3"
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
import cart from "@/components/cart.vue";
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
        var total = next.price * next.amount;
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

<style lang="css" scoped></style>
