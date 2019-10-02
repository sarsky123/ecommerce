<template>
  <div class="w-100">
    <div class="d-flex flex-column w-100 text-center">
      <h3 class="wish-title">Your Whishlist</h3>
      <div class="whish-wrapper d-flex flex-row w-100 row">
        <div
          class="col col-sm-6 col-md-4 col-lg-3 py-3 mb-2 d-flex flex-column
            align-items-center justify-content-center text-center whishlist-box"
          v-for="(whishProduct, index) in this.bookmark"
          :key="index"
        >
          <div class="">
            <img :src="whishProduct.Image" :alt="whishProduct.Name" />
          </div>
          <div class="col d-flex flex-column whish-info">
            <div class="col">{{ whishProduct.Name }}</div>
            <div class="col">{{ whishProduct.Title }}</div>
            <div class="col">$ {{ whishProduct.Price }}</div>
          </div>
          <span class="align-self-end close-button"
            ><font-awesome-icon
              :icon="['fas', 'times']"
              @click="removeBookmark(whishProduct)"
            ></font-awesome-icon
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BookmarksService from "../../services/BookmarksService";
export default {
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapGetters("authentication", ["loggedIn"]),
    ...mapState("authentication", ["isUserLoggedIn"])
  },
  async mounted() {
    if (!this.loggedIn) {
      console.log("mounted access deny");
      return;
    }
    try {
      this.bookmark = (await BookmarksService.index()).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async removeBookmark(p) {
      try {
        await BookmarksService.delete(p.ProductID);
      } catch (err) {
        console.log(err);
      }
      this.bookmark = (await BookmarksService.index()).data;
    }
  }
};
</script>

<style lang="scss" scoped>
.wish-title {
  color: white;
  background-color: #e3aaaa;
  border: 3px solid #e3aac7;
  text-shadow: 1px 1px 1px #e3aac7, 1px 1px 1px #e3aac7, 1px 1px 1px #e3aac7;
  box-shadow: -3px 3px 2px #ca6f6f;
  font-size: 18px;
  padding: 10px;
  opacity: 0.4;
}
.whish-wrapper {
  padding: 5px 0;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}
.whishlist-box {
  min-width: 250px;
  position: relative;
  > div:first-child {
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 200px;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .whish-info {
    div {
      margin-bottom: 20px;
      font-size: 16px;
    }
  }
  .close-button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
