<template>
  <header class="navBar">
    <div class="title">
      <a href="/" class="text">AlexJW.Dev</a>
      <i
        id="dropdown"
        class="fa fa-bars fa-2x"
        aria-hidden="true"
        v-on:click="dropdown = !dropdown"
      ></i>
    </div>
    <NavLinks :dropdown="dropdown"></NavLinks>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavLinks from "./NavLinks.vue";

@Options({
  props: {},
  components: {
    NavLinks,
  },
})
export default class NavBar extends Vue {
  private dropdown: boolean = false;
}
</script>

<style scoped>
.navBar {
  color: white;
  background: #141517;
  display: grid;
  grid-template-columns: 5fr 5fr 1fr;
  grid-auto-rows: auto;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}
.title {
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-auto-rows: auto;
  align-items: center;
  /* text-align: center; */
}
.text {
  text-decoration: none;
  color: white;
  transition: color 0.5s ease-in;
  margin-left: 1rem;
  font-size: 2em;
  font-weight: bold;
  float: left;
  text-align: left;
}
#dropdown {
  display: none;
}
@media screen and (max-width: 900px) {
  #dropdown {
    display: inline-block !important;
  }
  .navBar {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
}
</style>