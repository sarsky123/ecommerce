<template>
  <div>
    <div
      class="cart__row pl-3"
      v-for="(item, index) in getProductsInCart"
      :key="index"
      :data-id="item.id"
    >
      <div class="grid--full flex-row d-flex align-items-center cart-content">
        <div class="grid__item col-6">
          <div class="grid--full d-flex flex-row align-items-center">
            <div class="grid__item col-7 col-sm-7 p-0 p-md-3">
              <div class="cart__image">
                <img :src="item.image" :alt="item.name" />
              </div>
            </div>

            <div class="grid__item col cart__item__title">
              <a href="javascript:void(0)" class="h4--body mb-3"
                >{{ item.name }}
              </a>

              <p>$ {{ item.price }}</p>

              <p>{{ item.title }}</p>

              <a
                href="javascript:void(0)"
                class="cart__remove uppercase lighten ajaxcart__remove mt-5"
                @click="remove(index)"
              >
                <small>Remove</small>
              </a>
            </div>
          </div>
        </div>

        <div class="grid__item col-6">
          <div
            class="grid--full d-flex flex-column align-items-center justify-content-center w-100"
          >
            <div class="grid__item one-third text-center p-0 ">
              <span class="h3--body money">Price ${{ item.price }}</span>
            </div>

            <div class="grid__item col-4  my-3">
              <div
                class="ajaxcart__qty w-100 justify-content-center d-flex flex-row p-1 py-2 align-items-center"
              >
                <font-awesome-icon
                  class="ajaxcart__qty-adjust minus fill-flex"
                  @click="decrementAmount(item.id, index)"
                  :icon="['fas', 'minus']"
                />

                <input
                  type="text"
                  class="p-1 w-30  fill-flex border-0 text-center"
                  :value="item.amount"
                  min="0"
                  aria-label="quantity"
                  pattern="[0-9]*"
                />
                <font-awesome-icon
                  class="ajaxcart__qty-adjust minus fill-flex "
                  @click="incrementAmount(item.id)"
                  :icon="['fas', 'plus']"
                />
              </div>
            </div>

            <div
              class="grid__item one-third text-right totalHere  text-center p-0"
            >
              <span class="cart__mini-labels">Total</span>
              <span class="h3--body iteMoney">
                ${{ item.price * item.amount }}</span
              >
            </div>
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

<style lang="scss">
.cart-content {
}
.cart__image {
  > img {
    width: auto;
    max-height: 180px;
    display: block;
    object-fit: cover;
    overflow: hidden;
  }
}
</style>
