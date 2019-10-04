import Api from "@/services/Api";

export default {
  index(bookmark) {
    return Api().get("bookmarks", {
      params: bookmark
    });
  },
  post(bookmark) {
    return Api().post("bookmarks", {
      ProductID: bookmark
    });
  },

  delete(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  }
};
