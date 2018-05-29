<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$page-bg: #fcfcfc;
$base-text-color: #2c3e50;
$page-width: 60%;

html,
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background-color: $page-bg;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $base-text-color;
  width: $page-width;
  margin: 0 auto;
}
</style>
