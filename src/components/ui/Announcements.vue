<template>
  <transition
    enter-active-class="transition ease-out duration-100 transform"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75 transform"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <section v-if="active" class="md:max-w-5xl mx-auto lg:my-2">
      <div class="bg-indigo-600 lg:rounded">
        <div class="mx-auto pt-2 pb-1 lg:pb-2 px-4">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex rounded-full p-1 bg-indigo-800">
                <Icon icon="bullhorn-outline" size="lg" class="text-white" />
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden"> We announced a new product! </span>
                <span class="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div
              class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
            ></div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                @click="active = !active"
              >
                <span class="sr-only">Cerrar</span>
                <Icon icon="close" size="md" class="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(true);
    return {
      active,
    };
  },
};
</script>

<style></style>
