<template>
  <div
    class="grid__item small--one-half medium--one-third large--one-third  product-grid-item"
  >
    <router-link
      :to="{
        name: 'product-detail',
        params: { ProductID: product.ProductID }
      }"
    >
      <img
        :src="product.Image"
        class="grid__image"
        alt="product.name + '#' + product.id"
      />
    </router-link>
    <bagBtn @click.native="addProductToCart(product, product.ProductID)"
      ><i class="fas fa-shopping-cart"></i>{{ btnStat }}</bagBtn
    >
    <div class="figcaption under">
      <p class="uppercase vendor__link">
        <b
          ><a href="javascript:void(0)">{{ product.Title }}</a></b
        >
      </p>
      <p class="h6 name_wrapper">
        {{ product.Name }}
      </p>
      <p class="price_wrapper">
        <span class="price">
          <span class="money">$ {{ product.Price }}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import bagBtn from "./bagBtn.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: function() {
    return {
      btnStat: "add to cart",
      disabled: "false",
      cart: []
    };
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getProductById"]),
    ...mapState("cart", ["cartProducts"])
  },
  mounted() {
    //binding store data to local scale so that we could apply watch into it
    this.cart = this.getProductsInCart;
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    addProductToCart(product) {
      var vm = this;
      vm.ifProductInCart(product);
      if (vm.disabled == "false") {
        vm.addProduct(product);
      }
    },

    ifProductInCart(product) {
      var vm = this;
      let id = product.ProductID;
      if (vm.getProductById(id)) {
        vm.$set(vm, "disabled", "true");
        vm.$set(vm, "btnStat", "In Cart");
      } else {
        vm.$set(vm, "disabled", "false");
        vm.$set(vm, "btnStat", "Add to cart");
      }
    }
  },
  components: {
    bagBtn
  },
  props: {
    product: Object
  },
  //listening any change of the cart in data and response to it
  watch: {
    cart: {
      immediate: true,
      handler: function() {
        this.ifProductInCart(this.product);
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
