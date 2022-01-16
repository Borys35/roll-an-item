<template>
  <form>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseForm",
});
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
