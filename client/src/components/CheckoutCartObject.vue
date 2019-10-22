<template>
  <div>
    <div
      class="cart__row py-2"
      v-for="(item, index) in getProductsInCart"
      :key="index"
      :data-id="item.ProductID"
    >
      <div class="grid--full flex-row d-flex align-items-center cart-content">
        <div class="grid__item col-8 p-0">
          <div class="grid--full d-flex flex-row align-items-center">
            <div class="grid__item col-5 col-sm-6 p-0">
              <div class="cart__image px-sm-3 py-2">
                <img :src="item.Image" :alt="item.Name" />
              </div>
            </div>

            <div
              class="grid__item col cart__item__title text-capitalize  p-0 pl-2 text-center"
            >
              <h5 class="item-Name">
                {{ item.Name }}
              </h5>

              <p>$ {{ item.Price }}</p>

              <p>{{ item.Title }}</p>

              <a
                href="javascript:void(0)"
                class="cart__remove uppercase lighten ajaxcart__remove my-3"
                @click="remove(index)"
              >
                <small>Remove</small>
              </a>
            </div>
          </div>
        </div>

        <div class="grid__item col-4 p-0">
          <div
            class="grid--full d-flex flex-column align-items-center justify-content-center w-100 h-100"
          >
            <div
              class="text-right totalHere  text-center p-0 d-flex flex-column align-items-center"
            >
              <span class="cart__mini-labels">Total</span>
              <span class="h3--body iteMoney">
                ${{ item.Price * item.amount }}</span
              >
            </div>
            <div
              class="w-100 justify-content-center d-flex flex-row align-items-center"
            >
              <p
                class="text-center mb-2 order-qty"
                min="0"
                aria-label="quantity"
                pattern="[0-9]*"
              >
                <span>Qty:</span>
                {{ item.amount }}
              </p>
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
        (current, next) => current + next.Price,
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

<style lang="scss" scoped>
.cart__row {
  border-bottom: 1px solid #aaaaaa;
}
.cart__image {
  height: 120px;
  > img {
    width: auto;
    height: 100%;
    display: block;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
  }
}

p {
  margin: 0;
  line-height: 1.7;
}
h5 {
  font-size: 15px;
}
.item-Name {
  color: #2e2e2d;
  font-weight: 300;
}
.order-qty {
  span {
    font-size: 10px;
  }
  font-size: 12px;
  color: #666;
  font-style: italic;
}
</style>
