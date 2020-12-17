<template>
  <h1 class="text-red-500 bg-blue-500">{{ msg }}</h1>
  <button class="p-4 bg-green-600 rounded-full" @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
