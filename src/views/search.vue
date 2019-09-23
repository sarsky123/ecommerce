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
          <div class="col mx-5 mb-4" v-if="catFilter.length">
            <div class="row">
              <p>Search in:</p>
            </div>
            <div class="row">
              <div
                class="d-inline-block py-1 px-2 mr-3 text-uppercase border"
                v-for="(filterCat, index) in catFilter"
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
        <b-dropdown id="dropdown-1" text="Refine" class="col px-0">
          <b-dropdown-item
            class="w-100 text-capitalize"
            v-for="(categories, index) in category"
            :key="index"
            @click.native="setCategoryFilter(categories)"
            >{{ categories }}</b-dropdown-item
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
  </div>
</template>

<script>
import catalog from "@/components/catalog.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      sort: ["Price (Low to High)", "Price (High to Low)", "On Sale"],
      gender: ["man", "woman"],
      category: [
        "cloth",
        "bags",
        "hats",
        "sunglasses",
        "watches",
        "dresses",
        "coats",
        "jackets",
        "jeans",
        "boots",
        "sneakers",
        "gloves",
        "tops",
        "shorts",
        "skirts",
        "suits"
      ],
      products: [],
      catFilter: [],
      orderFilter: "",
      searchCondition: ["category"]
    };
  },
  props: {
    searchContent: {
      type: String
    }
  },
  components: {
    catalog
  },
  computed: {
    ...mapGetters("product", ["getProducts", "getFilteredProducts"])
  },
  methods: {
    groupBy: function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },

    setOrderFilter(p) {
      this.orderFilter = p;
    },
    uniqueConstructor(arr) {
      arr = [...new Set(arr)];
      return arr;
    },
    clearFilter(i) {
      this.catFilter.splice(i, 1);
      console.log("closer is clicked");
    },
    clearSearch() {
      this.$router.push("/search");
      console.log("clearsearch is clicked");
    }
  },

  watch: {
    getFilteredProducts: {
      immediate: true,
      handler: function() {
        this.products = this.getFilteredProducts;
      }
    },
    catFilter: {},
    "$route.params.searchContent": {
      immediate: true,
      handler: function() {
        var vm = this;
        vm.$store.dispatch("product/filterProduct", vm.searchContent);
        vm.$store.dispatch("product/fetchFilteredProduct");
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
