<template>
  <base-layout>
    <div class="container">
      <h1>About the project</h1>
      <section>
        <h2>What is Roll an Item?</h2>
        <p>
          Vel mattis egestas nibh nibh id morbi. Eu, commodo pretium sed ac
          amet. Enim gravida id in ultrices at. Non justo, eget neque, neque
          massa facilisis praesent. Lorem in ac, in a, feugiat amet orci.
          Vestibulum volutpat augue scelerisque aliquam at sed mattis. Et purus
          eu fringilla pellentesque. Purus mattis eu augue cras turpis hendrerit
          neque suspendisse velit. Nunc, nisl, senectus faucibus velit
          dignissim. Dui, suspendisse duis in nisi adipiscing cursus. Volutpat,
          orci, sit viverra nec massa. Volutpat sed quis ac dolor elementum
          arcu. Ut massa vel risus pellentesque in consequat felis. Suspendisse
          enim ipsum sed iaculis sodales. Eleifend leo auctor aliquam suscipit.
        </p>
      </section>
      <section>
        <h2>Why it was developed?</h2>
        <p>
          Vel mattis egestas nibh nibh id morbi. Eu, commodo pretium sed ac
          amet. Enim gravida id in ultrices at. Non justo, eget neque, neque
          massa facilisis praesent. Lorem in ac, in a, feugiat amet orci.
          Vestibulum volutpat augue scelerisque aliquam at sed mattis. Et purus
          eu fringilla pellentesque. Purus mattis eu augue cras turpis hendrerit
          neque suspendisse velit. Nunc, nisl, senectus faucibus velit
          dignissim. Dui, suspendisse duis in nisi adipiscing cursus. Volutpat,
          orci, sit viverra nec massa. Volutpat sed quis ac dolor elementum
          arcu. Ut massa vel risus pellentesque in consequat felis. Suspendisse
          enim ipsum sed iaculis sodales. Eleifend leo auctor aliquam suscipit.
        </p>
      </section>
      <section>
        <h2>Check the app</h2>
        <p>
          Vel mattis egestas nibh nibh id morbi. Eu, commodo pretium sed ac
          amet. Enim gravida id in ultrices at.
        </p>
        <base-button-container class="btn-container">
          <base-button variant="primary" to="/">Roll</base-button>
          <base-button to="/contact">Contact</base-button>
        </base-button-container>
      </section>
    </div>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import BaseLayout from "@/components/BaseLayout.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtonContainer from "@/components/BaseButtonContainer.vue";

export default defineComponent({
  name: "AboutPage",
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
  padding: 4rem $base-spacing;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
/* h1 {
  text-align: center;
} */
h2 {
  margin-bottom: 1rem;
}
.btn-container {
  margin-top: 1rem;
}
</style>
