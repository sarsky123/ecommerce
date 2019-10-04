import Api from "@/services/Api";

export default {
  get() {
    return Api().get("histories");
  },
  post(history) {
    return Api().post("histories", {
      ProductID: history
    });
  }
};
