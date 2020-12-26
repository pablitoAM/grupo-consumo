<template>
  <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div
      class="flex items-end justify-end h-56 w-full bg-cover"
      style="
        background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
      "
    >
      <button
        class="p-3 rounded-full bg-green-400 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500"
      >
        <Icon icon="basket-plus" size="lg" />
      </button>
    </div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase">Classic watch</h3>
      <span class="text-gray-500 mt-2">$123</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
