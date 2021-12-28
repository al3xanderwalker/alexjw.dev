<template>
  <div class="projects">
    <Project
      title="Alexjw.dev"
      link="https://github.com/al3xanderwalker/alexjw.dev"
      :icons="['ts', 'html', 'css', 'vue']"
    >
      <span>Alexjw.dev</span> the site you are currently viewing, built using
      <span>vue</span> to further my knowledge of the framework.
    </Project>
    <Project
      title="Unturned Server Link"
      link="https://github.com/al3xanderwalker/UnturnedServerLink"
      :icons="['csharp', 'ts', 'database', 'discord']"
    >
      <span>Unturned Server Link</span> is the product of my year of diving into
      learning <span>c# and typescript</span>, it is purpose built to allow for
      communication and management of multiple gameservers, in a
      <span>client/server</span> setup.
    </Project>
    <Project
      title="Unturned Store"
      link="#"
      :icons="['node', 'html', 'css', 'js', 'bootstrap', 'database', 'paypal']"
    >
      <span>Unturned Store</span> is an e-commerce site, targetted towards game
      server owners. It allows them to list products for sale on their servers
      <span>easily</span> and <span>stylishly</span>. Due to it not being
      maintained the site is no longer available.
    </Project>
    <Project
      title="Unturned Info Bot"
      link="https://discord.gg/rDUsBTT"
      :icons="['node', 'discord', 'database']"
    >
      <span>Unturned Info Bot</span> is a community contribution based wiki in
      the form of a bot for the communications app <span>Discord</span>. The bot
      was adopted by <span>30+</span> communities including
      <span>~4000</span> users.
    </Project>
    <Project
      title="Simple Sqlite3"
      link="https://github.com/al3xanderwalker/simple-sqlite3"
      :icons="['database', 'ts', 'npm']"
    >
      <span>Simple Sqlite3</span> is a simplistic <span>wrapper class</span> for
      an sqlite3 database, data is stored in
      <span>key value pairs</span> allowing for the
      <span>storing of objects easily</span>, good for situations where you will
      always have the key to retrieve the data.
    </Project>
    <Project
      title="TTT Unturned"
      link="https://github.com/al3xanderwalker/tttunturned"
      :icons="['csharp', 'github']"
    >
      <span>TTT Unturned</span> is a popular gamemode in the game Garry's Mod,
      remade for Unturned, throughout working on this project I learnt how to
      <span>work collaboratively</span> through the use of github, as well as C#
      skills.
    </Project>
    <Project
      title="T1ny"
      link="https://t.alexjw.dev/"
      :icons="['ts', 'html', 'css', 'database']"
    >
      <span>T1ny</span> is a URL shortner, it allows users to take a larger
      <span>less memorable</span> url and convert it to a
      <span>smaller</span> one which when visited redirects to the
      <span>original</span>.
    </Project>
  </div>
</template>

<script lang="ts">
import Project from "../components/Project.vue";

export default {
  name: "Projects",
  components: { Project },
};
</script>

<style scoped>
.projects {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 1rem;
}
span {
  color: #16a2f3;
}
</style>
