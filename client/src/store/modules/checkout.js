export const state = {
  CheckoutInfo: {
    Information: {
      Name: { FirstName: "", LastName: "" },
      Email: "",
      Phone: {
        Phone: "",
        CellPhone: ""
      }
    },
    ShippingInfo: {
      Address: "",
      City: "",
      Country: "",
      PostCode: ""
    },
    Billing: {
      NameOnCard: "",
      CreditCardNumber: "",
      ExpiredDate: "",
      CVC: ""
    }
  }
};
export const mutations = {
  ADD_INFORMATION(state, payload) {
    state.CheckoutInfo.Information = payload.Information;
  },
  ADD_SHIPPINGINFO(state, payload) {
    state.CheckoutInfo.ShippingInfo = payload.ShippingInfo;
  },
  ADD_BILLING(state, payload) {
    state.CheckoutInfo.Billing = payload.Billing;
  }
};
export const actions = {
  addInformation({ commit }, payload) {
    commit("ADD_INFORMATION", payload);
  },
  addShippingInfo({ commit }, payload) {
    commit("ADD_SHIPPINGINFO", payload);
  },
  addBilling({ commit }, payload) {
    commit("ADD_BILLING", payload);
  }
};
export const getters = {
  getCheckoutInfo(state) {
    return state.CheckoutInfo;
  }
};

export const namespaced = true;
