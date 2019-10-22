<template>
  <div>
    <div class="popupOverlay" @click.self="closeSearch">
      <div class="search-bar">
        <div class="w-100 p-3 bg-white d-flex">
          <font-awesome-icon
            class="d-inline-block centralized mx-3 search-bar-icon"
            :icon="['fas', 'search']"
          />
          <form @submit.prevent="searchSubmit()">
            <input
              class="p-2 border-0 w-100"
              type="text"
              placeholder="Insert your search"
              v-model="searchContent"
              ref="search"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: ""
    };
  },
  methods: {
    closeSearch() {
      this.$emit("closeSearch");
    },
    searchSubmit() {
      this.$router.push({
        name: "searchContent",
        params: { searchContent: this.searchContent }
      });
      this.closeSearch();
    },
    focusInput() {
      this.$refs.search.focus();
    }
  },
  mounted() {
    this.focusInput();
  }
};
</script>

<style lang="scss">
.popupOverlay {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(210, 210, 210, 0.8);
  z-index: 10;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.search-bar-icon {
  font-size: 20px;
  color: #666;
}
</style>
