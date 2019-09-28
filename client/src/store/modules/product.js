import productService from "@/services/productService.js";
const contentful = require("contentful");
import NProgress from "nprogress";

export const namespaced = true;

export const state = {
  products: [],
  productsTotal: 0,
  product: {},
  filterBrand: [],
  filterCondition: [],
  filteredProduct: [],
  productOrder: [],
  searchingInsert: []
};

export const mutations = {
  ADD_PRODUCT(state, product) {
    state.products.push(product);
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_PRODUCTS_TOTAL(state, productsTotal) {
    state.productsTotal = productsTotal;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_FILTERCONDITION(state, condition) {
    state.filterCondition = condition;
  },
  SET_BRAND(state, condition) {
    state.filterBrand = condition;
  },
  SET_SEARCH(state, condition) {
    state.searchingInsert = condition;
  },
  SET_PRODUCT_FILTERED(state, payload) {
    state.filteredProduct = payload;
  },
  SET_PRODUCT_ORDER(state, order) {
    state.productOrder = order;
  },
  CLEAR_FILTER(state) {
    state.filterBrand = [];
    state.filterCondition = [];
    state.productOrder = [];
    state.searchingInsert = [];
  }
};

export const actions = {
  fetchProducts({ commit }) {
    if (this.getProducts === undefined || this.getProducts.length == 0) {
      productService
        .getProducts()
        .then(products => {
          commit("SET_PRODUCTS", products);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  async fetchFilteredProduct({ commit, getters }) {
    NProgress.start();
    const apiClient = contentful.createClient({
      space: "d1c4u2kmipnr",
      accessToken: "7TjtAOZ-I8BkPvGsU-UvvB6QusdRMcjV4LjF1o3vre0"
    });
    await apiClient
      .getEntries({
        content_type: "ecommerce",
        query: getters.getSearch,
        "fields.category": getters.getfilterCondition,
        "fields.title": getters.getFilterBrand,
        order: "fields.price"
      })
      .then(res => {
        let contentful = res;
        let products = contentful.items;

        products = products.map(item => {
          const { title, name, category, onsale, gender } = item.fields;
          const { id } = item.sys;
          const image = "https:" + item.fields.image.fields.file.url + "?w=500";
          const price = item.fields.price.toFixed(2);
          return { title, price, id, image, name, category, onsale, gender };
        });
        return products;
      })
      .then(products => {
        commit("SET_PRODUCT_FILTERED", products);
        NProgress.done();
      })
      .catch(error => console.log(error));
  },

  filterProduct({ commit }, condition) {
    commit("SET_FILTERCONDITION", condition);
  },
  setProductOrder({ commit }, order) {
    commit("SET_PRODUCT_ORDER", order);
  },
  setSearching({ commit }, condition) {
    commit("SET_SEARCH", condition);
  },
  filterBrand({ commit }, condition) {
    commit("SET_BRAND", condition);
  },
  clearFilter({ commit }) {
    commit("CLEAR_FILTER");
  }
};
export const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  getfilterCondition: state => state.filterCondition,
  getSearch: state => state.searchingInsert,
  getProducts: state => state.products,
  getFilteredProducts: state => state.filteredProduct,
  getFilterBrand: state => state.filterBrand,
  getProductOrder: state => state.productOrder
};
