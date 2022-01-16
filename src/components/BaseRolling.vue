<template>
  <div class="wrapper">
    <base-button
      class="roll-btn"
      variant="primary"
      @click="startRolling"
      :disabled="!rollItems.length"
      >{{ !rolling ? "Roll!" : winner ? "Restart" : "Stop" }}</base-button
    >
    <div class="list-wrapper">
      <transition name="tab-fade">
        <div v-if="winner" class="win-tab">
          <div>
            <p :style="{ marginBottom: '0.2rem' }">Winner is</p>
            <h3>{{ winner.name }}</h3>
          </div>
          <base-button variant="primary" @click="startRolling">
            Ok
          </base-button>
        </div>
      </transition>
      <div>
        <div class="result-picker" v-if="rollItems.length"></div>
        <div class="shadow">
          <div class="shadow-top"></div>
          <div class="shadow-bottom"></div>
        </div>
        <div class="list" :class="{ 'list--rolling': rolling }">
          <div v-for="(item, i) in items" :key="i" class="item">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { RollItem } from "@/store";
import { defineComponent } from "@vue/runtime-core";
import { mapState } from "vuex";

export default defineComponent({
  name: "BaseRolling",
  components: { BaseButton },
  data() {
    return {
      items: [] as RollItem[],
      rolling: false,
      winner: null as RollItem | null,
      timeout: 0,
    };
  },
  computed: {
    ...mapState({ rollItems: "rollItems" }),
  },
  methods: {
    startRolling() {
      // STOP ROLLING
      if (this.rolling) {
        this.generateItems(this.rollItems);
        return;
      }

      // ROLL
      // this.items[70] is always a winner;
      this.rolling = true;
      this.timeout = setTimeout(() => {
        this.winner = this.items[70];
      }, 5300);
    },
    generateItems(rollItems: RollItem[]) {
      this.rolling = false;
      this.items = [];
      this.winner = null;
      clearTimeout(this.timeout);

      const totalLuck = rollItems.reduce((total, rollItem) => {
        return total + rollItem.luckRate;
      }, 0);

      for (let i = 0; i < 80; i++) {
        const pick = Math.random() * totalLuck;

        let pos = 0;
        for (const rollItem of rollItems) {
          pos += rollItem.luckRate;
          if (pick < pos) {
            this.items.push({ ...rollItem });
            break;
          }
        }
      }
    },
  },
  watch: {
    rollItems(newRollItems: RollItem[]) {
      this.generateItems(newRollItems);
    },
  },
  mounted() {
    this.generateItems(this.rollItems);
  },
});
</script>

<style lang="scss" scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.2s;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
}

.win-tab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 2;
  word-break: break-all;

  backdrop-filter: blur(8px);
  background: rgba($dark-grey, $alpha: 0.95);

  > div {
    text-align: center;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.list-wrapper {
  position: relative;
  height: 40rem;
  overflow: hidden;
  background: $lighter-grey;
  border-radius: 1rem;
}
.list {
  width: 100%;
  position: absolute;
  top: 10px;
  transition: none;
}
.list--rolling {
  transform: translateY(-100%);
  top: 53.2rem;
  transition: 5s cubic-bezier(0.23, 0.62, 0.69, 1);
}
.item {
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shadow-top {
  height: 45%;
  background: linear-gradient($lighter-grey, rgba($lighter-grey, $alpha: 0));
}
.shadow-bottom {
  height: 45%;
  background: linear-gradient(rgba($lighter-grey, $alpha: 0), $lighter-grey);
}
.result-picker {
  border: 3px solid $primary;
  border-radius: 1rem;
  position: absolute;
  height: 3rem;
  top: 50%;
  left: 1rem;
  right: 1rem;
  transform: translateY(-50%);
}
</style>
