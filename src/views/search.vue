<template>
  <div class="search-page w-100">
    <div class="search-page-header">
      <div class="search-info">
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
          no-flip
        >
        </b-dropdown>

        <b-dropdown id="dropdown-1" text="Sort By" class="col px-0">
          <b-dropdown-item
            class="w-100"
            v-for="(sortOrder, index) in sort"
            :key="index"
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
  components: {
    catalog,
    filterOverlay
  },
  computed: {
    ...mapGetters("product", ["getProducts", "getFilteredProducts"]),
    categoryMatchProduct() {
      var prod = this.products;
      var arr = prod.map(prod => prod.category);
      arr = this.uniqueConstructor(arr);
      arr = arr.filter(
        obj => obj !== undefined && this.accessories.indexOf(obj) == -1
      );

      return arr;
    },
    accessoriesMatchProduct() {
      var prod = this.products;
      var arr = prod.map(prod => prod.category);
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
      console.log("closer is clicked");
    },
    clearSearch() {
      this.$router.push("/search");
      console.log("clearsearch is clicked");
    },
    toggleFilter() {
      this.filterIsOn = !this.filterIsOn;
    },
    addFilterCondition(payload) {
      this.filterCondition = payload;
    },
    addFilterBrand(payload) {
      this.filterBrand = payload;
    }
  },

  watch: {
    filterCondition: {
      immediate: true,
      handler: function() {
        var vm = this;
        vm.$store.dispatch("product/filterProduct", vm.filterCondition);
        vm.$store.dispatch("product/fetchFilteredProduct");
      }
    },
    filterBrand: {
      immediate: true,
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
    "$route.params.searchContent": {
      immediate: true,
      handler: async function() {
        var vm = this;
        await vm.$store
          .dispatch("product/setSearching", vm.searchContent)
          .then(vm.$store.dispatch("product/fetchFilteredProduct"));
      }
    },
    orderFilter: {
      handler: function() {
        var vm = this;
        if (vm.orderFilter) {
          switch (vm.orderFilter) {
            case "Price (Low to High)":
              vm.products.sort((a, b) => a.price - b.price);
              break;

            case "Price (High to Low)":
              vm.products.sort((a, b) => b.price - a.price);
              break;
            case "On Sale":
              vm.products.sort((a, b) => b.onsale - a.onsale);
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
</style>
