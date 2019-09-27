<template>
  <div class="homepage-collection homepage-white">
    <div class="wrapper">
      <h4 class="home_subtitle">Featured Products</h4>

      <div class="grid-uniform clearfix">
        <catalog
          v-for="(product, index) in this.getProducts.slice(26, 40)"
          :key="index"
          :product="product"
        ></catalog>
      </div>
    </div>
  </div>
</template>

<script>
import catalog from "@/components/catalog.vue";

import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    catalog
  },
  created() {
    this.$store.dispatch("product/fetchProducts");
  },

  computed: {
    ...mapState(["product"]),
    ...mapGetters("product", ["getProducts"])
  }
};
</script>

<style lang="css"></style>
