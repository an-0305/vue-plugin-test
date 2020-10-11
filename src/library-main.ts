import component from "@/components/Button.vue";
import _Vue from 'vue';

function install(Vue: typeof _Vue) {
  Vue.component("MyButton", component);
}

export { component, install };

export default component;
