<template>
  <div class="footer">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class NavLink extends Vue {
  text!: string;
}
</script>

<style scoped>
.footer {
  background: #141517;
  font-size: 10px;
  font-weight: 100;
  color: white;
  padding: 1.5rem;
  text-align: center;
}
</style>