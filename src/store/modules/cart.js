export const namespaced = true;

export const state = {
  cartProducts: [],
  currentProduct: {},
  showModal: false,
  showPopupCart: false
};
export const getters = {
  getProductsInCart: state => state.cartProducts,
  getCurrentProduct: state => state.currentProduct,
  getShowModal: state => state.showModal,
  getPopupCart: state => state.showPopupCart,
  getProductById: state => id => {
    return state.cartProducts.find(product => product.id === id);
  }
};
export const mutations = {
  ADD_PRODUCT: (state, product) => {
    state.cartProducts.push({
      ...product,
      amount: 1
    });
  },
  REMOVE_PRODUCT: (state, index) => {
    state.cartProducts.splice(index, 1);
  },
  CURRENT_PRODUCT: (state, product) => {
    state.currentProduct = product;
  },
  SHOW_MODAL: state => {
    state.showModal = !state.showModal;
  },
  SHOW_POPUP_CART: state => {
    state.showPopupCart = !state.showPopupCart;
  },
  PURGE_THE_CART: state => {
    state.cartProducts.splice("deleteCount");
  }
};
export const actions = {
  addProduct: (context, product) => {
    context.commit("ADD_PRODUCT", product);
  },
  removeProduct: (context, index) => {
    context.commit("REMOVE_PRODUCT", index);
  },
  currentProduct: (context, product) => {
    context.commit("CURRENT_PRODUCT", product);
  },
  showOrHiddenModal: context => {
    context.commit("SHOW_MODAL");
  },
  showOrHiddenPopupCart: context => {
    context.commit("SHOW_POPUP_CART");
  },
  clearCart: context => {
    context.commit("PURGE_THE_CART");
  }
};
