<template>
  <router-link
    v-if="to"
    :to="to"
    class="btn"
    :class="{
      'btn--primary': variant === 'primary',
      'btn--danger': variant === 'danger',
      'btn--md': size === 'md',
    }"
  >
    <slot></slot>
  </router-link>

  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="{
      'btn--primary': variant === 'primary',
      'btn--danger': variant === 'danger',
      'btn--md': size === 'md',
    }"
  >
    <slot></slot>
  </a>

  <button
    v-else
    class="btn"
    :class="{
      'btn--primary': variant === 'primary',
      'btn--danger': variant === 'danger',
      'btn--md': size === 'md',
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseButton",
  props: {
    variant: String,
    size: String,
    to: String,
    href: String,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  all: unset;
  position: relative;
  cursor: pointer;
  padding: 0.75em 3em;
  border-radius: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: $font-lg;
  letter-spacing: 0.1em;
  text-align: center;
  outline: 3px solid;
  outline-color: rgba($primary, $alpha: 1);
  outline-offset: 0;
  transition: 0.3s;
  box-shadow: 0 0 0 3px $primary;

  &:hover {
    outline-offset: 0.75rem;
    outline-color: rgba($primary, $alpha: 0);
    box-shadow: 0 0 0 3px $primary, 0 0 16px $primary;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &--primary {
    background: $primary;
  }

  &--danger {
    background: $red;
    border: none;
    outline-color: rgba($red, $alpha: 1);
    box-shadow: 0 0 0 3px $red;

    &:hover {
      outline-color: rgba($red, $alpha: 0);
      box-shadow: 0 0 0 3px $red, 0 0 16px $red;
    }
  }

  &--md {
    font-size: $font-md;
  }
}
</style>
