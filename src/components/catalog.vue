<template>
  <div
    class="grid__item small--one-half medium--one-third large--one-third  product-grid-item"
  >
    <router-link to="/" class="grid__image">
      <img :src="product.image" alt="Atmosphere Pant" />
    </router-link>
    <button class="bag-btn" :data-id="product.id">
      <i class="fas fa-shopping-cart"></i>

      add to cart
    </button>
    <div class="figcaption under">
      <a href="javascript:void(0)"> </a>
      <p class="uppercase vendor__link">
        <a href="javascript:void(0)"><b></b></a
        ><b
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
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style lang="css"></style>
