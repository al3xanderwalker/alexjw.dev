<template>
  <div class="e404">
    <img src="/E404.svg" />
    Page Not Found
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "E404",
  components: {},
};
</script>

<style scoped>
.e404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 40px;
}
img {
  margin-bottom: 20px;
}
</style>
