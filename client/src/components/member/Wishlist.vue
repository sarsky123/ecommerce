<template>
  <div class="w-100">
    <div>
      <h3 class="text-capitalize text-center  pt-4 border-bottom">
        Recently Added
        <span class="arrow-container ">
          <div
            :class="
              recentAddedFolded ? 'center-con' : 'center-con rotate-reverse'
            "
          >
            <div class="round" @click="toggleAddedFolded()">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </span>
      </h3>
    </div>
    <div
      :class="
        recentAddedFolded
          ? 'whish-wrapper d-flex flex-row w-100 row faded'
          : 'whish-wrapper d-flex flex-row w-100 row'
      "
    >
      <div
        class="col col-sm-6 col-md-4 col-lg-3 py-4 mb-2 d-flex flex-column
            align-items-center justify-content-center text-center wishlist-box"
        v-for="(wishProduct, index) in recentAdded"
        :key="index"
      >
        <div class="col image-cover">
          <div class="hover-cover">
            <div
              @click.self="pushTo('product-detail', wishProduct.ProductID)"
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <font-awesome-icon
                  @click="pushTo('product-detail', wishProduct.ProductID)"
                  :icon="['fas', 'search']"
                  class="cover-search"
                />
              </div>
            </div>
          </div>
          <img :src="wishProduct.Image" :alt="wishProduct.Name" />
        </div>
        <div class="col mt-2 d-flex flex-column whish-info text-left">
          <h5>{{ wishProduct.Name }}</h5>
          <h3>{{ wishProduct.Title }}</h3>
          <p>${{ wishProduct.Price }}</p>
        </div>
        <div class="w-100 col">
          <button
            :class="
              getProductById(wishProduct.ProductID)
                ? 'btn btn-secondary text-capitalize rounded-0 w-100 align-self-end'
                : 'btn btn-dark text-capitalize rounded-0 w-100 align-self-end'
            "
            :disabled="getProductById(wishProduct.ProductID)"
          >
            <span
              v-if="getProductById(wishProduct.ProductID)"
              class="d-flex flex-row align-items-center justify-content-center"
              ><font-awesome-icon
                class="mr-3 d-inline-block"
                :icon="['fas', 'shopping-bag']"
              />
              <span>in cart</span></span
            >
            <span
              v-else
              @click="addProductToCart(wishProduct)"
              class="d-flex flex-row align-items-center justify-content-center"
              ><font-awesome-icon
                class="mr-3 d-inline-block"
                :icon="['fas', 'cart-plus']"
              />
              <span>add to cart</span></span
            >
          </button>
        </div>
        <span class="align-self-end close-button"
          ><font-awesome-icon
            :icon="['fas', 'times']"
            @click="removeBookmark(wishProduct)"
          ></font-awesome-icon
        ></span>
      </div>
    </div>
    <div class="d-flex flex-column w-100 text-center">
      <h3 class="wish-title">Your Wishlist</h3>
      <div class="whish-wrapper d-flex flex-row w-100 row">
        <div
          class="col col-sm-6 col-md-4 col-lg-3 py-4 mb-2 d-flex flex-column
            align-items-center justify-content-center text-center wishlist-box"
          v-for="(wishProduct, index) in this.bookmark"
          :key="index"
        >
          <div class="col image-cover">
            <div class="hover-cover">
              <div
                @click.self="pushTo('product-detail', wishProduct.ProductID)"
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <div>
                  <font-awesome-icon
                    @click="pushTo('product-detail', wishProduct.ProductID)"
                    :icon="['fas', 'search']"
                    class="cover-search"
                  />
                </div>
              </div>
            </div>
            <img :src="wishProduct.Image" :alt="wishProduct.Name" />
          </div>
          <div class="col mt-2 d-flex flex-column whish-info text-left">
            <h3>{{ wishProduct.Name }}</h3>
            <h5>{{ wishProduct.Title }}</h5>
            <p>$ {{ wishProduct.Price }}</p>
          </div>
          <div class="w-100 col">
            <button
              :class="
                getProductById(wishProduct.ProductID)
                  ? 'btn btn-secondary text-capitalize rounded-0 w-100 align-self-end'
                  : 'btn btn-dark text-capitalize rounded-0 w-100 align-self-end'
              "
              :disabled="getProductById(wishProduct.ProductID)"
            >
              <span
                v-if="getProductById(wishProduct.ProductID)"
                class="d-flex flex-row align-items-center justify-content-center"
                ><font-awesome-icon
                  class="mr-3 d-inline-block"
                  :icon="['fas', 'shopping-bag']"
                />
                <span>in cart</span></span
              >
              <span
                v-else
                @click="addProductToCart(wishProduct)"
                class="d-flex flex-row align-items-center justify-content-center"
                ><font-awesome-icon
                  class="mr-3 d-inline-block"
                  :icon="['fas', 'cart-plus']"
                />
                <span>add to cart</span></span
              >
            </button>
          </div>
          <span class="align-self-end close-button"
            ><font-awesome-icon
              :icon="['fas', 'times']"
              @click="removeBookmark(wishProduct)"
            ></font-awesome-icon
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import BookmarksService from "../../services/BookmarksService";
export default {
  data() {
    return {
      bookmark: null,
      recentAdded: [],
      recentAddedFolded: false
    };
  },
  computed: {
    ...mapGetters("cart", ["getProductById"]),
    ...mapGetters("authentication", ["loggedIn"]),
    ...mapState("authentication", ["isUserLoggedIn"])
  },
  async mounted() {
    if (!this.loggedIn) {
      console.log("mounted access denied");
      return;
    }
    try {
      this.bookmark = (await BookmarksService.index()).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    async removeBookmark(p) {
      try {
        await BookmarksService.delete(p.ProductID);
      } catch (err) {
        console.log(err);
      }
      this.bookmark = (await BookmarksService.index()).data;
    },
    addProductToCart(product) {
      console.log("button is been clicked");
      var vm = this;
      if (!this.getProductById(product.ProductID)) {
        vm.addProduct(product);
      }
    },
    pushTo(toRoute, params) {
      this.$router.push({
        name: toRoute,
        params: { id: params }
      });
    },
    toggleAddedFolded() {
      this.recentAddedFolded = !this.recentAddedFolded;
    }
  },
  watch: {
    bookmark() {
      this.recentAdded = this.bookmark.slice(
        this.bookmark.length - 3,
        this.bookmark.length
      );
      this.recentAdded.reverse();
    }
  }
};
</script>

<style lang="scss" scoped>
.wish-title {
  color: #fff;
  background-color: #e3aaaa;
  border: 3px solid #e3aac7;
  text-shadow: 1px 1px 1px #e3aac7, 1px 1px 1px #e3aac7, 1px 1px 1px #e3aac7;
  font-size: 18px;
  padding: 10px;
  opacity: 0.5;
}
.whish-wrapper {
  padding: 5px 0;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  transition: all 0.3s ease;
  visibility: visible;
  opacity: 1;
}
.faded {
  visibility: hidden;
  opacity: 0.3;
  width: 0;
  height: 0;
  transition: visibility 0s;
}
.wishlist-box {
  min-width: 250px;
  position: relative;

  .col {
    padding: 0;
  }
  > div:first-child {
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 280px;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .whish-info {
    h5 {
      font-size: 12px;
      font-style: italic;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 11px;
    }
    div {
      margin-bottom: 0px;
      font-size: 16px;
    }
  }
  .close-button {
    position: absolute;
    top: 0;
    right: 5px;
  }
}
//hover-cover
.image-cover {
  position: relative;
  margin-right: 15px;
  margin-left: 15px;
  padding: 0;
  > .hover-cover {
    position: absolute;
  }
  img {
    width: 100%;
  }
  &:hover {
    > img {
      width: 100%;
    }
    .hover-cover {
      opacity: 0.7;
      transition: all 0.45s ease-out;
    }
  }
  .svg-inline--fa {
    &:hover {
      color: rgb(211, 60, 148);
    }
  }
}
.hover-cover {
  color: black;
  display: block;
  background-color: #bbb;
  opacity: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  > div:first-child {
    opacity: 5;
    margin: 10px;
    background-color: white;
    opacity: 1;
    height: 90%;
  }
  .hover-cover_bar {
    font-size: 16px;
  }
}
//arrow
.arrow-container {
  .center-con {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .round {
    cursor: pointer;
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  span {
    height: 3px;
    margin: 1px;
    width: 10px;
    background: #111;
    transition: 0.4s ease;
  }

  span:first-child {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 33%;
    bottom: 35%;
  }

  span:nth-child(2) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 45%;
    bottom: 35%;
  }

  span:nth-child(3) {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 33%;
    bottom: 54%;
  }

  span:nth-child(4) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 45%;
    bottom: 54%;
  }

  .round:hover span:nth-child(1) {
    transform: rotate(-135deg);
  }

  .round:hover span:nth-child(2) {
    transform: rotate(135deg);
  }

  .round:hover span:nth-child(3) {
    transform: rotate(225deg);
  }

  .round:hover span:nth-child(4) {
    transform: rotate(-225deg);
  }
  .rotate-reverse {
    transform: rotate(-180deg);
  }
}
</style>
