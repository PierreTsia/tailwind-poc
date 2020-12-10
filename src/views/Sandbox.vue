<template>
  <div class="home min-h-screen h-full bg-gray-100 dark:bg-gray-800">
    <div class="w-full h-full p-3">
      <section
        class="w-2/3 mx-auto relative flex justify-between items-center mt-8 h-24"
      >
        <drop-down
          position="left"
          :is-shown="isShown"
          @onClickOutside="toggleDropDown"
        >
          <template v-slot:anchor>
            <button
              class="btn btn-round btn-green w-12 h-12 text-white justify-center items-center text-xl"
              @click="toggleDropDown"
            >
              P
            </button>
          </template>
          <template v-slot:content>
            <div class="pt-2">
              <notification-item
                v-for="(notification, index) in notifications"
                :entry="notification"
                :key="index"
                class="border-b last:border-white dark:border-gray-800 last:border-gray-900"
              />
              <a
                href="#"
                class="block bg-indigo-700 hover:bg-indigo-500 text-white text-center font-bold py-2"
              >See all notifications</a
              >
            </div>
          </template>
        </drop-down>
      </section>
      <section class="w-4/5 mx-auto h-auto pa-6 mb-8">
        <div class="w-full px-4 mb-1 flex justify-center">
          <button
            v-for="color in colors"
            :key="color"
            :class="[
              'btn',
              `btn-${color}`,
              `hover:bg-${color}-700`,
              'mr-2',
              'mb-2',
              'text-xs',
              'w-24',
              'text-white',
              'rounded',
              'shadow-md',
              'disabled:opacity-50',
              'disabled:cursor-not-allowed'
            ]"
          >
            {{ color }}
          </button>
        </div>
        <div class="w-full px-4 flex justify-center">
          <button
            v-for="color in colors"
            disabled
            :key="color"
            :class="[
              'btn',
              `btn-${color}`,
              'mr-2',
              'mb-2',
              'text-xs',
              'w-24',
              'text-white',
              'rounded',
              'shadow-md',
              'disabled:opacity-50',
              'disabled:cursor-not-allowed'
            ]"
          >
            {{ color }}
          </button>
        </div>
      </section>

      <grid-layout :cols-md="2" :cols-lg="3" :cols-xl="4">
        <user-card
          v-for="user in users"
          :key="user.email"
          :user="user"
          class="auto-cols-auto"
        />
      </grid-layout>

      <section class="w-full mx-auto mt-8 ">
        <login-card />
      </section>

      <section class="w-full xl:w-4/5 mx-auto mt-8 ">
        <data-table :data="dataTableEntries" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/UserCard.vue";
import DropDown from "@/components/DropDown.vue";
import { useDropDown } from "@/composables/dropDown";
import { users, notifications, dataTableEntries } from "@/mocks";
import NotificationItem from "@/components/NotificationItem.vue";
import GridLayout from "@/components/layouts/GridLayout.vue";
import LoginCard from "@/components/LoginCard.vue";
import DataTable from "@/components/DataTable.vue";

export default defineComponent({
  name: "Sandbox",
  components: {
    DataTable,
    LoginCard,
    NotificationItem,
    UserCard,
    DropDown,
    GridLayout
  },
  setup() {
    const colors = [
      "blue",
      "red",
      "pink",
      "indigo",
      "green",
      "yellow",
      "regal-blue"
    ];

    const { isShown, toggleDropDown } = useDropDown();

    return {
      colors,
      users,
      notifications,
      dataTableEntries,
      isShown,
      toggleDropDown
    };
  }
});
</script>
