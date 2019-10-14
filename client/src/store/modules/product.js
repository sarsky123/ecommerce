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
    console.log("product is added");
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
  PUSH_PRODUCT_FILTERED(state, payload) {
    state.filteredProduct.push(payload);
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
        "fields.Category": getters.getfilterCondition,
        "fields.Title": getters.getFilterBrand,
        order: "fields.Price"
      })
      .then(res => {
        console.log(res);
        let contentful = res;
        let products = contentful.items;

        products = products.map(item => {
          const { Title, Name, Category, Onsale, Gender } = item.fields;
          const ProductID = item.sys.id;
          const Image = "https:" + item.fields.Image.fields.file.url + "?w=500";
          const Price = item.fields.Price.toFixed(2);
          return {
            Title,
            Price,
            ProductID,
            Image,
            Name,
            Category,
            Onsale,
            Gender
          };
        });

        return products;
      })
      .then(products => {
        commit("SET_PRODUCT_FILTERED", products);
        NProgress.done();
      })
      .catch(error => console.log(error));
  },
  async fetchProductTenByTen({ commit, getters }, limitCount) {
    NProgress.start();
    const apiClient = contentful.createClient({
      space: "d1c4u2kmipnr",
      accessToken: "7TjtAOZ-I8BkPvGsU-UvvB6QusdRMcjV4LjF1o3vre0"
    });
    await apiClient
      .getEntries({
        content_type: "ecommerce",
        query: getters.getSearch,
        "fields.Category": getters.getfilterCondition,
        "fields.Title": getters.getFilterBrand,
        order: "fields.Price",
        sys: { type: "Array" },
        skip: limitCount * 10,
        limit: 10,
        total: 1256
      })
      .then(res => {
        let contentful = res;
        let products = contentful.items;

        products = products.map(item => {
          const { Title, Name, Category, Onsale, Gender } = item.fields;
          const ProductID = item.sys.id;
          const Image = "https:" + item.fields.Image.fields.file.url + "?w=500";
          const Price = item.fields.Price.toFixed(2);
          return {
            Title,
            Price,
            ProductID,
            Image,
            Name,
            Category,
            Onsale,
            Gender
          };
        });

        return products;
      })
      .then(products => {
        commit("PUSH_PRODUCT_FILTERED", products);
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
  getProductById: state => ProductID => {
    return state.products.find(product => product.ProductID == ProductID);
  },
  getfilterCondition: state => state.filterCondition,
  getSearch: state => state.searchingInsert,
  getProducts: state => state.products,
  getFilteredProducts: state => state.filteredProduct,
  getFilterBrand: state => state.filterBrand,
  getProductOrder: state => state.productOrder
};
