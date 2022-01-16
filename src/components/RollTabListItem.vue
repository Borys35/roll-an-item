<template>
  <div class="item">
    <h5>{{ name }}</h5>
    <div>
      <p>Luck rate</p>
      <p class="luck-rate">{{ luckRate }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "RollListItem",
  props: {
    name: String,
    luckRate: Number,
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
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.15);
  }

  > div {
    text-align: right;
    min-width: min-content;
  }
}

h5 {
  word-break: break-all;
}

p:not(.luck-rate) {
  font-size: $font-sm;
}

.luck-rate {
  font-weight: bold;
  color: $white;
}
</style>
