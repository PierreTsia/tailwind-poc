<template>
  <img class="rounded-full object-cover mx-1" :src="url" alt="avatar" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Avatar",
  props: {
    url: {
      default:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    }
  }
});
</script>
<style></style>
