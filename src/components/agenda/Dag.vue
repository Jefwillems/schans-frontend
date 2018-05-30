<template>
    <div class="dag">
        <div class="datum">
            <p>datum: {{dag.datum}}</p>
        </div>
        <div class="username">
            <p>username: {{dag.username}}</p>
        </div>
        <div class="id">id: {{id}}</div>
    </div>
</template>
<script>
import store from '../../store';
export default {
  props: ['id'],
  computed: {
    dag() {
      return store.getters.getDagById(this.id);
    }
  },
  mounted() {
    store.dispatch('getDays');
  }
};
</script>
