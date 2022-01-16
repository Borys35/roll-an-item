<template>
  <div class="wrapper">
    <base-button
      @click="clearRollItems"
      variant="danger"
      :disabled="!rollItems.length"
      >Clear All</base-button
    >
    <base-button @click="addNewItem">Add Item</base-button>
    <roll-tab-list />
    <base-modal :show="activeRollItemIndex !== null" @on-close="closeModal">
      <base-form @submit.prevent>
        <h4>Item settings</h4>
        <base-field label="Name">
          <base-input v-model="activeName" />
        </base-field>
        <base-field label="Luck rate">
          <base-input v-model.number="activeLuckRate" />
        </base-field>
        <base-button variant="primary" size="md" @click="closeModal"
          >Done!</base-button
        >
        <base-form-spacer />
        <base-button variant="danger" size="md" @click="deleteActiveItem"
          >Delete</base-button
        >
      </base-form>
    </base-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapMutations, mapState } from "vuex";
import BaseButton from "./BaseButton.vue";
import BaseField from "./BaseField.vue";
import BaseForm from "./BaseForm.vue";
import BaseFormSpacer from "./BaseFormSpacer.vue";
import BaseInput from "./BaseInput.vue";
import BaseModal from "./BaseModal.vue";
import RollTabList from "./RollTabList.vue";

export default defineComponent({
  components: {
    RollTabList,
    BaseButton,
    BaseModal,
    BaseForm,
    BaseField,
    BaseFormSpacer,
    BaseInput,
  },
  name: "RollTab",
  computed: {
    ...mapState(["activeRollItemIndex", "rollItems"]),
    activeName: {
      get() {
        if (this.$store.state.activeRollItemIndex === null) return undefined;
        return this.$store.state.rollItems[
          this.$store.state.activeRollItemIndex
        ].name;
      },
      set(value) {
        this.$store.commit("updateRollItem", {
          index: this.$store.state.activeRollItemIndex,
          rollItem: { name: value },
        });
      },
    },
    activeLuckRate: {
      get() {
        if (this.$store.state.activeRollItemIndex === null) return undefined;
        return this.$store.state.rollItems[
          this.$store.state.activeRollItemIndex
        ].luckRate;
      },
      set(value) {
        this.$store.commit("updateRollItem", {
          index: this.$store.state.activeRollItemIndex,
          rollItem: { luckRate: value },
        });
      },
    },
  },
  methods: {
    ...mapMutations(["addRollItem", "updateRollItem", "deleteRollItem"]),
    addNewItem() {
      this.$store.commit("addRollItem", {
        rollItem: { name: "New Item", luckRate: 1 },
      });
      this.$store.commit("setActiveRollItemIndex", {
        index: this.$store.state.rollItems.length - 1,
      });
    },
    closeModal() {
      this.$store.commit("setActiveRollItemIndex", {
        index: null,
      });
    },
    deleteActiveItem() {
      this.$store.commit("deleteRollItem", {
        index: this.$store.state.activeRollItemIndex,
      });
      this.closeModal();
    },
    clearRollItems() {
      this.$store.commit("setRollItems", {
        rollItems: [],
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
