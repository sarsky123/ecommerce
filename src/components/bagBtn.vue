<template>
  <button class="bag-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    propName: {
      product: Object,
      btnStat: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
