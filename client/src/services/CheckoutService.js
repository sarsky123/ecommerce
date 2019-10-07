import Api from "@/services/Api";

export default {
  get() {
    return Api().get("checkout");
  },
  post(checkoutInfo) {
    return Api().post("checkout", checkoutInfo);
  }
};
