<template>
  <a
    href="#"
    class="group flex items-center px-4 py-3  hover:bg-gray-100  -mx-2"
  >
    <avatar class="h-8 w-8" :url="entry.url" />
    <div
      class="text-gray-600 dark:text-gray-50  dark:group-hover:text-gray-600 px-2 w-full flex  flex-col "
    >
      <span class="font-bold text-base" href="#">{{ entry.name }}</span>
      <span class="font-light text-gray-700 dark:text-gray-500 block text-sm">{{
        entry.description
      }}</span>
      <span
        class="font-light text-gray-500 dark:text-gray-200 dark:group-hover:text-gray-600 text-xs"
        >{{ entry.date }} min ago</span
      >
    </div>
  </a>
</template>
<script lang="ts">
import Avatar from "@/components/Avatar.vue";

export default {
  name: "notification-item",
  components: { Avatar },
  props: { entry: {} }
};
</script>
