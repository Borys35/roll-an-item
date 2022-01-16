<template>
  <div class="list">
    <saved-rollings-list-item
      v-for="(rolling, i) in rollings"
      :key="i"
      :index="i"
      :name="rolling.name"
      @main-click="handleItemClick(parseInt(i))"
      @bin-click="deleteRolling(parseInt(i))"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SavedRollingsListItem from "./SavedRollingsListItem.vue";

export default defineComponent({
  components: { SavedRollingsListItem },
  name: "SavedRollingsList",
  props: {
    rollings: {
      type: Array.of(Object),
      required: true,
    },
    deleteRolling: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleItemClick(index: number) {
      const confirmed = confirm("Do you want to load this rolling?");
      if (!confirmed) return;

      this.$store.commit("setRollItems", {
        rollItems: this.rollings[index].rollItems,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 30rem;
  overflow-y: auto;
}
</style>
