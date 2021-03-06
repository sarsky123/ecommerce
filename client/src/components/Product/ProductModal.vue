<template>
  <div
    class="row flex-row align-items-center product-detail bg-white pt-sm-5 mb-3 w-100"
  >
    <div class="col-10 mx-auto col-sm-7 px-lg-5 product-detail-img">
      <img
        :src="products.Image"
        :alt="products.Name"
        class="w-100 h-100 d-block px-3 no-gutters"
      />
    </div>
    <div class="col-12 col-sm-5 px-5">
      <h3 class="border-bottom pb-2 border-dark">{{ products.Name }}</h3>
      <p class="p_detail_title">{{ products.Title }}</p>
      <p class="p_detail_price">$ {{ products.Price }}</p>
      <div class="detail-description ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          sit.
        </p>
        <button class="btn"></button>
      </div>
      <div class="optional dropdown w-100">
        <b-col es="12" sm="12" class="px-0  mx-0">
          <b-dropdown
            id="dropdown-1"
            text="Optional Choice"
            class="bg-white w-100"
            variant="outline-dark"
            toggle-class="bg-light text-dark"
            menu-class="w-100"
          >
            <b-dropdown-item>Small</b-dropdown-item>
            <b-dropdown-item>Medium</b-dropdown-item>
            <b-dropdown-item>Large</b-dropdown-item>
            <b-dropdown-item>Extra Large</b-dropdown-item></b-dropdown
          >
        </b-col>

        <div class="opt_text pt-2"></div>
        <div
          class="w-100 d-flex flex-row align-items-center justify-content-center"
        >
          <button
            type="button"
            class="btn btn-dark flex-fill mt-3 text-uppercase"
            @click.prevent="addProductToCart(products)"
            v-if="!getProductById(products.ProductID)"
          >
            <font-awesome-icon class="mr-1" :icon="['fas', 'cart-plus']" />

            {{ btnStat }}
          </button>
          <button
            v-else
            type="button"
            class="btn btn-dark flex-fill mt-3 text-uppercase"
            @click.prevent="removeInCart(products)"
          >
            <font-awesome-icon
              class="mr-1"
              @click="removeInCart(products)"
              :icon="['fas', 'shopping-bag']"
            />
            {{ btnStat }}
          </button>
          <div
            class="btn btn-secondary flex-fill ml-1 mt-3 text-uppercase"
            v-if="loggedIn"
          >
            <div v-if="loggedIn && !bookmark" @click="addBookmark(products)">
              <font-awesome-icon :icon="['far', 'heart']" />
              Whishlist
            </div>
            <div v-else @click="removeBookmark(products)">
              <font-awesome-icon :icon="['fas', 'heart']" />
              Remove
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  props: {
    products: Object
  },
  data() {
    return {
      btnStat: "add to cart",
      disabled: "false",
      bookmark: null
    };
  },
  methods: {
    ...mapActions("cart", ["addProduct", "removeProduct"]),
    addProductToCart(product) {
      var vm = this;
      vm.ifProductInCart(product);
      if (vm.disabled == "false") {
        vm.addProduct(product);
      }
    },

    ifProductInCart(product) {
      var vm = this;
      let id = product.ProductID;
      if (vm.getProductById(id)) {
        vm.$set(vm, "disabled", "true");
        vm.$set(vm, "btnStat", "In Cart");
      } else {
        vm.$set(vm, "disabled", "false");
        vm.$set(vm, "btnStat", "Add to cart");
      }
    },
    async addBookmark(product) {
      try {
        const resp = await BookmarksService.post(product.ProductID);
        if (resp.status == 200) {
          this.$store.dispatch(
            "bookmark/addIndividualBookmark",
            resp.data.ProductID
          );
        }

        const notification = {
          type: "success",
          message: "Selected product has been added to whishlist"
        };
        this.$store.dispatch("notification/add", notification);
      } catch (err) {
        console.log(err);
        const notification = {
          type: "error",
          message: "Some problem occured when trying to add whishlist"
        };
        this.$store.dispatch("notification/add", notification);
      }
    },
    async removeBookmark(p) {
      try {
        var resp = await BookmarksService.delete(p.ProductID);
        if (resp.status === 200) {
          this.$store.dispatch("bookmark/deleteBookmark", resp.data.ProductID);
        }
        const notification = {
          type: "warning",
          message: "Selected product has been removed from whishlist"
        };
        this.$store.dispatch("notification/add", notification);
      } catch (err) {
        console.log(err);
        const notification = {
          type: "error",
          message: "Some problem occured when trying to remove whishlist"
        };
        this.$store.dispatch("notification/add", notification);
      }
    },
    removeInCart(p) {
      const index = this.getProductsInCart
        .map(cartP => cartP.ProductID)
        .indexOf(p.id);
      if (index > -1) {
        this.removeProduct(index);
      }
    },
    async fetchBookmark() {
      const bookmark = await BookmarksService.index();
      if (bookmark.status === 200) {
        this.$store.dispatch("bookmark/setBookmark", bookmark.data);
      }
    }
  },

  computed: {
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("cart", ["getProductsInCart", "getProductById"]),
    ...mapGetters("authentication", ["loggedIn"]),
    ...mapGetters("bookmark", ["getBookmarks"])
  },
  created() {
    if (this.loggedIn) {
      this.fetchBookmark();
    }
  },
  async mounted() {
    if (!this.loggedIn || !this.products) {
      return;
    }
    try {
      const bookmarks = (await BookmarksService.index({
        ProductID: this.products.ProductID
      })).data;
      if (bookmarks.length) {
        const indexedBookmark = bookmarks[0];
        this.bookmark = !!(
          this.getBookmarks.indexOf(indexedBookmark.ProductID) > -1
        );
      }
    } catch (err) {
      console.log(err);
    }
  },
  watch: {
    getProductsInCart: {
      immediate: true,
      handler: function() {
        this.ifProductInCart(this.products);
      }
    },
    getBookmarks: {
      immediate: true,
      handler: function() {
        this.bookmark = !!(
          this.getBookmarks.indexOf(this.products.ProductID) > -1
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
  margin: 0 auto;
  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    max-height: 400px;
    overflow: hidden;
    object-fit: cover;
    > img {
      display: block;
      max-width: 700px;
      max-height: 700px;
      overflow: hidden;
      object-fit: cover;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
