<template>
  <NavBar></NavBar>
  <div>t</div>
  <Footer text="Copyright © 2020 Alex Walker. All rights reserved."></Footer>
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
#app {
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
body {
  margin: 0;
  background: url("https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
    no-repeat center center fixed;
  background-size: cover;
  backdrop-filter: brightness(40%);
}
</style>
