<template>
  <div>
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden lg:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <menu-item
                  v-for="item in mainMenuItems"
                  :key="item.path"
                  :is-mobile="isMobileMenuOpen"
                  :path="item.path"
                >
                  {{ item.label }}
                </menu-item>
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="ml-4 flex items-center lg:ml-6 ">
              <span class="inline-flex items-center mr-4">
                <icon-light-bulb-on
                  v-if="isDark"
                  class="w-6 h-6 fill-current text-indigo-500"
                />
                <icon-light-bulb-off
                  v-else
                  class="w-6 h-6 fill-current text-indigo-500"
                />
                <base-switch
                  :value="isDark"
                  @onChange="toggleDarkMode"
                  class="ml-2"
                />
              </span>
              <drop-down :is-shown="isShown" @onClickOutside="toggleDropDown">
                <template v-slot:anchor>
                  <button
                    class="btn btn-round w-8 h-8 text-white justify-center items-center text-sm cursor-pointer"
                    @click="toggleDropDown"
                  >
                    <img
                      class="h-8 w-8 rounded-full -my-2"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </template>
                <template v-slot:content>
                  <div class="py-2">
                    <a
                      href="#"
                      v-for="item in userMenuItems"
                      :key="item"
                      class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-indigo-600"
                      >{{ item }}</a
                    >
                  </div>
                </template>
              </drop-down>
            </div>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <burger
              @onMenuClick="toggleMobileMenu"
              :is-open="isMobileMenuOpen"
            />
          </div>
        </div>
      </div>

      <div :class="[isMobileMenuOpen ? 'block' : 'hidden', 'lg:hidden']">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <menu-item
            v-for="item in mainMenuItems"
            :key="item.path"
            :path="item.path"
            :is-mobile="isMobileMenuOpen"
          >
            {{ item.label }}
          </menu-item>
        </div>
        <span class="inline-flex items-center ml-4 mb-4">
          <base-switch
            :value="isDark"
            @onChange="toggleDarkMode"
            class="ml-2"
          />
          <icon-light-bulb-on
            v-if="isDark"
            class="w-6 h-6 fill-current text-green-500"
          />
          <icon-light-bulb-off
            v-else
            class="w-6 h-6 fill-current text-green-500"
          />
        </span>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import DropDown from "@/components/DropDown.vue";
import MenuItem from "@/components/navbar/MenuItem.vue";
import Burger from "@/components/navbar/Burger.vue";
import BaseSwitch from "@/components/BaseSwitch.vue";
import { IconLightBulbOn, IconLightBulbOff } from "@/components/icons";

import { useDropDown } from "@/composables/dropDown";
import { useDarkmode } from "@/composables/darkMode";
import { useNavigation } from "@/composables/navigation";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "navbar",
  components: {
    DropDown,
    MenuItem,
    Burger,
    BaseSwitch,
    IconLightBulbOn,
    IconLightBulbOff
  },
  setup() {
    const store = useStore();

    const { isShown, toggleDropDown } = useDropDown();
    const { toggleDarkMode, isDark } = useDarkmode(store);
    const isMobileMenuOpen = ref(false);
    const toggleMobileMenu = () =>
      (isMobileMenuOpen.value = !isMobileMenuOpen.value);
    const { mainMenuItems } = useNavigation();
    const userMenuItems = ["Your profile", "Settings", "Logout"];

    return {
      isShown,
      toggleDropDown,
      userMenuItems,
      mainMenuItems,
      isMobileMenuOpen,
      toggleMobileMenu,
      toggleDarkMode,
      isDark
    };
  }
};
</script>
