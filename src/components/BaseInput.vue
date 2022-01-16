<template>
  <input @input="onChanged" :value="modelValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    function onChanged(e: any) {
      emit("update:modelValue", e.currentTarget.value);
    }

    return {
      onChanged,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  all: unset;
  background: $grey;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
