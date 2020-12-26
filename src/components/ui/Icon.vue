<template>
  <span class="inline-flex items-center justify-center" :class="clazz">
    <i class="mdi" :class="iconClass" />
  </span>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      validator: (prop) => !prop || ["sm", "md", "lg", "xl"].includes(prop),
      default: "sm",
    },
  },
  setup(props) {
    const clazz = computed(() => {
      switch (props.size) {
        case "md":
          return "w-4 h-4";
        case "lg":
          return "w-6 h-6";
        case "xl":
          return "w-8 h-8";
      }
      return "w-2 h-2";
    });

    const mdiIcon = `mdi-${props.icon}`;
    const iconClass = computed(() => {
      switch (props.size) {
        case "md":
          return `mdi-18px ${mdiIcon}`;
        case "lg":
          return `mdi-24px ${mdiIcon}`;
        case "xl":
          return `mdi-36px ${mdiIcon}`;
      }
      return `${mdiIcon}`;
    });

    return { iconClass, clazz };
  },
};
</script>

<style></style>
