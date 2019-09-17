<template>
  <div class="search-page w-100">
    <div class="search-page-header">
      <div class="search-info">
        <div class="row">
          <div class="col pb-3 text-center" v-if="searchContent">
            <p>Search results for: {{ searchContent }}</p>
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
                  :icon="['fab', 'instagram']"
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

import { mapState, mapGetters } from "vuex";
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
  created() {},

  computed: {
    ...mapState(["product"]),
    ...mapGetters("product", ["getProducts"]),
    searchFilter() {
      return this.products.filter(product => {
        return this.searchContent
          .toLowerCase()
          .split(" ")
          .every(kw => product.name.toLowerCase().includes(kw));
      });
    }
  },
  methods: {
    groupBy: function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    setCategoryFilter(p) {
      this.catFilter.push(p);
      this.catFilter = this.uniqueConstructor(this.catFilter);
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
    consoleTest() {
      console.log("event is triggered");
    }
  },

  watch: {
    catFilter: {
      immediate: true,
      handler: function() {
        var vm = this;

        for (var i = 0; i < vm.catFilter.length; i++) {
          vm.products = vm.products.filter(
            product => product.category == vm.catFilter[i]
          );
        }
      }
    },
    "$route.params.searchContent": {
      handler: function() {
        var vm = this;
        vm.$store.dispatch("product/fetchProducts");
        vm.products = vm.getProducts;
        vm.products = vm.searchFilter;

        console.log("search is inserted");
      },
      immediate: true,
      deep: true
    },
    orderFilter: {
      immediate: true,
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
