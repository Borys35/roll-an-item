<template>
  <div class="base-layout">
    <img class="bg" src="@/assets/bg-circles.svg" />
    <the-navbar />
    <main>
      <slot></slot>
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TheFooter from "./TheFooter.vue";
import TheNavbar from "./TheNavbar.vue";

export default defineComponent({
  name: "BaseLayout",
  components: {
    TheNavbar,
    TheFooter,
  },
});
</script>

<style lang="scss" scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.bg {
  position: absolute;
  z-index: -1;
  top: 4rem;
  width: unquote("max(800px, 110vw)");
  left: 50%;
  transform: translate(-50%);
}

main {
  flex: 1;
}
</style>
