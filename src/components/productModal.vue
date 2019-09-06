<template>
  <div class="row product-detail bg-white pt-sm-5 mb-3 w-100">
    <div class="col-10 mx-auto col-sm-7 p-lg-5 ">
      <img
        :src="product.image"
        alt="product-image"
        class="w-100 h-100 d-block px-3 no-gutters"
      />
    </div>
    <div class="col-12 col-sm-5 px-5 pt-4">
      <h3 class="border-bottom pb-2 border-dark">{{ product.name }}</h3>
      <p class="p_detail_title">{{ product.title }}</p>
      <p class="p_detail_price">$ {{ product.price.toFixed(2) }}</p>
      <div class="detail-description ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          sit.
        </p>
        <button class="btn"></button>
      </div>
      <div class="optional dropdown">
        <b-col es="12" sm="12" class="px-0  mx-0">
          <b-dropdown
            id="dropdown-1"
            text="Optional Choice"
            class="bg-white w-100"
            variant="outline-dark"
          >
            <b-dropdown-item>Small</b-dropdown-item>
            <b-dropdown-item>Medium</b-dropdown-item>
            <b-dropdown-item>Large</b-dropdown-item>
            <b-dropdown-item>Extra Large</b-dropdown-item></b-dropdown
          >
        </b-col>

        <div class="opt_text pt-2"></div>
        <div class="col-12 px-0">
          <button
            type="button"
            class="btn btn-dark w-100 mt-3 text-uppercase"
            @click.prevent="addProductToCart(product)"
          >
            {{ btnStat }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    product: Object,
    id: {
      type: String
    }
  },
  data() {
    return {
      btnStat: "add to cart",
      disabled: "false",
      cart: []
    };
  },
  mounted() {
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
      let id = product.id;
      if (vm.getProductById(id)) {
        vm.$set(vm, "disabled", "true");
        vm.$set(vm, "btnStat", "In Cart");
      } else {
        vm.$set(vm, "disabled", "false");
        vm.$set(vm, "btnStat", "Add to cart");
      }
    }
  },

  computed: {
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("cart", ["getProductsInCart", "getProductById"])
  },
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

<style lang="scss" scoped></style>
