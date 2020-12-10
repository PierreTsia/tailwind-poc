<template>
  <div class="px-2">
    <section
      :class="[
        'w-full',
        'grid gap-2',
        'grid-cols-1',
        `md:grid-cols-${colsMd}`,
        `lg:grid-cols-${colsLg}`,
        `xl:grid-cols-${colsXl}`
      ]"
    >
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "grid-layout",

  props: {
    colsMd: { default: 3 },
    colsLg: { default: 3 },
    colsXl: { default: 3 }
  }
};
</script>
