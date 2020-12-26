<template>
  <div
    :class="isOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
    class="fixed right-0 top-0 max-w-md w-full h-full px-4 lg:px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium text-gray-700">Tu Cesta</h3>
      <button
        type="button"
        class="-mr-1 flex p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
        @click="toggle"
      >
        <span class="sr-only">Cerrar</span>
        <Icon icon="close" size="md" />
      </button>
    </div>
    <hr class="my-3" />
    <div>
      <transition-group name="fade">
        <Item v-for="(item, index) in items" :key="index" :item="item" />
      </transition-group>
      <div class="my-8">
        <a
          class="flex items-center justify-center cursor-pointer mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-blue-500"
        >
          <span>Confirmar</span>
          <Icon icon="playlist-check" size="md" class="ml-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { useCart } from "../../store/useCart.js";
export default {
  components: { Item },
  setup() {
    const { items, total, isOpen, toggle } = useCart();
    return {
      total,
      items,
      isOpen,
      toggle,
    };
  },
};
</script>

<style></style>
