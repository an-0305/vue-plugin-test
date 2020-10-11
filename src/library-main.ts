import component from "@/components/Button.vue";
import _Vue from 'vue';

function install(Vue: typeof _Vue) {
  Vue.component("MyButton", component);
}

export { component, install };

// eslint-disable-next-line no-undef
export default MyButton;
