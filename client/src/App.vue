<template>
  <div id="app">
    >
    <main class="main-content">
      <Nav v-if="!searchIsOn" @searchOverlayIsOn="toggleSearch"></Nav>

      <transition
        :enter-active-class="animationActive"
        :leave-active-class="animationLeave"
        mode="out-in"
      >
        <router-view
          :key="$route.fullPath"
          @overlayOpened="toggleOverlay()"
        ></router-view>
      </transition>
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

      <div
        id="eventPopup"
        class="evenPopupOverlay high-pior"
        @click.self="toggleOverlay()"
        v-if="eventPopupIsOpend"
      >
        <eventPopup @closeEventPopup="toggleOverlay()" />
      </div>
      <!--notification-->
      <notificationContainer />
    </main>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import cartCheckout from "./components/cartCheckout.vue";
import foot from "@/components/footer.vue";
import searchingOverlay from "@/components/searchingOverlay.vue";
import notificationContainer from "@/components/notificationContainer.vue";
import eventPopup from "@/components/EventPopup";
import { mapGetters } from "vuex";

export default {
  components: {
    Nav,
    cartCheckout,
    foot,
    searchingOverlay,
    notificationContainer,
    eventPopup
  },
  computed: {
    ...mapGetters("cart", ["getPopupCart"]),
    ifOverlayOpend() {
      return !!(this.getPopupCart || this.searchIsOn || this.eventPopupIsOpend);
    }
  },
  data() {
    return {
      searchIsOn: false,
      transition: true,
      animationActive: "",
      animationLeave: "",
      overlayIsOn: !!(this.getPopupCart === true || this.searchIsOn === true),
      eventPopupIsOpend: false
    };
  },
  methods: {
    toggleSearch() {
      this.searchIsOn = !this.searchIsOn;
    },
    toggleOverlay() {
      this.eventPopupIsOpend = !this.eventPopupIsOpend;
    }
  },
  watch: {
    $route(to, from) {
      if (
        to.name == "searchContent" ||
        from.name == "searchContent" ||
        to.path.includes("home-carousel") ||
        to.path.includes("member") ||
        to.path.includes("contact-us")
      ) {
        this.animationActive = "";
        this.animationLeave = "";
      } else {
        this.animationActive = "animated fadeInDown";
        this.animationLeave = "animated fadeOut";
      }
    },
    ifOverlayOpend() {
      if (this.ifOverlayOpend === true) {
        document.body.className = "noscroll";
      } else {
        document.body.className = "";
      }
    }
  }
};
</script>
<style src="./main.css" />
<style>
/*global*/
.theme-color {
  color: #e3aaaa;
}
.btn {
  cursor: pointer !important;
}
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
button:focus {
  outline: 0 !important;
}
:focus {
  outline: 0 !important;
  outline-style: none !important;
  outline-width: 0 !important;
}
.evenPopupOverlay {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(210, 210, 210, 0.8);
  z-index: 5;
  width: 100%;
}
.evenPopupOverlay > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
/* Pure Css Loader for spinner purpose*/
</style>
