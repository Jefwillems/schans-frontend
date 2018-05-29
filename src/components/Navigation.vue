<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">home</router-link>
            </li>
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
  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      list-style: none;
      display: inline-block;
      #{$a-tags} {
        text-decoration: none;
        color: $base-text-color;
      }
      #{$a-tags-hover} {
        color: lighten($color: $base-text-color, $amount: 50%);
        text-decoration: underline;
      }
    }
  }
}
</style>
