<template>
  <div>
    <div
      class="cart__row"
      v-for="(item, index) in getProductsInCart"
      :key="index"
      :data-id="item.id"
    >
      <div class="grid--full cart__row--table-large cart-content">
        <div class="grid__item large--one-half">
          <div class="grid--full cart__row--table-large">
            <div class="grid__item one-third">
              <a href="javascript:void(0)" class="cart__image">
                <img :src="item.image" :alt="item.name" />
              </a>
            </div>

            <div class="grid__item two-thirds cart__item__title">
              <a href="javascript:void(0)" class="h4--body">{{ item.name }} </a>

              <p>$ {{ item.price }}</p>

              <p>{{ item.title }}</p>

              <a
                href="javascript:void(0)"
                class="cart__remove uppercase lighten ajaxcart__remove"
                @click="remove(index)"
              >
                <small>Remove</small>
              </a>
            </div>
          </div>
        </div>

        <div class="grid__item large--one-half">
          <div class="grid--full cart__row--table-large">
            <div class="grid__item one-third text-left">
              <span class="h3--body money">$ {{ item.price }}</span>
            </div>

            <div class="grid__item one-third text-center">
              <div class="ajaxcart__qty">
                <button
                  type="button"
                  class="ajaxcart__qty-adjust minus"
                  @click="decrementAmount(item.id, index)"
                >
                  −
                </button>
                <input
                  type="text"
                  class="ajaxcart__qty-num"
                  :value="item.amount"
                  min="0"
                  aria-label="quantity"
                  pattern="[0-9]*"
                />
                <button
                  type="button"
                  class="ajaxcart__qty-adjust plus"
                  @click="incrementAmount(item.id)"
                >
                  +
                </button>
              </div>
            </div>

            <div class="grid__item one-third text-right totalHere">
              <span class="cart__mini-labels">Total</span>
              <span class="h3--body iteMoney"
                >$ {{ item.price * item.amount }}</span
              >
            </div>
          </div>

          <div
            class="ajaxcart__errors hidden errors text-center"
            id="ajaxcart__item__11815313113124__errors"
          >
            All available stock is in cart
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {},
  methods: {
    ...mapActions("cart", ["showOrHiddenPopupCart", "removeProduct"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
    totalCal(product) {
      this.total(product);
    },

    remove(index) {
      this.removeProduct(index);
    },

    incrementAmount(id) {
      const vm = this;
      var product = vm.getProductById(id);
      product.amount++;
    },
    decrementAmount(id, index) {
      const vm = this;
      var product = vm.getProductById(id);
      if (product.amount > 1) {
        product.amount--;
      } else {
        vm.remove(index);
      }
    }
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getProductById"])
  }
};
</script>

<style lang="css" scoped></style>
