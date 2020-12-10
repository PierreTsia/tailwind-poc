<template>
  <div
    class="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
  >
    <img
      class="w-full h-56 object-cover object-center"
      :src="user.imageUrl"
      alt="avatar"
    />

    <div class="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-600">
      <icon-headset class="text-white w-6 h-6" />
      <h1 class="mx-3 text-white font-semibold text-lg">{{ user.status }}</h1>
    </div>

    <div
      class="bg-white dark:bg-gray-900 py-4 px-6 flex flex-col justify-end flex-grow"
    >
      <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
        {{ user.name }}
      </h1>
      <p class="py-2 text-gray-700">
        {{ user.description }}
      </p>
      <div class="flex-grow flex flex-col justify-end">
        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-400">
          <icon-briefcase class="w-6 h-6" />
          <h2 class="px-2 text-sm">{{ user.job }}</h2>
        </div>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-400">
          <icon-geo-point class="w-6 h-6" />
          <h2 class="px-2 text-sm">{{ user.location }}</h2>
        </div>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-400">
          <icon-mail class="w-6 h-6" />
          <h2 class="px-2 text-sm">{{ user.email }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  IconHeadset,
  IconBriefcase,
  IconGeoPoint,
  IconMail
} from "@/components/icons/index";
export default {
  name: "user-card",
  components: { IconGeoPoint, IconHeadset, IconBriefcase, IconMail },
  props: {
    user: {}
  }
};
</script>
