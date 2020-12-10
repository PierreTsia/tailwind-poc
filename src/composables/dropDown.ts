import { reactive, toRefs } from "vue";
export const useDropDown = () => {
  const state = reactive({
    isShown: false
  });

  const toggleDropDown = () => (state.isShown = !state.isShown);

  return { ...toRefs(state), toggleDropDown };
};
