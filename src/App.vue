<template>
  <Navbar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/ui/Navbar.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>
