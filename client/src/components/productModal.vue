<template>
  <div
    class="row flex-row align-items-center product-detail bg-white pt-sm-5 mb-3 w-100"
  >
    <div class="col-10 mx-auto col-sm-7 px-lg-5 ">
      <img
        :src="products.image"
        alt="product-image"
        class="w-100 h-100 d-block px-3 no-gutters"
      />
    </div>
    <div class="col-12 col-sm-5 px-5">
      <h3 class="border-bottom pb-2 border-dark">{{ products.name }}</h3>
      <p class="p_detail_title">{{ products.title }}</p>
      <p class="p_detail_price">$ {{ products.price }}</p>
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
          >
            <font-awesome-icon
              class="mr-1"
              :icon="['fas', 'cart-plus']"
              v-if="!getProductById(products.id)"
            />
            <font-awesome-icon
              v-else
              class="mr-1"
              :icon="['fas', 'shopping-bag']"
            />
            {{ btnStat }}
          </button>
          <div
            class="btn btn-secondary flex-fill ml-1 mt-3 text-uppercase"
            v-if="loggedIn"
          >
            <div v-if="loggedIn && !bookmark">
              <font-awesome-icon
                @click="addBookmark(products)"
                :icon="['far', 'heart']"
              />
              Whishlist
            </div>
            <div v-else>
              <font-awesome-icon
                @click="removeBookmark(products)"
                :icon="['fas', 'heart']"
              />
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
      cart: [],
      bookmark: null
    };
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
    },
    async addBookmark(product) {
      try {
        await BookmarksService.post(product);
      } catch (err) {
        console.log(err);
      } finally {
        this.bookmark = (await BookmarksService.index({
          id: product.id
        })).data;
      }
    },
    async removeBookmark(p) {
      try {
        await BookmarksService.delete(p.id);
      } catch (err) {
        console.log(err);
      } finally {
        this.bookmark = null;
      }
    }
  },

  computed: {
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("cart", ["getProductsInCart", "getProductById"]),
    ...mapGetters("authentication", ["loggedIn"])
  },
  async mounted() {
    if (!this.loggedIn && this.products.id) {
      console.log("mounted access deny");
      return;
    }
    try {
      const bookmarks = (await BookmarksService.index({
        id: this.products.id
      })).data;
      if (bookmarks.length) {
        this.bookmark = bookmarks[0];
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("mounted access success" + this.bookmark + this.products.id);
    }
  },
  watch: {
    cart: {
      immediate: true,
      handler: function() {
        this.ifProductInCart(this.products);
      }
    },
    async product() {}
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
    max-width: 700px;
    max-height: 700px;
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
