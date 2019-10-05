<template>
  <div class="w-100 col">
    <table class="table table-striped my-3">
      <thead class="text-capitalize">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Vendor</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(bh, index) in getHistoryProducts"
          :key="index"
          @click="pushTo('product-detail', bh.ProductID)"
        >
          <th scope="row" class="text-capitalize">{{ bh.Name }}</th>
          <td>{{ bh.Title }}</td>
          <td>{{ bh.Price }}</td>
          <td class="text-uppercase">{{ bh.Category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HistoryService from "../../services/BrowsingHistoryService";

export default {
  data() {
    return {
      BrowsingHistory: []
    };
  },
  async mounted() {
    try {
      this.BrowsingHistory = (await HistoryService.get()).data;
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters("product", ["getProductById", "getProducts"]),
    getHistoryProducts() {
      var data = [];
      data = this.BrowsingHistory.map(bh => bh.historyProduct);
      return this.getProducts.filter(gp => data.indexOf(gp.ProductID) > 0);
    }
  },
  methods: {
    pushTo(toRoute, params) {
      this.$router.push({
        name: toRoute,
        params: { ProductID: params }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
