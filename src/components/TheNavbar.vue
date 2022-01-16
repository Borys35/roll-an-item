<template>
  <nav>
    <h4><router-link to="/">roll-an-item</router-link></h4>
    <div class="nav-links" :class="{ 'nav-links--show': show }">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <font-awesome-icon class="nav-icon" icon="bars" v-on:click="show = !show" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheNavbar",
  data() {
    return {
      show: false,
    };
  },
  components: {},
});
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 1rem 1rem;
  max-width: $lg-bp;
  margin: 0 1rem;
  background: $dark-grey;
  padding: 1rem 2rem;

  @media (min-width: $lg-bp) {
    margin: 0 auto;
    width: calc(#{$lg-bp} - 2rem);
  }
}

.nav-links {
  display: none;
  gap: 1.5rem;

  &--show {
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: $dark-grey;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: $sm-bp) {
    display: flex;
    gap: 1.5rem;

    &--show {
      all: unset;
      display: flex;
      gap: 1.5rem;
    }
  }
}

.nav-icon {
  display: block;
  cursor: pointer;

  @media (min-width: $sm-bp) {
    display: none;
  }
}

a {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 1px;
    right: 0;
    // width: 100%;
    width: 0;
    background: $white;
    transition: 0.2s;
  }

  &:hover::before {
    width: 100%;
    left: 0;
    right: auto;
  }
}
</style>
