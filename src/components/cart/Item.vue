<template>
  <div class="flex justify-between mt-6">
    <img
      class="h-12 w-12 lg:w-16 lg:h-16 object-cover rounded"
      src="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201811/26/00118107400048____2__75x75.jpg"
      alt=""
    />
    <div class="mx-4 flex flex-col">
      <h3 class="font-semibold text-gray-700">{{ price }} €</h3>
      <div class="flex items-center mt-2 text-sm">
        Pimiento rojo asdsa sa das dsa dsa dsa dasdddd
      </div>
      <Amounter :item="item" class="mt-2" />
    </div>
    <button
      class="md:self-center text-gray-600 cursor-pointer hover:bg-gray-100 flex items-center p-2 max-h-12 rounded-full"
      @click="removeFromCart(item)"
    >
      <span class="sr-only">Eliminar {{ item.name }} del carro</span>
      <Icon icon="basket-remove-outline" size="lg" />
    </button>
  </div>
</template>

<script>
import { useCart } from "../../store/useCart";
import Amounter from "./Amounter.vue";
import { computed } from "vue";
export default {
  components: { Amounter },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { removeFromCart } = useCart();

    const hasDecimal = (num) => num % 1 != 0;

    const price = computed(() => {
      let res = props.item.amount * props.item.price;
      return hasDecimal(res) ? res.toFixed(2) : res;
    });

    return {
      price,
      removeFromCart,
    };
  },
};
</script>

<style></style>
