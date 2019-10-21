<template>
  <div class="search-page w-100">
    <div class="search-page-header">
      <div class="search-hero d-flex w-100  clearfix">
        <div
          class="search-hero-row w-100 d-flex flex-column flex-md-row align-items-center"
        >
          <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
          >
            <div
              class="row d-flex flex-column justify-content-center align-items-center w-50 text-center landing-left"
            >
              <h3>Autumn Wears</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus nihil ipsam reprehenderit? Unde natus veniam
                obcaecati soluta ea ut quam laudantium corrupti fugit. Nihil,
                cum.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 ">
            <div class="d-none d-md-flex col-md-12 col-lg-10 landing-image">
              <div class="landing-image-inner">
                <img
                  src="../assets/img/store-hero-w750.jpg"
                  alt="masked"
                  srcset="
                    ../assets/img/store-hero-w1000.jpg 1000w,
                    ../assets/img/store-hero-w750.jpg   750w,
                    ../assets/img/store-hero-500w.jpg   500w,
                    ../assets/img/store-hero-300w.jpg   300w
                  "
                  sizes="30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search-info mt-5">
        <div class="row">
          <div
            class="search-result col pb-3 text-center d-flex justify-content-center"
            v-if="searchContent"
          >
            <p>Search results for: {{ searchContent }}</p>
            <span class="d-inline-block ml-3" @click="clearSearch()"
              ><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon
            ></span>
          </div>
        </div>
        <div class="row mb-4 mx-3">
          <div class="col mx-5 mb-4" v-if="searchQuery.length">
            <div class="row">
              <p>Search in:</p>
            </div>
            <div class="row">
              <div
                class="d-inline-block py-1 px-2 mr-3 text-uppercase border"
                v-for="(filterCat, index) in searchQuery"
                :key="index"
              >
                {{ filterCat }}
                <font-awesome-icon
                  :icon="['fab', 'times']"
                  @click.native="clearFilter(index)"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-filter">
      <div class="row border mb-3">
        <b-dropdown
          @toggle="toggleFilter()"
          text="Refine"
          class="col px-0"
          menu-class="d-none"
          toggle-class="border-none "
          variant="bg-none"
          no-flip
          id="dropdown-none"
        >
        </b-dropdown>
        <b-dropdown
          id="dropdown-1"
          text="Sort By"
          menu-class="w-100"
          toggle-class="w-100"
          variant="bg-secondary"
          class="col px-0"
        >
          <b-dropdown-item
            class="w-100"
            v-for="(sortOrder, index) in sort"
            :key="index"
            menu-class="d-none"
            variant=""
            @click.native="setOrderFilter(sortOrder)"
            >{{ sortOrder }}</b-dropdown-item
          >
        </b-dropdown>
      </div>
    </div>
    <div class="search-page-products">
      <div class="row">
        <div class="col"></div>
      </div>
      <div class="row">
        <p class="text-center mx-auto" v-if="getfilterCondition.length">
          Filtering :
          <span class="text-capitalize">{{ getfilterCondition }}</span>
        </p>
        <div class="collection homepage-collection w-100">
          <div class="grid-uniform ">
            <catalog
              v-for="(product, index) in products"
              :key="index"
              :product="product"
            ></catalog>
          </div>
        </div>
      </div>
    </div>
    <!--overlay for filter-->
    <filterOverlay
      v-if="filterIsOn"
      @closeFilter="toggleFilter()"
      :gender="gender"
      :category="categoryMatchProduct"
      :accessories="accessoriesMatchProduct"
      :totalProduct="products"
      @filterAdded="addFilterCondition"
      @addFilterBrand="addFilterBrand"
      @clearAll="clearALL()"
    ></filterOverlay>
  </div>
</template>

