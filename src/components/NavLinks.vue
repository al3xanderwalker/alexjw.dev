<template>
  <ul :class="[dropdown ? 'show' : '', 'links']">
    <NavLink url="/" text="HOME"></NavLink>
    <NavLink url="/about" text="ABOUT"></NavLink>
    <NavLink url="/projects" text="PROJECTS"></NavLink>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavLink from "./NavLink.vue";

@Options({
  props: {
    dropdown: Boolean,
  },
  components: {
    NavLink,
  },
})
export default class NavLinks extends Vue {
  dropdown!: boolean;
}
</script>

<style scoped>
.links {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.links.show {
  display: flex;
}
@media screen and (max-width: 900px) {
  .links {
    margin-top: 0.5rem;
    display: none;
    flex-direction: column;
  }
}
</style>