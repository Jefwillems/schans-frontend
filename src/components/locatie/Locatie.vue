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
        <hr>
        <Map/>
    </div>
</template>
<script>
import store from '@/store';
import Map from './Map';
export default {
  data() {
    return {
      formTodo: {
        active: false
      }
    };
  },
  components: {
    Map
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
    }
  }
};
</script>
