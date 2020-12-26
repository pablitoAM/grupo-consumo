import { reactive, computed } from "vue";
import { fetchProduct } from "../services/apiService";

const state = reactive({
  loading: false,
  products: [],
});

const useCatalog = () => {
  async function search(params) {
    state.loading = true;
    state.products = await fetchProduct(params);
    state.loading = false;
  }

  return {
    loading: computed(() => state.loading),
    products: computed(() => state.products),
    search,
  };
};

export default useCatalog;
