<template>
  <base-layout>
    <div class="container">
      <h1>Contact me!</h1>
      <p>Feel free to get in touch!</p>
      <base-button-container>
        <base-button variant="primary" href="mailto:boryskac10@gmail.com">
          E-mail
        </base-button>
        <base-button
          href="https://github.com/Borys35/roll-an-item"
          target="_blank"
        >
          Source code
        </base-button>
      </base-button-container>
    </div>
  </base-layout>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import BaseLayout from "../components/BaseLayout.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseButtonContainer from "../components/BaseButtonContainer.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    BaseLayout,
    BaseButton,
    BaseButtonContainer,
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: $lg-bp;
  margin: 0 auto;
  padding: $base-spacing;
}
h1 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 2rem;
}
</style>
