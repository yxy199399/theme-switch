import Vue from "vue";
import Vuex from "vuex";
import Theme from "../theme/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: Theme.theme.colorPrimary
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value;
      }
    }
  },
  actions: {
    changeSetting({ commit }, data) {
      commit("CHANGE_SETTING", data);
    }
  },
  modules: {}
});
