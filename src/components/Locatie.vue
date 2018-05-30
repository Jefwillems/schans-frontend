<template>
    <div>
        <p>Locatie</p>
        <p>count: {{count}}</p>
        <button @click="increment">state</button>
        <br>
        <form v-on:submit.prevent="addTodo">
            <label for="newTodo">new:<input id="newTodo" type="checkbox" v-model="formTodo.active"></label>
            <button type="submit">submit</button>
        </form>
        <p v-for="todo in actives" :key="todo.id">{{todo}}</p>
    </div>
</template>
<script>
import store from '../store';
export default {
  data() {
    return {
      formTodo: {
        active: false
      }
    };
  },
  methods: {
    increment() {
      store.commit('increment');
      console.log(store.state.count);
    },
    addTodo(event) {
      store.commit('addTodo', {
        id: store.getters.countTodos,
        active: this.formTodo.active
      });
    }
  },
  computed: {
    count() {
      return store.state.count;
    },
    actives() {
      return store.getters.activeTodos;
    }
  }
};
</script>
