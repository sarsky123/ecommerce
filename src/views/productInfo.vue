<template>
  <div class="homepage-collection homepage-white">
    <div class="wrapper">
      <h4 class="home_subtitle">Featured Products</h4>

      <div class="grid-uniform clearfix">
        <catalog
          v-for="(product, index) in product.products"
          :key="index"
          :product="product"
        ></catalog>
      </div>
    </div>
  </div>
</template>

<script>
import catalog from "@/components/catalog.vue";

import { mapState } from "vuex";
export default {
  components: {
    catalog
  },
  created() {
    this.$store.dispatch("product/fetchProducts");
  },
  computed: {
    ...mapState(["product"])
  }
};
</script>

<style lang="css"></style>
