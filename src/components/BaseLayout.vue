<template>
  <div class="container">
    <the-navbar />
    <main>
      <slot></slot>
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TheNavbar from "./TheNavbar.vue";
import TheFooter from "./TheFooter.vue";

export default defineComponent({
  name: "BaseLayout",
  components: {
    TheNavbar,
    TheFooter,
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
