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
        <div class="row flex-fill">
          <div class="col-7">
            <img src="../assets/img/3.png" alt="1" />
          </div>
          <div class="col-5">
            <img src="../assets/img/6.png" alt="1" />
          </div>
        </div>
        <div class="row flex-fill">
          <div class="d-none  d-md-block col-4">
            <img src="../assets/img/4.png" alt="1" />
          </div>
          <div class="col d-flex flex-column">
            <div class="row row2-1 align-items-center  h-50">
              <div
                class="col text-center d-flex flex-column align-items-center justify-content-center"
              >
                <div class="w-75 mx-auto">
                  <h3 class="mb-4 mx-auto">Life With Style</h3>
                  <p class="text-lighter mb-3 w-80 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button class="btn btn-info mt-4 px-3 py-2 mx-auto">
                    <router-link
                      class="text-decoration-none text-light"
                      :to="{ name: 'store' }"
                      >Shop Now</router-link
                    >
                  </button>
                </div>
              </div>
              <div class="col">
                <img src="../assets/img/lemonade.jpg" alt="1" />
              </div>
            </div>
            <div class="row align-items-center h-50">
              <div class="col">
                <img src="../assets/img/cherry.jpg" alt="1" />
              </div>
              <div
                class="col text-center d-flex flex-column align-items-center justify-content-center"
              >
                <div class="w-75 mx-auto">
                  <h3 class="mb-4 text-wrap">Look Great</h3>
                  <p class="text-lighter mb-3" text-wrap>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <button
                    class="btn btn-info justify-content-center d-flex w-30 mx-auto mt-3 px-3 py-2"
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
    </div>
    <div class="anchor" name="home-carousel" id="home-carousel"></div>
    <div class="w-100 bg-white pt-5 px-4">
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
            <router-link
              :to="{
                name: 'product-detail',
                params: { id: product.id }
              }"
              class="grid__image"
            >
              <img
                :src="product.image"
                alt="'Product#' + product.id"
                class="w-100 slide-image"
              />
            </router-link>

            <div class="slide-item">
              <p class="font-weight-bold my-2">NEW!</p>
              <p class="mb-0">
                {{ product.title }}
              </p>
              <p class="my-1">
                {{ product.name }}
              </p>
              <p class="pt-3">
                <span>
                  <span>NT${{ product.price, }}</span>
                </span>
              </p>
            </div>
          </slide>
        </carousel>
      </no-ssr>
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
            <router-link
              :to="{
                name: 'product-detail',
                params: { id: product.id }
              }"
              class="grid__image"
            >
              <img
                :src="product.image"
                alt="'Product#' + product.id"
                class="w-100 slide-image"
              />
            </router-link>

            <div class="slide-item">
              <p class="uppercase mb-0">
                {{ product.title }}
              </p>
              <p class="my-1">
                {{ product.name }}
              </p>
              <p class="pt-3">
                <span>
                  <span>NT${{ product.price }}</span>
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
    <productInfo></productInfo>
  </div>
</template>

<script>
import productInfo from "@/components/productInfo.vue";
import { mapGetters } from "vuex";
import { vueWindowSizeMixin } from "vue-window-size";
import NoSSR from "vue-no-ssr";
export default {
  data() {
    return {
      perpage: null
    };
  },
  components: {
    productInfo,
    "no-ssr": NoSSR
  },
  created() {
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
  computed: {
    ...mapGetters("product", ["getProducts"])
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
    display: none;
  }
}
.grid__image {
  display: block;
  height: 67%;
  > img {
    height: 100%;
    object-fit: cover !important;
  }
}

//arrow
.arrow {
  margin-top: -45px;
}
//anchor
.anchor {
  padding-top: 80px;
  background: white;
}
</style>
