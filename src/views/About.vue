<template>
  <div class="about">
    <img src="portrait.png" class="portrait" alt="profile picture" />
    <div class="name-age">Alex W | 17</div>
    <div class="info">
      Hello, my name is Alex Walker, online I go by Autism.Alex.<br />
      I'm a 17 year old aspiring computer scientist hoping to become a back-end
      or full stack web developer.<br />I'm always up for working on new
      projects to gain experience.
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
.about {
  display: grid;
  place-items: center;
}
.portrait {
  margin-top: 0.5rem;
  border-radius: 50%;
  height: 200px;
  width: 200px;
}
.name-age {
  margin-top: 1rem;
  transition: all 0.5s ease-in;
  font-size: 35px;
  font-weight: bold;
  color: white;
}
.info {
  text-align: center;
  margin-top: 0.5rem;
  transition: all 0.5s ease-in;
  font-size: 15px;
  color: white;
}
</style>
