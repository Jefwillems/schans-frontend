<template>
    <div>
        <p v-for="todo in actives" :key="todo.id">{{todo}}</p>
    </div>
</template>
<script>
import store from '@/store';
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    actives() {
      return store.getters.activeTodos;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
