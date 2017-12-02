import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    blocks: []
  },
  getters: {
    blocks(state) {
      return state.blocks;
    }
  },
  mutations: {
    add(state, {type, item}) {
      state[type].push(item);
    }
  },
  actions: {
    addBlock({ commit }, block) {
      commit('add', { type: 'blocks', item: block })
    }
  }
})

export default store;
