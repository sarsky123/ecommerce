<template>
  <div>
    <div class="homepage-hero" id="homepageHero">
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
    <productInfo></productInfo>
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
    <div>
      <div class="w-100 bg-white">
        <carousel
          perPage="3"
          hide-controls
          class="bg-white col-10 mx-auto"
          centerMode
          navigationEnabled
          navigationNextLabel=""
        >
          <slide v-for="(product, index) in this.getProducts">
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
                class="w-100"
              />
            </router-link>

            <div class="figcaption under">
              <p class="uppercase vendor__link">
                <b
                  ><a href="javascript:void(0)">{{ product.title }}</a></b
                >
              </p>
              <p class="h6 name_wrapper">
                {{ product.name }}
              </p>
              <p class="price_wrapper">
                <span class="price">
                  <span class="money">$ {{ product.price }}</span>
                </span>
              </p>
            </div>
          </slide>
        </carousel>
        <div class="row w-100"></div>
      </div>
    </div>
  </div>
</template>

<script>
import productInfo from "@/components/productInfo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    productInfo
  },
  created() {
    this.$store.dispatch("product/fetchProducts");
  },
  computed: {
    ...mapGetters("product", ["getProducts"])
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 576px) {
  .homepage-custom {
    display: none;
  }
}
.VueCarousel-navigation-button
  .VueCarousel-navigation-prev
  .VueCarousel-navigation-next {
}

//arrow
</style>
