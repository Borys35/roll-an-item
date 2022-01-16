<template>
  <div class="wrapper">
    <base-button @click="show = true">
      Save <font-awesome-icon icon="save" />
    </base-button>
    <div>
      <h4>Saved rollings</h4>
      <p>You can save your rollings locally</p>
    </div>
    <saved-rollings-list :rollings="rollings" :delete-rolling="deleteRolling" />
    <base-modal :show="show" @on-close="closeModal">
      <base-form @submit.prevent>
        <h4>Save rolling</h4>
        <base-field label="Name">
          <base-input v-model="rollingName" />
        </base-field>
        <base-button
          @click="saveRolling"
          variant="primary"
          size="md"
          :disabled="!rollingName || !rollItems.length"
        >
          Save
        </base-button>
      </base-form>
    </base-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapState } from "vuex";
import BaseButton from "./BaseButton.vue";
import BaseField from "./BaseField.vue";
import BaseForm from "./BaseForm.vue";
import BaseInput from "./BaseInput.vue";
import BaseModal from "./BaseModal.vue";
import SavedRollingsList from "./SavedRollingsList.vue";

export default defineComponent({
  components: {
    SavedRollingsList,
    BaseButton,
    BaseModal,
    BaseField,
    BaseForm,
    BaseInput,
  },
  name: "SavedRollings",
  data() {
    const jsonString = localStorage.getItem("rollings");
    const rollings = jsonString ? JSON.parse(jsonString) : [];
    return {
      show: false,
      rollingName: "",
      rollings,
    };
  },
  computed: {
    ...mapState({
      rollItems: "rollItems",
    }),
  },
  methods: {
    closeModal() {
      this.show = false;
      this.rollingName = "";
    },
    deleteRolling(i: number) {
      this.rollings.splice(i, 1);
      localStorage.setItem("rollings", JSON.stringify(this.rollings));
    },
    saveRolling() {
      if (!this.rollingName || !this.rollItems.length) return;

      const rolling = { name: this.rollingName, rollItems: this.rollItems };
      this.rollings.push(rolling);
      localStorage.setItem("rollings", JSON.stringify(this.rollings));
      this.closeModal();
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
