import { computed } from "vue";
import { Store } from "vuex";
import * as actions from "@/store/actions-types";

export enum Mode {
  Dark = "dark",
  Light = "light"
}
// eslint-disable-next-line
export const useDarkmode = (store: Store<any>) => {
  const isDark = computed(() => store.getters.isDark);

  const removeDarkClass = () =>
    document.querySelector("html")?.classList.remove(Mode.Dark);

  const addDarkClass = () =>
    document.querySelector("html")?.classList.add(Mode.Dark);

  const setClass = (mode: Mode) =>
    mode === Mode.Dark ? addDarkClass() : removeDarkClass();

  const initDarkMode = async () => {
    const mode =
      localStorage.getItem("theme") === Mode.Dark ? Mode.Dark : Mode.Light;
    setClass(mode);
    await store.dispatch(actions.SET_DARK_MODE, mode);
  };

  const toggleDarkMode = async () => {
    const newMode = store.getters.isDark ? Mode.Light : Mode.Dark;
    setClass(newMode);
    await store.dispatch(actions.SET_DARK_MODE, newMode);
  };

  return { toggleDarkMode, initDarkMode, isDark };
};
