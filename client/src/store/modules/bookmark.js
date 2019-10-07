export const namespaced = true;

export const state = {
  bookmarks: null
};
export const mutations = {
  SET_BOOKMARKS(state, bookmark) {
    bookmark = bookmark.map(book => book.ProductID);
    state.bookmarks = bookmark;
  },
  DELETE_BOOKMARKS(state, bookmarkID) {
    state.bookmarks = state.bookmarks.filter(obj => bookmarkID !== obj);
  },
  ADD_INDIVIDUAL_BOOKMARK(state, bookmark) {
    state.bookmarks.push(bookmark);
  }
};
export const actions = {
  setBookmark({ commit }, bookmark) {
    commit("SET_BOOKMARKS", bookmark);
  },
  addIndividualBookmark({ commit }, bookmarkID) {
    commit("ADD_INDIVIDUAL_BOOKMARK", bookmarkID);
  },
  deleteBookmark({ commit }, bookmarkID) {
    commit("DELETE_BOOKMARKS", bookmarkID);
  }
};
export const getters = {
  getBookmarks: state => state.bookmarks
};
