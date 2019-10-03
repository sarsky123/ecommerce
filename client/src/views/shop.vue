<template>
  <div>
    <div class="shop-header mt-5"></div>
    <div class="collection homepage-collection ">
      <div class="hero-image py-5">
        <div class="row">
          <div class="col">
            <div class="gradient"></div>
          </div>
        </div>
      </div>
      <template :products="products" v-for="(gender, index) in this.gender">
        <div class="wrapper shop-wrapper" :key="'gender# ' + index">
          <h4 class="subtitle">{{ gender }}</h4>

          <div class="grid-uniform clearfix">
            <catalog
              v-for="(product, index) in products
                .filter(item => item.Gender == Gender)
                .slice(0, 8)"
              :key="index"
              :product="product"
            ></catalog>
          </div>
        </div>
      </template>
      <template :products="products" v-for="(category, index) in this.category">
        <div
          class="wrapper shop-wrapper"
          :key="'category# ' + index"
          v-if="products.filter(item => item.category == category).length > 0"
        >
          <h4 class="subtitle">{{ category }}</h4>

          <div class="grid-uniform clearfix">
            <catalog
              v-for="(product, index) in products
                .filter(item => item.Category == Category)
                .slice(0, 8)"
              :key="index"
              :product="product"
            ></catalog>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import catalog from "@/components/catalog.vue";

import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      gender: ["man", "woman"],
      category: [
        "cloth",
        "bags",
        "hats",
        "sunglasses",
        "watches",
        "dresses",
        "coats",
        "jackets",
        "jeans",
        "boots",
        "sneakers",
        "gloves",
        "tops",
        "shorts",
        "skirts",
        "suits"
      ],
      products: {}
    };
  },
  components: {
    catalog
  },
  created() {
    this.$store.dispatch("product/fetchProducts");
    this.products = this.getProducts;
  },

  computed: {
    ...mapState(["product"]),
    ...mapGetters("product", ["getProducts"])
  },
  methods: {
    groupBy: function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    }
  }
};
</script>

<style lang="scss">
.grid__image > img {
  width: 100%;
}
.subtitle {
  text-transform: capitalize;
}
.shop-wrapper {
  border-bottom: 1px solid #000;
  padding: 50px;
}
</style>
