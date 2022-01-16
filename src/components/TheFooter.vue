<template>
  <p>&copy; {{ new Date().getFullYear() }}, Borys Kaczmarek</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFooter",
});
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  max-width: $lg-bp;
  margin: 0 auto;
  padding: 1rem 2rem;
}
</style>
