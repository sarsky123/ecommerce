<template>
  <div></div>
</template>

<script>
export default {
  name: "observer",
  data() {
    return {
      observer: null
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (!(entry && entry.isIntersecting)) {
        return;
      }
      this.$emit("intersect");
      this.observer.unobserve(entry.target);
    });
    this.observer.observe(this.$el);
  }
};
</script>

<style lang="scss" scoped></style>
