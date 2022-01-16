<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div class="shadow" @click="close" v-if="show">
        <div class="modal">
          <slot></slot>
          <!-- MAKE IT A MODAL-BUTTON -->
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseModal",
  props: {
    show: Boolean,
    onClose: Function,
  },
  data() {
    return {
      passedShow: this.show,
    };
  },
  methods: {
    close(e: Event) {
      if (e.target !== e.currentTarget) return;

      this.$emit("onClose");
    },
  },
});
</script>

<style lang="scss" scoped>
.shadow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($dark-grey, $alpha: 0.8);
  z-index: 9;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  border-radius: 1rem;
  background: $lighter-grey;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
