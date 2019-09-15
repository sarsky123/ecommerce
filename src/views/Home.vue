<template>
  <div class="home-wrapper">
    <div class="homepage-hero " id="homepageHero">
      <div class="Hero-Image"></div>
      <div class="homepage-hero-content wrapper clearfix">
        <div class="text-left">
          <h1 class="homepage-hero-content_title">New Season</h1>
          <p class="homepage-hero-content_block">Saben</p>
          <a href="#" class="btn btn-large btn-splash uppercase">Shop Now</a>
        </div>
      </div>
      <div class="scroll-icon-wrap">
        <a
          href="javascript:void(0)"
          class="scroll_icon icon icon-arrow-down icon-fallback-text"
        >
          <div class="arrow"></div>
        </a>
      </div>
      <div id="scroll"></div>
      <div class="hero-image-overlay"></div>
    </div>
    <div class="bg-white pt-5">
      <div class="hero-2 mx-auto">
        <div class="row">
          <div class="col-7">
            <img src="../assets/img/3.png" alt="1" />
          </div>
          <div class="col-5">
            <img src="../assets/img/6.png" alt="1" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img src="../assets/img/4.png" alt="1" />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col"></div>
              <div class="col">
                <img src="../assets/img/lemonade.jpg" alt="1" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img src="../assets/img/cherry.jpg" alt="1" />
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.hero-2 {
  width: 67%;
  background-color: white;
  position: relative;
  .col {
    max-height: 230px;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .row {
  }
  > .row > div {
    overflow: hidden;
    height: auto;
  }

  img {
    display: block;
    padding: 0 15px 15px 0;
    overflow: hidden;
    background-position: center;
    width: auto;
    max-width: 100%;
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

//arrow
</style>
