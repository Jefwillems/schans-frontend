import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [{ id: 1, active: true }, { id: 2, active: false }],
    days: []
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    addDays(state, days) {
      state.days.push(...days);
    }
  },
  actions: {
    getDays({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          const days = [
            { datum: new Date(1992, 6, 19), id: 2, username: 'jefwillems' },
            { datum: new Date(1995, 3, 5), id: 3, username: 'leenwillems' }
          ];
          commit('addDays', days);
          resolve();
        }, 2000);
      });
    }
  },
  getters: {
    activeTodos(state) {
      return state.todos.filter(el => el.active);
    },
    countTodos(state) {
      return state.todos.length;
    },
    getDagById: state => id => {
      const day = state.days.find(el => el.id === id);
      if (!day) {
        return { datum: 'loading...', id, username: 'loading...' };
      }
      return day;
    }
  },
  modules: {},
  strict: debug,
  plugins: [createLogger()]
});
