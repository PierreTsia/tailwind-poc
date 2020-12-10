<template>
  <div class="min-h-screen h-full bg-gray-100 dark:bg-gray-900">
    <section class="w-full md:w-4/5 mx-auto grid grid-cols-12 gap-4 p-4">
      <chart-card
        class="col-span-12 md:col-span-6 lg:col-span-4"
        v-for="(dataSet, i) in dataSets"
        :key="i"
      >
        <doughnut
          :data="dataSet.data"
          :labels="dataSet.labels"
          :colors="dataSet.colors"
          title="Doughnut / Pie"
        />
      </chart-card>
    </section>
  </div>
</template>
<script lang="ts">
import { dataSets } from "@/mocks";
import { ChartCard, Doughnut } from "@/components/charts/index";
export default {
  name: "dashboard",
  components: {
    ChartCard,
    Doughnut
  },
  setup() {
    return { dataSets };
  }
};
</script>
