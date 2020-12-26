import { reactive, computed } from "vue";

const maxUnits = 100;

const state = reactive({
  items: [
    {
      name: "Cebollas",
      amount: 2,
      price: 3,
      step: 1,
      unit: "kg",
    },
    {
      name: "Zanahorias",
      amount: 0.5,
      price: 3,
      step: 0.1,
      unit: "g",
    },
    {
      name: "Pan",
      amount: 1,
      price: 5,
      step: 1,
      unit: "barra",
    },
  ],
  open: false,
});

export const useCart = () => {
  const toggle = () => (state.open = !state.open);

  const total = () =>
    state.items.reduce((acc, item) => acc + item.amount * item.price, 0);

  const removeFromCart = (item) => {
    let index = state.items.indexOf(item);
    state.items.splice(index, 1);
  };

  const addToCart = (item) => {
    console.log("Add item", item);
  };

  const increment = (item) => {
    let index = state.items.indexOf(item);
    if (index !== -1 && item.amount < maxUnits) {
      item.amount += item.step;
    }
  };

  const decrement = (item) => {
    let index = state.items.indexOf(item);
    if (index !== -1 && item.amount > 0) {
      item.amount -= item.step;
    }
    if (item.amount <= 0) state.items.splice(index, 1);
  };

  return {
    items: computed(() => state.items),
    total: computed(total),
    isOpen: computed(() => state.open),
    isEmpty: computed(() => state.items.length == 0),
    toggle,
    addToCart,
    removeFromCart,
    increment,
    decrement,
  };
};
