<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseFormSpacer",
});
</script>

<style lang="scss" scoped>
div {
  height: 2px;
  background: $grey;
  border-radius: 4px;
}
</style>
