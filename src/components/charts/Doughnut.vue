<template>
  <canvas ref="doughnut" />
</template>
<script lang="ts">
import { ref, onMounted, computed, watch, ComputedRef } from "vue";
import { useDarkmode } from "@/composables/darkMode";
import Chart from "chart.js";
import { useStore } from "vuex";

type DoughnutProps = {
  labels: string[];
  colors: string[];
  data: number[];
  title: string;
};
type position = "bottom" | "left" | "right" | "top" | "chartArea" | undefined;
type DoughnutDataSet = {
  data: number[];
  backgroundColor: string[];
  borderColor?: string;
  borderWidth?: number;
};
type DoughnutChartData = { datasets: DoughnutDataSet[]; labels: string[] };
export default {
  name: "Doughnut",
  props: {
    labels: { default: [] },
    colors: { default: [] },
    data: { default: [] },
    title: { default: "Default Chart Title" }
  },
  setup(props: DoughnutProps) {
    const doughnut = ref(null);
    const store = useStore();
    const { isDark } = useDarkmode(store);
    const fontColor = computed(() => (isDark.value ? "#fff" : "#312E81"));

    const chartData: ComputedRef<DoughnutChartData> = computed(() => ({
      datasets: [
        { data: props.data, backgroundColor: props.colors, borderWidth: 1 }
      ],
      labels: props.labels
    }));

    const chartOptions = computed(() => ({
      title: {
        display: true,
        text: props.title,
        position: "left" as position,
        fontColor: fontColor.value,
        fontSize: 14,
        padding: 0
      },
      cutoutPercentage: 80,
      legend: {
        position: "right" as position,
        labels: { fontColor: fontColor.value, boxWidth: 10 },
        fullWidth: false
      }
    }));

    const createChart = () => {
      const options = {
        type: "doughnut",
        data: chartData.value,
        options: chartOptions.value
      };
      new Chart(doughnut.value! as HTMLCanvasElement, options);
    };

    watch(
      () => isDark.value,
      () => createChart()
    );

    onMounted(() => {
      createChart();
    });

    return { doughnut, createChart };
  }
};
</script>
