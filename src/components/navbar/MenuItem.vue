<template>
  <router-link
    :to="path"
    v-if="isMobile"
    href="#"
    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
    ><slot
  /></router-link>
  <router-link
    :to="path"
    v-else
    href="#"
    class="text-gray-300 hover:bg-gray-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    ><slot
  /></router-link>
</template>
<script lang="ts">
export default {
  name: "menu-item",
  props: { isMobile: { default: false }, path: { default: "/" } }
};
</script>
