<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" :src="entry.url" alt="" />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ entry.name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ entry.email }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ entry.title }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 'bg-green-100 text-green-800'"
        :class="
          entry.active
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        "
      >
        {{ entry.active ? "Active" : "Off" }}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ entry.role }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
  </tr>
</template>
<script lang="ts">
export default {
  name: "data-table-row",
  props: { entry: {} }
};
</script>
