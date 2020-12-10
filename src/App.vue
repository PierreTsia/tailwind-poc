<template>
  <navbar />
  <router-view />
</template>
<script lang="ts">
import Navbar from "@/components/navbar/Navbar.vue";
import { useDarkmode } from "@/composables/darkMode";
import { useStore } from "vuex";

export default {
  components: {
    Navbar
  },
  setup() {
    const store = useStore();
    const { initDarkMode } = useDarkmode(store);
    initDarkMode();
  }
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
