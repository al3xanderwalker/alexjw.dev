<template>
  <div class="home">
    <div class="hello">Hello, I'm Alex</div>
    <div class="profession">Programmer, Student, Developer</div>
    <div class="findmeon">Find Me On</div>
    <div class="socials">
      <a
        href="https://steamcommunity.com/profiles/76561198247143586/"
        class="social-link"
        ><img src="steam.png" height="50" alt="Steam link"
      /></a>
      <a href="https://github.com/al3xanderwalker" class="social-link"
        ><img src="github.png" height="50" alt="Github link"
      /></a>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  transition: font-size 0.5s ease-in;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}
.hello {
  font-size: 100px;
}
.profession {
  padding-left: 6px;
  font-size: 30px;
}
.findmeon {
  padding-left: 6px;
  font-size: 20px;
}
img {
  margin-top: 5px;
  padding-left: 6px;
  filter: invert(1);
}
@media screen and (max-width: 900px) {
  .hello {
    font-size: 70px;
  }
  .profession {
    font-size: 21px;
  }
  .findmeon {
    font-size: 14px;
  }
  .socials img {
    height: 40px;
  }
}
</style>
