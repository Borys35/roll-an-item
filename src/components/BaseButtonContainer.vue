<template>
  <div><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseButtonContainer",
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: $sm-bp) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
