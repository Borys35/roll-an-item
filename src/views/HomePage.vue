<template>
  <BaseLayout><h1>Home</h1></BaseLayout>
</template>

<script lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HomePage",
  components: { BaseLayout },
});
</script>

<style lang="scss" scoped>
h1 {
  color: $white;
}
</style>
