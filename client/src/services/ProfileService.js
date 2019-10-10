import Api from "@/services/Api";

export default {
  get() {
    return Api().get("profile");
  },
  post(profileInfo) {
    return Api().post("profile", profileInfo);
  }
};
