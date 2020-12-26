<template>
  <Navbar />
  <Announcements />
  <router-view />
  <Cart />
</template>

<script>
import Navbar from "./components/ui/Navbar.vue";
import Announcements from "./components/ui/Announcements.vue";
import Cart from "./components/cart/Cart.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Announcements,
    Cart,
  },
};
</script>
