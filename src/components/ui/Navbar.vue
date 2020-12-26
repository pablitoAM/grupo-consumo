<template>
  <header class="pr-6 bg-white flex flex-wrap items-center lg:py-0 py-2 shadow">
    <div class="flex-1 flex justify-between items-center">
      <router-link :to="{ name: 'Home' }">
        <Icon icon="flash" size="lg" class="text-red-600" /><span
          class="font-semibold"
          >Grupo de Consumo</span
        >
      </router-link>
    </div>

    <label for="menu-toggle" class="pointer-cursor lg:hidden block"
      ><Icon
        icon="menu"
        size="md"
        class="fill-current text-gray-900"
        @click="active = !active"
    /></label>
    <a
      class="lg:p-2 py-0 border-b-2 border-transparent hover:border-green-400 flex relative cursor-pointer lg:self-end"
      @click="cartToggle"
    >
      <span class="md:hidden self-center">Mi Cesta</span>
      <Icon
        icon="basket-outline"
        size="lg"
        class="rounded-full w-10 h-10 border-2 border-transparent hover:text-green-400"
      />
      <span
        v-if="items.length > 0"
        class="absolute right-1 top-2 rounded-full bg-red-600 w-5 h-5 pt-0 m-0 text-white text-sm leading-tight text-center"
        >{{ items.length }}
      </span>
    </a>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        class="lg:flex lg:items-center lg:w-auto w-full"
        :class="active ? '' : 'hidden'"
      >
        <nav>
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-2 lg:pt-0 pl-4 lg:pl-0"
          >
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="lg:p-4 py-2 px-0 block border-b-2 border-transparent hover:border-green-400"
                href="#"
                >Cestas
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="lg:p-4 py-2 px-0 block border-b-2 border-transparent hover:border-green-400"
                href="#"
                >Cestas
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="lg:p-4 py-2 px-0 block border-b-2 border-transparent hover:border-green-400"
                href="#"
                >Cestas
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="lg:p-4 py-2 px-0 block border-b-2 border-transparent hover:border-green-400"
                href="#"
                >Tareas
              </router-link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref } from "vue";
import { useCart } from "../../store/useCart";
export default {
  emits: ["cart-toggle"],
  setup() {
    const active = ref(false);
    const { toggle: cartToggle, items } = useCart();

    return { active, cartToggle, items };
  },
};
</script>
