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
          <span class="icon icon-arrow-down"></span>
          <span class="fallback-text">Down</span>
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
  </div>
</template>

<script>
import productInfo from "@/components/productInfo.vue";

export default {
  components: {
    productInfo
  }
};
</script>

<style lang="css"></style>
