<template>
  <div class="home-wrapper">
    <div class="homepage-hero " id="homepageHero">
      <div class="Hero-Image"></div>
      <div class="homepage-hero-content wrapper clearfix">
        <div class="text-left">
          <h1 class="homepage-hero-content_title">New Season</h1>
          <p class="homepage-hero-content_block pt-3">New Style.</p>
          <router-link :to="{ name: 'store' }">
            <a class="btn btn-large btn-splash uppercase pt-3">Shop Now</a>
          </router-link>
        </div>
      </div>
      <a href="#home-carousel">
        <div class="scroll-icon-wrap">
          <div class="d-flex flex-column justify-content-center">
            <div
              class="container scroll_icon icon icon-arrow-down icon-fallback-text"
            ></div>
            <div class="w-1 arrow-parent mx-auto d-block ">
              <div class="arrow"></div>
            </div>
          </div>
        </div>
      </a>
      <div id="scroll"></div>
      <div class="hero-image-overlay"></div>
    </div>
    <div class="bg-white pt-5">
      <div id="hero-2" class="hero-2 mx-auto d-flex flex-column clearfix">
        <div class="row flex-fill flex-row">
          <div class="col-7">
            <img src="../assets/img/beauty-3.jpg" alt="masked" />
          </div>
          <div class="col-5">
            <img src="../assets/img/beauty-15.jpg" alt="rosehand" />
          </div>
        </div>
        <div class="row flex-fill">
          <div class="d-none  d-md-block col-4">
            <img src="../assets/img/beauty-4.jpg" alt="pridy grill" />
          </div>
          <div class="col d-flex flex-column">
            <div class="row row2-1 align-items-center  h-50">
              <div
                class="col text-center d-flex flex-column align-items-center justify-content-center"
              >
                <div class="w-75 mx-auto">
                  <h3 class="mb-4 mx-auto text-capitalize">viva la vida</h3>
                  <p class="text-lighter mb-3 w-80 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button class="btn gridHero-button mt-4 px-3 py-2 mx-auto">
                    <router-link
                      class="text-decoration-none text-light"
                      :to="{ name: 'store' }"
                      >Shop Now</router-link
                    >
                  </button>
                </div>
              </div>
              <div class="col">
                <img
                  src="../assets/img/beauty-18.jpg"
                  alt="girl holding stuff"
                />
              </div>
            </div>
            <div class="row align-items-center h-50">
              <div class="col">
                <img src="../assets/img/beauty-16.jpg" alt="rosey grill" />
              </div>
              <div
                class="col text-center d-flex flex-column align-items-center justify-content-center"
              >
                <div class="w-75 mx-auto">
                  <h3 class="mb-4 text-wrap">Sesonal Sale</h3>
                  <p class="text-lighter mb-3" text-wrap>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <button
                    class="btn gridHero-button justify-content-center d-flex w-30 mx-auto mt-3 px-3 py-2"
                  >
                    <router-link
                      class="text-decoration-none text-light w-30"
                      :to="{ name: 'store' }"
                      >Shop Now</router-link
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Observer @intersect="intersected"></Observer>
    </div>
    <div class="anchor" name="home-carousel" id="home-carousel"></div>
    <div class="w-100 bg-white py-5 px-4">
      <div
        class="carousel-header text-uppercase
        text-center"
      >
        <span class="bg-white px-3 d-inline-block">New Release </span>
        <p class="d-block mx-a text-center mb-4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut?
        </p>
      </div>
      <no-ssr>
        <carousel
          :perPage="perpage"
          loop
          hide-controls
          class="bg-white col-10 mx-auto px-0"
          centerMode
          navigationEnabled
          navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
          navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
        >
          <slide
            class="p-3"
            v-for="product in this.getProducts.slice(0, 12)"
            :key="product.index"
          >
            <div class="grid__image">
              <img
                :src="product.Image"
                alt="'Product#' + product.ProductID"
                class="w-100 slide-image"
              />

              <div class="hover-cover">
                <div
                  @click.self="pushTo('product-detail', product.ProductID)"
                  class="d-flex flex-column justify-content-between align-items-center"
                >
                  <div>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <font-awesome-icon
                      :icon="['fab', 'instagram']"
                      class="ml-3"
                    />
                  </div>
                  <div>
                    <font-awesome-icon
                      @click="pushTo('product-detail', product.ProductID)"
                      :icon="['fas', 'search']"
                      class="cover-search"
                    />
                  </div>
                  <div
                    class="d-flex flex-row algin-items-center hover-cover_bar"
                  >
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
                      <font-awesome-icon
                        v-else
                        :icon="['fas', 'shopping-bag']"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide-item">
              <p class="font-weight-bold my-2 text-uppercase">new release!</p>
              <p class="mb-0">
                {{ product.Title }}
              </p>
              <p class="my-1">
                {{ product.Name }}
              </p>
              <p class="pt-3">
                <span>
                  <span>NT${{ product.Price, }}</span>
                </span>
              </p>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
    <div class="w-100 homepage-hero-3 flex-wrap">
      <div class="col-10 col-md-5">
        <img src="../assets/img/beauty-19.jpg" alt="pikaboo" />
        <div class=" text-center">
          <h5>Brand New!</h5>
          <p class="d-none d-sm-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="btn btn-dark rounded-0 btn-hero3">Shop Now</button>
        </div>
      </div>
      <div class="col-10 col-md-5">
        <img src="../assets/img/beauty-22.jpg" alt="oranged shirt" />
        <div class=" text-center">
          <h5>Autumn is coming</h5>
          <p class="d-none d-sm-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="btn btn-dark rounded-0 btn-hero3">Shop Now</button>
        </div>
      </div>
    </div>

    <div class="w-100 bg-white pt-5 px-4">
      <div
        class="carousel-header text-uppercase 
        text-center"
      >
        <span class="bg-white px-3 d-inline-block">create yourself</span>
        <p class="d-block mx-a text-center mb-4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut?
        </p>
      </div>
      <no-ssr>
        <carousel
          loop
          :perPage="perpage"
          hide-controls
          class="bg-white col-10 mx-auto px-0"
          centerMode
          navigationEnabled
          navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
          navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
        >
          <slide
            class="p-3"
            v-for="product in this.getProducts.slice(13, 25)"
            :key="product.index"
          >
            <div class="grid__image">
              <img
                :src="product.Image"
                alt="'Product#' + product.ProductID"
                class="w-100 slide-image"
              />

              <div class="hover-cover">
                <div
                  @click.self="pushTo('product-detail', product.ProductID)"
                  class="d-flex flex-column justify-content-between align-items-center"
                >
                  <div>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <font-awesome-icon
                      :icon="['fab', 'instagram']"
                      class="ml-3"
                    />
                  </div>
                  <div>
                    <font-awesome-icon
                      @click="pushTo('product-detail', product.ProductID)"
                      :icon="['fas', 'search']"
                      class="cover-search"
                    />
                  </div>
                  <div
                    class="d-flex flex-row algin-items-center hover-cover_bar"
                  >
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
                      <font-awesome-icon
                        v-else
                        :icon="['fas', 'shopping-bag']"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide-item">
              <p class="mb-0">
                {{ product.Title }}
              </p>
              <p class="my-1">
                {{ product.Name }}
              </p>
              <p class="pt-3">
                <span>
                  <span>NT${{ product.Price, }}</span>
                </span>
              </p>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
    <div class="homepage-custom">
      <div class="homepage-custom_parallax clearfix">
        <div class="text-center">
          <div class="mega-button">
            <div class="mega-button-content">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="beforefooter">
      <div class="col bg-white">
        <div class="p-5 w-100 text-center">
          <h3 class="mb-4">@Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fuga!
          </p>
          <div
            class="d-flex flex-row justify-content-between my-4 flex-wrap col"
          >
            <div class="col-6 col-md-3  mb-3">
              <img src="../assets/img/beauty-5.jpg" alt="mirror" />
            </div>
            <div class="col-6 col-md-3   mb-3">
              <img src="../assets/img/beauty-21.jpg" alt="jump" />
            </div>
            <div class="col-6 col-md-3  mb-3">
              <img src="../assets/img/beauty-1.jpg" alt="squat" />
            </div>
            <div class="col-6 col-md-3  mb-3">
              <img src="../assets/img/beauty-2.jpg" alt="sleepy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookmarksService from "@/services/BookmarksService.js";
