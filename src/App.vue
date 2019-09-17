<template>
  <div id="app">
    <main class="main-content">
      <Nav v-if="!searchIsOn" @searchOverlayIsOn="toggleSearch"></Nav>

      <router-view :key="$route.fullPath"></router-view>

      <div class="mobile-footer">
        <foot />
      </div>
      <!--cart & overlay-->
      <cartCheckout></cartCheckout>
      <!--login layout-->
      <!--searching overlay-->
      <searchingOverlay
        v-if="searchIsOn"
        @closeSearch="toggleSearch"
      ></searchingOverlay>
    </main>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import cartCheckout from "./components/cartCheckout.vue";
import foot from "@/components/footer.vue";
import searchingOverlay from "@/components/searchingOverlay.vue";
export default {
  components: {
    Nav,
    cartCheckout,
    foot,
    searchingOverlay
  },
  data() {
    return {
      searchIsOn: false
    };
  },
  methods: {
    toggleSearch() {
      this.searchIsOn = !this.searchIsOn;
    }
  }
};
</script>
<style src="./main.css" />
<style>
.leave-enter-active,
.leave-leave-active {
  transition: all 1.2s;
}
.leave-enter,
.leave-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

.appear-enter-active {
  animation: appear-animation 0.5s;
}

.appear-leave-active {
  animation: appear-animation 0.5s reverse;
}

@keyframes appear-animation {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
