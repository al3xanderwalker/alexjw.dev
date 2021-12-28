<template>
  <NavBar></NavBar>
  <div class="container">
    <router-view />
  </div>
  <Footer text="Copyright © 2022 Alex Walker. All rights reserved."></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    NavBar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #277be9;
}
#app {
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
body {
  margin: 0;
  background: url("/background.jfif") no-repeat center center fixed;
  background-size: cover;
  backdrop-filter: brightness(40%);
}
.container {
  display: grid;
  place-items: center;
  overflow-y: scroll;
}
</style>
