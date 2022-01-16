<template>
  <div class="list">
    <roll-tab-list-item
      v-for="(rollItem, i) in rollItems"
      :key="i"
      :name="rollItem.name"
      :luckRate="rollItem.luckRate"
      @click="openModal(i)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapState } from "vuex";
import RollTabListItem from "./RollTabListItem.vue";

export default defineComponent({
  name: "RollTabList",
  components: { RollTabListItem },
  computed: mapState(["rollItems"]),
  methods: {
    openModal(index: number) {
      this.$store.commit("setActiveRollItemIndex", { index });
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
  overflow-x: hidden;
}
</style>
