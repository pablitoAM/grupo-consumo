<template>
  <div class="flex flex-wrap items-center -mx-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
    >
      <Item :title="'Object ' + item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  setup() {},
};
</script>

<style></style>
