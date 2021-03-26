<template>
  <div class="navLink">
    <li>
      <a :href="link" :class="['link', active ? 'active' : '']">{{ text }}</a>
    </li>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    link: String,
    text: String,
    active: Boolean,
  },
})
export default class NavLink extends Vue {
  link!: string;
  text!: string;
  active!: boolean;
}
</script>

<style scoped>
.link {
  color: white;
  transition: all 0.2s ease-in;
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  padding: 0 10px;
  font-size: 30px;
  border-radius: 5px;
}
.active {
  color: rgb(39, 123, 233);
}
.link:hover {
  filter: brightness(80%);
}
</style>