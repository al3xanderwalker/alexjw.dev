<template>
  <div class="project">
    <div class="project-head">
      <a :href="link" class="project-title">{{ title }}</a>
      <div v-for="(icon, index) in icons" :key="index">
        <i :class="getIcon(icon)"></i>
      </div>
    </div>
    <div class="project-description">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    link: String,
    icons: Array<String>(),
  },
  methods: {
    getIcon: (iconName: string): string[] => {
      switch (iconName) {
        case "csharp":
          return ["devicon-csharp-plain"];
        case "node":
          return ["devicon-nodejs-plain", "colored"];
        case "ts":
          return ["devicon-typescript-plain", "colored"];
        case "css":
          return ["devicon-css3-plain", "colored"];
        case "html":
          return ["devicon-html5-plain", "colored"];
        case "database":
          return ["fas", "fa-database"];
        case "js":
          return ["devicon-javascript-plain", "colored"];
        case "npm":
          return ["devicon-npm-original-wordmark", "colored"];
        case "bootstrap":
          return ["devicon-bootstrap-plain", "colored"];
        default:
          return ["fab", `fa-${iconName}`];
      }
    },
  },
})
export default class Project extends Vue {
  title!: string;
  link!: string;
  icons!: string[];
}
</script>

<style scoped>
.project {
  background: #141517;
  border-radius: 5px;
  padding: 20px;
  min-width: 250px;
  max-width: 600px;
}
.project-title {
  margin-right: 5px;
  padding: 3px;
  color: #277be9;
  font-weight: bold;
  font-size: 30px;
}
.project-title:hover {
  filter: brightness(90%);
}
.project-head {
  display: flex;
}
.project-description {
  margin-top: 10px;
  color: white;
}
i {
  margin-top: 0.6rem;
  margin-right: 0.5rem;
  color: white;
  font-size: 1.7rem;
}
.colored {
  line-height: 43px;
}

/* Icon Colors */
.devicon-csharp-plain {
  color: #9053eb;
  line-height: 43px;
}
.fa-database {
  color: #e32540;
}
.fa-discord {
  color: #7289da;
}
.fa-paypal {
  color: #0178ba;
}
</style>