<template>
  <div
    class="grid__item small--one-half medium--one-third large--one-third  product-grid-item"
  >
    <router-link to="/" class="grid__image">
      <img :src="product.image" alt="Atmosphere Pant" />
    </router-link>
    <bagBtn @click.native="addProductToCart(product, product.id)"
      ><i class="fas fa-shopping-cart"></i>{{ btnStat }}</bagBtn
    >
    <div class="figcaption under">
      <a href="javascript:void(0)"> </a>
      <p class="uppercase vendor__link">
        <a href="javascript:void(0)"><b></b></a
        ><b
          ><a href="javascript:void(0)">{{ product.title }}</a></b
        >
      </p>
      <p class="h6 name_wrapper">
        {{ product.name }}
      </p>
      <p class="price_wrapper">
        <span class="price">
          <span class="money">$ {{ product.price }}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import bagBtn from "./bagBtn.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      btnStat: "add to cart",
      disabled: "false"
    };
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getProductById"])
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    addProductToCart(product) {
      var vm = this;
      vm.ifProductInCart(product);
      if (vm.disabled == "false") {
        vm.addProduct(product);
        vm.disabled = "true";
        vm.btnStat = "In Cart";
      } else {
        console.log(product);
      }
    },

    ifProductInCart(product) {
      var vm = this;
      let id = product.id;
      if (vm.getProductById(id)) {
        vm.disabled = "true";
        vm.btnStat = "In Cart";
      } else {
        vm.disabled = "false";
        vm.btnStat = "Add to Cart";
      }
    }
  },
  components: {
    bagBtn
  },
  props: {
    product: Object
  }
};
</script>

<style lang="css"></style>
