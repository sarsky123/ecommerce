import productService from "@/services/productService.js";

export const namespaced = true;

export const state = {
  products: [],
  productsTotal: 0,
  product: {}
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

  fetchProduct({ commit, getters }, id) {
    var product = getters.getProductById(id);

    if (product) {
      commit("SET_PRODUCT", product);
    } else {
      productService
        .getProduct(id)
        .then(response => {
          commit("SET_PRODUCT", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
export const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },

  getProducts: state => state.products
};
