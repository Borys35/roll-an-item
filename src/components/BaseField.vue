<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseField",
  props: {
    label: String,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
</style>