import { mapGetters, mapActions } from "vuex";
import { vueWindowSizeMixin } from "vue-window-size";
import NoSSR from "vue-no-ssr";
import Observer from "../components/misc/Observer";

export default {
  data() {
    return {
      perpage: null,
      bookmark: null
    };
  },
  components: {
    "no-ssr": NoSSR,
    Observer
  },
  created() {
    this.fetchBookmark();
    this.$store.dispatch("product/fetchProducts");
    this.$store.dispatch("product/fetchFilteredProduct");
  },
  mounted() {
    if (this.windowWidth > 960) {
      this.perpage = 4;
    } else if (this.windowWidth < 576) {
      this.perpage = 2;
    } else {
      this.perpage = 3;
    }
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    addProductToCart(product) {
      var vm = this;
      vm.addProduct(product);
    },
    pushTo(toRoute, params) {
      this.$router.push({
        name: toRoute,
        params: { ProductID: params }
      });
    },
    async addBookmark(product) {
      try {
        var resp = await BookmarksService.post(product.ProductID);
        if (resp.status === 200) {
          this.$store.dispatch(
            "bookmark/addIndividualBookmark",
            resp.data.ProductID
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
    async removeBookmark(p) {
      try {
        var resp = await BookmarksService.delete(p.ProductID);
        if (resp.status === 200) {
          console.log(resp.data);
          this.$store.dispatch("bookmark/deleteBookmark", resp.data.ProductID);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async fetchBookmark() {
      const bookmark = await BookmarksService.index();
      if (bookmark.status === 200) {
        this.$store.dispatch("bookmark/setBookmark", bookmark.data);
      }
      console.log("bookmark is fetched from server");
    },
    ifBookMarked(p) {
      return this.bookmark.indexOf(p.ProductID) > -1;
    },
    intersected() {
      console.log("intersected");
      this.$emit("overlayOpened");
    }
  },
  computed: {
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("cart", ["getProductById"]),
    ...mapGetters("authentication", ["loggedIn"]),
    ...mapGetters("bookmark", ["getBookmarks"])
  },
  mixins: [vueWindowSizeMixin],
  watch: {
    windowWidth: function() {
      if (this.windowWidth > 960) {
        this.perpage = 4;
      } else if (this.windowWidth < 576) {
        this.perpage = 2;
      } else {
        this.perpage = 3;
      }
    },
    getBookmarks: {
      immediate: true,
      handler: function() {
        this.bookmark = this.getBookmarks;
      }
    }
  }
};
</script>

<style lang="scss">
.arrow {
  box-sizing: border-box;
  height: 2vw;
  width: 2vw;
  border-style: solid;
  border-color: white;
  border-width: 0px 1px 1px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
}
.icon-arrow-down {
  > a {
    padding-right: calc(4cw+24px);
    display: block;
  }
}
.row2-1 {
  max-height: 300px;
  overflow: hidden;
}

.arrow:hover {
  border-bottom-width: 4px;
  border-right-width: 4px;
}
.hero-2 {
  width: 73%;
  height: 100vh;
  min-height: 800px;
  overflow: hidden;
  max-width: 980px;
  background-color: white;
  position: relative;

  .col,
  .col-5,
  .col-7,
  .col-4,
  .col-8 {
    padding: 5px 5px;
    overflow: hidden;
    height: 100%;
  }
  > .row:first-child {
    max-height: 30%;
    margin-bottom: 15px;
    overflow: hidden;
  }
  > .row:last-child {
    > div:first-child {
      margin-right: 10px;
      img {
        padding-bottom: 5px;
      }
    }
  }
  .row {
    height: 100%;
  }

  > div:first-child {
    max-height: 230px;
    padding-bottom: 10px;
    overflow: hidden;
  }
  img {
    object-fit: cover;
    display: block;
    background-position: center;
    width: 100%;
    height: 100%;
  }
}

.slide-image {
  @media screen and (min-width: 960px) {
    min-height: 200px;
  }
  @media screen and (max-width: 960px) {
    min-height: 150px;
  }
}
.material-icons {
  font-size: 60px;
  &:hover {
    color: orange !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 40px;
  }
  @media screen and (min-width: 968px) {
    font-size: 50px;
  }
}
.carousel-header {
  position: relative;
  line-height: 28px;

  &:before {
    position: absolute;
    top: 14px;
    right: 0;
    left: 0;
    content: "";
    background: #000;
    height: 1px;
  }
  > span {
    position: relative;
    font-size: 17px;
  }
  > p {
    font-size: 12px;
    color: #666;
  }
}

.slide-item {
  :first-child,
  :first-child + p {
    font-size: 14px;
    text-transform: uppercase;
  }

  > p {
    font-size: 20px;
    line-height: 16px;
  }
}

@media screen and (max-width: 576px) {
  .homepage-custom {
  }
}
.grid__image {
  position: relative;
  display: block;
  height: 300px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }

  &:hover {
    > img {
      transform: scale(1.4, 1.4);
      transition: all 10s linear;
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
//gridHero
.gridHero-button {
  background-color: #e3aaaa !important;
  &:hover {
    color: #000 !important;
  }
}
//hero3
.homepage-hero-3 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 35px 0 35px;
  background-color: white !important;
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #aa4b6b,
    #6b6b83,
    #3b8d99
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, rgba(170, 75, 107, 0.2), white);
  > div {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    > div {
      padding: 8px 20px;
      margin-top: -35px;
      width: 85%;
      background-color: #e3a8a8;
      color: black;
      position: relative;
      h5 {
        text-shadow: 1px 1px 1px white;
      }
      p {
        font-weight: 200;
        font-size: 11px;
        color: #e1e1e1;
      }
      > button {
        position: absolute;
        top: calc(100% - 13px);
        width: 50%;
        right: 25%;
      }
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
  }
  .btn-hero3 {
    box-shadow: 1px 1px 2px #555;
  }
}
//beforefooter
.beforefooter {
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

//arrow
.arrow {
  margin-top: -4vw;
}
//anchor
.anchor {
  padding-top: 80px;
  background: white;
}
//hover-cover
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
.cover-search {
  font-size: 20px;
}
//misc
.high-pior {
  z-index: 100;
}
</style>
