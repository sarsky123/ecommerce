<template>
  <div class="col p-0 py-3 text-center">
    <orderHistoryItem
      v-for="orderhistory in this.getProducts.slice(0, 5)"
      :key="orderhistory.ProductID"
      :orderItem="orderhistory"
    ></orderHistoryItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import orderHistoryItem from "../member/OrderHistoryItem";
export default {
  computed: {
    ...mapGetters("product", ["getProducts"])
  },
  components: {
    orderHistoryItem
  }
};
</script>

<style lang="scss" scoped></style>
