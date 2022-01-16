<template>
  <base-layout>
    <div class="container">
      <h1>Roll an Item</h1>

      <div class="content">
        <section class="middle">
          <base-rolling />
        </section>
        <section class="left">
          <roll-tab />
        </section>
        <section class="right">
          <saved-rollings />
        </section>
      </div>

      <p>
        <strong>Note:</strong> You can look around the website with no worries!
        All data are global for this session. There is also counter which is NOT
        persisted. Try it! Counter {{ counter }}.
        <i v-on:click="increment">Increment</i>
        &nbsp;/&nbsp;
        <i v-on:click="decrement">Decrement</i>
        <br />
        <strong>Note 2:</strong> There is also example of counter which is
        persisted between pages. Try it too! Counter {{ storeCounter }}
        <i v-on:click="storeIncrement">Increment</i>
        &nbsp;/&nbsp;
        <i v-on:click="storeDecrement">Decrement</i>
      </p>
    </div>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import BaseRolling from "@/components/BaseRolling.vue";
import RollTab from "@/components/RollTab.vue";
import SavedRollings from "@/components/SavedRollings.vue";
import { defineComponent } from "@vue/runtime-core";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "HomePage",
  components: { BaseLayout, RollTab, SavedRollings, BaseRolling },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    ...mapMutations({
      storeIncrement: "increment",
      storeDecrement: "decrement",
    }),
  },
  computed: {
    storeCounter() {
      return this.$store.state.counter;
    },
  },
});
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
  user-select: none;
  color: $white;
  text-decoration: underline;
}
.container {
  max-width: $lg-bp;
  margin: 0 auto;
  padding: $base-spacing;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1,
  > p {
    text-align: center;
  }
}
.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
}
/* section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
} */

@media (min-width: $md-bp) {
  .content {
    grid-template-columns: 1fr 1.25fr 1fr;
    grid-template-rows: 4rem 1fr;
    gap: 1.5rem;
  }
  .roll-btn {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  .left {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .middle {
    grid-row: 1/3;
    grid-column: 2/3;
  }
  .right {
    grid-row: 2/3;
    grid-column: 3/4;
  }
}
</style>
