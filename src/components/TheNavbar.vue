<template>
  <nav>
    <h1>roll-an-item</h1>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <a href="mailto:boryskac10@gmail.com">Contact</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheNavbar",
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