<script>
import BookmarksService from "@/services/BookmarksService.js";
import catalog from "@/components/catalog.vue";
import filterOverlay from "@/components/filterOverlay.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      filterIsOn: false,
      sort: ["Price (Low to High)", "Price (High to Low)", "On Sale"],
      gender: ["man", "woman"],
      accessories: ["hats", "sunglasses", "watches", "gloves", "bags"],
      products: [],
      filterCondition: [],
      searchQuery: [],
      filterBrand: [],
      category: [
        "cloth",
        "dresses",
        "coats",
        "jackets",
        "jeans",
        "boots",
        "sneakers",
        "tops",
        "shorts",
        "skirts",
        "suits"
      ],
      orderFilter: "",
      searchCondition: []
    };
  },
  props: {
    searchContent: {
      type: String
    }
  },
  mounted() {
    this.fetchBookmark();
  },
  components: {
    catalog,
    filterOverlay
  },
  computed: {
    ...mapGetters("product", [
      "getProducts",
      "getFilteredProducts",
      "getfilterCondition"
    ]),
    categoryMatchProduct() {
      var prod = this.products;
      var arr = prod.map(prod => prod.Category);
      arr = this.uniqueConstructor(arr);
      arr = arr.filter(
        obj => obj !== undefined && this.accessories.indexOf(obj) == -1
      );

      return arr;
    },
    accessoriesMatchProduct() {
      var prod = this.products;
      var arr = prod.map(prod => prod.Category);
      arr = this.uniqueConstructor(arr);
      arr = arr.filter(
        obj => obj !== undefined && this.accessories.indexOf(obj) >= 0
      );

      return arr;
    }
  },
  methods: {
    groupBy: function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    uniqueConstructor(arr) {
      arr = [...new Set(arr)];
      return arr;
    },
    setOrderFilter(p) {
      this.orderFilter = p;
    },
    clearALL() {
      this.filterCondition = [];
      this.filterBrand = [];
    },

    clearFilter(i) {
      this.searchQuery.splice(i, 1);
    },
    clearSearch() {
      this.$router.push("/store");
    },
    toggleFilter() {
      this.filterIsOn = !this.filterIsOn;
    },
    addFilterCondition(payload) {
      this.filterCondition = payload;
    },
    addFilterBrand(payload) {
      this.filterBrand = payload;
    },
    async fetchBookmark() {
      if (!this.loggedIn) {
        return;
      }
      const bookmark = await BookmarksService.index();
      if (bookmark.status === 200) {
        this.$store.dispatch("bookmark/setBookmark", bookmark.data);
      }
    }
  },

  watch: {
    filterCondition: {
      handler: function() {
        var vm = this;
        vm.$store.dispatch("product/filterProduct", vm.filterCondition);
        vm.$store.dispatch("product/fetchFilteredProduct");
      }
    },

    filterBrand: {
      handler: function() {
        var vm = this;
        vm.$store.dispatch("product/filterBrand", vm.filterBrand);
        vm.$store.dispatch("product/fetchFilteredProduct");
      }
    },
    getFilteredProducts: {
      immediate: true,
      handler: function() {
        this.products = this.getFilteredProducts;
      }
    },
    searchContent: {
      immediate: true,
      handler: async function() {
        var vm = this;
        await vm.$store
          .dispatch("product/clearFilter")
          .then(vm.$store.dispatch("product/setSearching", vm.searchContent))
          .then(vm.$store.dispatch("product/fetchFilteredProduct"));
      }
    },
    orderFilter: {
      handler: function() {
        var vm = this;
        if (vm.orderFilter) {
          switch (vm.orderFilter) {
            case "Price (Low to High)":
              vm.products.sort((a, b) => a.Price - b.Price);
              break;

            case "Price (High to Low)":
              vm.products.sort((a, b) => b.Price - a.Price);
              break;
            case "On Sale":
              vm.products.sort((a, b) => b.Onsale - a.Onsale);
              break;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
.search-result {
  > p {
    font-size: 16px;
    margin: 0;
  }
  > span {
    font-weight: lighter;
    font-size: 13px;
    line-height: 1;
    margin: auto 0;
  }
}
.dropdown-toggle {
  width: 100%;
}
.search-page-header {
  padding-top: 150px;

  font-size: 20px;
  .search-info > :first-child {
    font-style: italic;
  }
}
.search-filter {
  font-size: 13px;
}
.search-filter > div > div:first-child {
  content: "";
  display: inline-block;
  border-right: 1px solid rgba(129, 128, 128, 0.397);
}
.grid__image > img {
  width: auto;
  margin: auto;
  display: block;
}
.subtitle {
  text-transform: capitalize;
}
.shop-wrapper {
  border-bottom: 1px solid #000;
  padding: 50px;
}
.search-filter {
  width: 100%;
  .btn {
    background-color: #e3aaaa !important;
    opacity: 0.7;
    border-radius: 0;
    color: white;
  }
}
.search-hero {
  background-color: rgba(227, 170, 170, 0.4);
  padding: 35px;
  > .search-hero-row {
    margin-right: -15px;
    > div:first-child {
      padding: 35px 0;
    }
  }
}
.landing-left {
  z-index: 2;
  > h3 {
    color: rgb(255, 153, 153);
    font-size: 26px;
    text-shadow: 1px 1px 3px white, 1px 1px 3px white, 1px 1px 3px white;
  }
  > p {
    font-size: 16px;
    margin: 15px 0;
    line-height: 2;
  }
  > .btn {
    color: white;

    border: 1px solid #ccc;
    margin-top: 15px;
    width: 100%;
    font-size: 20px;
    padding: 10px 15px;
  }
}
.landing-image {
  background: #7f7fd5; /* fallback for old browsers */

  background: -webkit-linear-gradient(
    to left,
    #aa4b6b,
    #6b6b83,
    #3b8d99
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    rgba(170, 75, 107, 0.5),
    rgba(108, 107, 131, 0.5),
    rgba(59, 141, 153, 0.5)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 15px !important;
  max-height: 500px;
  .landing-image-inner {
    display: block;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 1;
    transform: translateX(-100%);
    width: 50%;
    height: 75%;
    background-color: rgba(227, 170, 170, 0.4);
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
}
</style>
