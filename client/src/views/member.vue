<template>
  <div class="w-100 view-wrapper">
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody v-for="(whishProduct, index) in this.bookmark" :key="index">
            <tr>
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ whishProduct.Name }}</td>
              <td>{{ whishProduct.Title }}</td>
              <td>{{ whishProduct.Price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "../services/BookmarksService";

export default {
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapState("authentication", ["isUserLoggedIn"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmark = (await BookmarksService.index()).data;
    }
  },
  methods: {
    name() {}
  }
};
</script>

<style lang="scss" scoped>
.view-wrapper {
  margin-top: 150px;
}
</style>
