<template>
  <div class="relative" ref="dropDownRef">
    <slot name="anchor"></slot>
    <div
      :class="[
        isShown ? 'absolute' : 'hidden',
        `${position}-0`,
        `top-${offsetY}`,
        'mt-2',
        'w-80',
        'bg-white',
        'dark:bg-indigo-800',
        'rounded-md',
        'shadow-lg',
        'overflow-hidden',
        'z-20'
      ]"
      style="width:20rem;"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  name: "DropDown",
  components: {},
  props: {
    isShown: { default: false },
    position: {
      default: "right"
    },
    offsetY: {
      default: 8
    }
  },
  setup(props: { isShown: boolean; offsetY: string | number }, { emit }) {
    const dropDownRef = ref(null);

    onClickOutside(dropDownRef, () => {
      if (props.isShown) emit("on-click-outside");
    });
    return { dropDownRef };
  }
});
</script>

<style scoped></style>
