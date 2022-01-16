import { createStore } from "vuex";

export interface RollItem {
  name: string;
  luckRate: number;
}

export interface State {
  counter: number;
  rollItems: RollItem[];
  activeRollItemIndex: number | null;
}

const store = createStore<State>({
  state() {
    return {
      counter: 0,
      rollItems: [] as RollItem[],
      activeRollItemIndex: null,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    setRollItems(state, payload) {
      state.rollItems = [...payload.rollItems];
    },
    addRollItem(state, payload) {
      state.rollItems = [...state.rollItems, payload.rollItem];
    },
    updateRollItem(state, payload) {
      const newRollItems = [...state.rollItems];
      newRollItems[payload.index] = {
        ...newRollItems[payload.index],
        ...payload.rollItem,
      };
      state.rollItems = newRollItems;
    },
    deleteRollItem(state, payload) {
      const newRollItems = [...state.rollItems];
      newRollItems.splice(payload.index, 1);
      state.rollItems = newRollItems;
    },
    setActiveRollItemIndex(state, payload) {
      state.activeRollItemIndex = payload.index;
    },
    // updateActiveRollItem(state, payload) {

    // },
    // deleteActiveRollItem(state) {

    // }
  },
});

export default store;
