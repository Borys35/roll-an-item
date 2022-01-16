<template>
  <div class="item" @click="handleClick($event)">
    <h5>{{ name }}</h5>
    <font-awesome-icon icon="trash" @click="handleBinClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "SavedRollingsListItem",
  props: {
    storageKey: String,
    name: String,
  },
  methods: {
    handleClick(event: Event) {
      if ((event.target as HTMLElement).tagName === "path") return;

      this.$emit("main-click");
    },
    handleBinClick() {
      const confirmed = confirm(`Do you want to delete ${this.name}?`);
      if (!confirmed) return;

      this.$emit("bin-click");
    },
  },
});
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  padding: 1rem;
  background: $light-grey;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.15);
  }
}

h5 {
  flex: 1;
  word-break: break-all;
}

svg {
  transition: 0.15s;

  &:hover {
    transform: scale(1.2);
    color: $red;
  }
}
</style>
