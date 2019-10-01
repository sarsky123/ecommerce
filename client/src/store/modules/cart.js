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
    if (state.cartProducts.map(cartP => cartP.id).indexOf(product.id) == -1) {
      state.cartProducts.push({
        ...product,
        amount: 1
      });
      console.log("product is added" + product);
    } else {
      throw new Error("fk you");
    }
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
  async addProduct(context, product) {
    try {
      await context.commit("ADD_PRODUCT", product);
    } catch (error) {
      const notification = {
        type: "warning",
        message: "Products are already in the cart"
      };
      context.dispatch("notification/add", notification, { root: true });
      throw error;
    }
    const notification = {
      type: "success",
      message: "Your product is in the cart!"
    };
    context.dispatch("notification/add", notification, { root: true });
  },
  removeProduct: (context, index) => {
    async function remove() {
      await context.commit("REMOVE_PRODUCT", index);
      return;
    }
    remove()
      .then(() => {
        const notification = {
          type: "warning",
          message: "Selected Product has been removed"
        };
        context.dispatch("notification/add", notification, { root: true });
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There are some problem when you were removing the product"
        };
        context.dispatch("notification/add", notification, { root: true });
        throw error;
      });
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
