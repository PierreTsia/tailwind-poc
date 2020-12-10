<template>
  <div
    class="relative w-full h-full p-4 dark:bg-gray-800 bg-gray-50 shadow-xl flex items-center justify-between rounded-2xl"
  >
    <slot />
    <drop-down
      :is-shown="isShown"
      @onClickOutside="toggleDropDown"
      class="w-full h-full drop"
    >
      <template v-slot:anchor>
        <button
          class="group btn btn-round w-8 h-8 text-white p-0 justify-center items-center text-sm cursor-pointer absolute top-0 right-2 focus:ring-0"
          @click="toggleDropDown"
        >
          <icon-cog
            class="fill-current text-indigo-500 relative left-1 group-hover:text-indigo-400"
          />
        </button>
      </template>
      <template v-slot:content>
        <div class="py-2">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-indigo-600"
          >
            item
          </a>
        </div>
      </template>
    </drop-down>
  </div>
</template>
<script lang="ts">
import DropDown from "@/components/DropDown.vue";
import { IconCog } from "@/components/icons/index";
import { useDropDown } from "@/composables/dropDown";

export default {
  name: "ChartCard",
  components: { DropDown, IconCog },
  setup() {
    const { toggleDropDown, isShown } = useDropDown();
    return { toggleDropDown, isShown };
  }
};
</script>
