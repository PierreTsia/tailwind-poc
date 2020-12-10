import { createStore } from "vuex";
import { Mode } from "@/composables/darkMode";
import * as mutations from "./mutations-types";
import * as actions from "./actions-types";

export default createStore({
  state: {
    mode: null
  },
  getters: {
    isDark: state => state.mode === Mode.Dark
  },
  mutations: {
    [mutations.DARK_MODE_SET_SUCCESS]: (state, mode) => (state.mode = mode)
  },
  actions: {
    [actions.SET_DARK_MODE]: ({ commit }, mode) => {
      localStorage.setItem("theme", mode);
      commit(mutations.DARK_MODE_SET_SUCCESS, mode);
    }
  },
  modules: {}
});
