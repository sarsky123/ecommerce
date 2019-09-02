<template>
  <div class="row">
    <div class="col-sm-4">
      <img :src="product.image" alt="product-image" />
    </div>
    <div class="col-sm-4">
      <h1></h1>
    </div>
    <div class="col-sm-4"></div>
  </div>
</template>

<script>
import {} from "vuex";
export default {
  props: {
    product: Object,
    id: {
      type: String
    }
  }
};
</script>

<style lang="css"></style>
