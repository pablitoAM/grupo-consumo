<template>
  <div class="mt-2">
    <button
      type="button"
      class="p-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
      @click="decrement(item)"
    >
      <span class="sr-only"
        >Reducir {{ item.name }} en {{ item.step }} {{ item.unit }}</span
      >
      <Icon icon="minus-circle-outline" size="lg" />
    </button>
    <span class="mx-2">{{ amount }} {{ item.unit }}</span>
    <button
      type="button"
      class="p-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
      @click="increment(item)"
    >
      <span class="sr-only"
        >Aument {{ item.name }} en {{ item.step }} {{ item.unit }}</span
      >
      <Icon icon="plus-circle-outline" size="lg" />
    </button>
  </div>
</template>

<script>
import { useCart } from "../../store/useCart";
import { computed } from "vue";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { increment, decrement } = useCart();

    const hasDecimal = (num) => num % 1 != 0;

    const amount = computed(() =>
      hasDecimal(props.item.step)
        ? props.item.amount.toFixed(2)
        : props.item.amount
    );

    return {
      amount,
      increment,
      decrement,
    };
  },
};
</script>

<style></style>
