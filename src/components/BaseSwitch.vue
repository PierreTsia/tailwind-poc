<template>
  <div
    class="relative inline-block w-10 mr-2 align-middle select-none"
    @change.stop="$emit('on-change')"
  >
    <input
      :checked="value"
      type="checkbox"
      name="toggle"
      id="toggle"
      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white shadow-inner border-2  border-white appearance-none cursor-pointer focus:outline-none"
    />

    <label
      for="toggle"
      class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
    ></label>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseSwitch",
  props: {
    value: { default: false }
  }
};
</script>
<style>
.toggle-checkbox {
  transition: transform ease-in-out 200ms;
}
.toggle-checkbox:checked {
  transform: translateX(80%);
  transition: ease-in-out 200ms;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #6366f1;
  transition: ease-in-out 200ms;
}
</style>
