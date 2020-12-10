<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <data-table-head-cell v-for="(col, i) in columns" :key="i">
                  {{ col }}
                </data-table-head-cell>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <data-table-row v-for="(row, i) in data" :key="i" :entry="row" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import DataTableHeadCell from "@/components/DataTableHeadCell.vue";
import DataTableRow from "@/components/DataTableRow.vue";

export default {
  name: "data-table",
  components: { DataTableRow, DataTableHeadCell },
  props: {
    data: {}
  },
  setup() {
    const columns = ["Name", "Title", "Status", "Role", "Edit"];
    return { columns };
  }
};
</script>
