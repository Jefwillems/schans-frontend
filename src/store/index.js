import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [{ id: 1, active: true }, { id: 2, active: false }]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  getters: {
    activeTodos(state) {
      return state.todos.filter(el => el.active);
    },
    countTodos(state) {
      return state.todos.length;
    }
  },
  modules: {},
  strict: debug,
  plugins: [createLogger()]
});
