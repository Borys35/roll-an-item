<template>
  <base-layout>
    <h1>About</h1>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import BaseLayout from "@/components/BaseLayout.vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    BaseLayout,
  },
});
</script>

<style></style>
