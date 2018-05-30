<template>
    <nav>
        <div class="brand">
            <router-link to="/">De Schans</router-link>
        </div>
        <ul>
            <li>
                <router-link to="/contact">contact</router-link>
            </li>
            <li>
                <router-link to="/huisje">Huisje</router-link>
            </li>
            <li>
                <router-link to="/locatie">Locatie</router-link>
            </li>
            <li>
                <router-link to="/fotos">Foto's</router-link>
            </li>
            <li>
                <router-link to="/agenda">Agenda</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$bg-color: #e5e5f5;
$base-text-color: #2c3e50;
$a-tags: 'a, a:active, a:hover, a:visited';
$a-tags-hover: 'a:active, a:hover';
nav {
  background-color: $bg-color;
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    li {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      #{$a-tags} {
        text-decoration: none;
        color: $base-text-color;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1rem;
      }
      #{$a-tags-hover} {
        color: lighten($color: $base-text-color, $amount: 50%);
        text-decoration: underline;
      }
      a.router-link-exact-active,
      a.router-link-active {
        border-bottom: 3px solid #499ff5;
      }
    }
  }
  .brand {
    font-size: 1.5rem;
    padding: 1rem;
  }
}
</style>
