<template>
  <div
    class="grid__item small--one-half medium--one-third large--one-third  product-grid-item"
  >
    <div class="grid__image">
      <div class="hover-cover">
        <div
          @click.self="pushTo('product-detail', product.ProductID)"
          class="d-flex flex-column justify-content-between align-items-center"
        >
          <div>
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <font-awesome-icon :icon="['fab', 'instagram']" class="ml-3" />
          </div>
          <div>
            <font-awesome-icon
              @click="pushTo('product-detail', product.ProductID)"
              :icon="['fas', 'search']"
              class="cover-search"
            />
          </div>
          <div class="d-flex flex-row algin-items-center hover-cover_bar">
            <span v-if="loggedIn" class="mr-3">
              <font-awesome-icon
                v-if="ifBookMarked(product)"
                @click="removeBookmark(product)"
                :icon="['fas', 'heart']"
              />
              <font-awesome-icon
                v-else
                @click="addBookmark(product)"
                :icon="['far', 'heart']"
              />
            </span>
            <div @click="addProductToCart(product)">
              <font-awesome-icon
                v-if="!getProductById(product.ProductID)"
                :icon="['fas', 'cart-plus']"
              />
              <font-awesome-icon v-else :icon="['fas', 'shopping-bag']" />
            </div>
          </div>
        </div>
      </div>
      <router-link
        class="d-b w-100 h-100"
        :to="{
          name: 'product-detail',
          params: { ProductID: product.ProductID }
        }"
      >
        <img
          :src="product.Image"
          class="grid__image"
          alt="product.name + '#' + product.id"
        />
      </router-link>
    </div>
    <div class="figcaption under">
      <p class="uppercase vendor__link">
        <b
          ><a href="javascript:void(0)">{{ product.Title }}</a></b
        >
      </p>
      <p class="h6 name_wrapper">
        {{ product.Name }}
      </p>
      <p class="price_wrapper">
        <span class="price">
          <span class="money">$ {{ product.Price }}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import BookmarksService from "@/services/BookmarksService.js";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: function() {
    return {
      btnStat: "add to cart",
      disabled: "false",
      cart: [],
      bookmark: [],
      dectection: false
    };
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getProductById"]),
    ...mapState("cart", ["cartProducts"]),
    ...mapGetters("authentication", ["loggedIn"])
  },
  mounted() {
    //binding store data to local scale so that we could apply watch into it
    this.cart = this.getProductsInCart;
    this.fetchBookmark();
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
      let id = product.ProductID;
      if (vm.getProductById(id)) {
        vm.$set(vm, "disabled", "true");
        vm.$set(vm, "btnStat", "In Cart");
      } else {
        vm.$set(vm, "disabled", "false");
        vm.$set(vm, "btnStat", "Add to cart");
      }
    },
    pushTo(toRoute, params) {
      this.$router.push({
        name: toRoute,
        params: { ProductID: params }
      });
    },
    async addBookmark(product) {
      try {
        await BookmarksService.post(product.ProductID);
      } catch (err) {
        console.log(err);
      }
      this.dectection = !this.dectection;
    },
    async removeBookmark(p) {
      try {
        await BookmarksService.delete(p.ProductID);
      } catch (err) {
        console.log(err);
      }
      this.dectection = !this.dectection;
    },

    async fetchBookmark() {
      this.bookmark = (await BookmarksService.index()).data;
    },
    ifBookMarked(p) {
      return (
        this.bookmark.map(bookmark => bookmark.ProductID).indexOf(p.ProductID) >
        -1
      );
    }
  },
  components: {},
  props: {
    product: Object
  },
  //listening any change of the cart in data and response to it
  watch: {
    cart: {
      immediate: true,
      handler: function() {
        this.ifProductInCart(this.product);
      }
    },
    async dectection() {
      this.fetchBookmark();
    }
  }
};
</script>

<style lang="css"></style>
