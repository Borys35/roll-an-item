<template>
  <transition name="page-transition" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss" scoped>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: 1s;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: scale(110%);
}
</style>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 14px;
}

body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  background: $grey;
  color: $text-grey;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $white;
}

h1 {
  font-size: $font-4xl;
}

h2 {
  font-size: $font-3xl;
}

h3 {
  font-size: $font-2xl;
}

h4 {
  font-size: $font-xl;
}

h5 {
  font-size: $font-lg;
}

p {
  line-height: 150%;
}

a {
  text-decoration: none;
  color: $text-grey;
}

@media screen and (min-width: $md-bp) {
  :root {
    font-size: 16px;
  }
}
</style>
