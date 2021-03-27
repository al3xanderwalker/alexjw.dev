<template>
  <div class="navLink">
    <li>
      <router-link :to="url" class="link" active-class="active"
        >{{ text }}
      </router-link>
    </li>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    url: String,
    text: String,
  },
})
export default class NavLink extends Vue {
  url!: string;
  text!: string;
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
  text-decoration: none;
}
.active {
  color: rgb(39, 123, 233);
}
.link:hover {
  filter: brightness(80%);
  cursor: pointer;
}
</style>