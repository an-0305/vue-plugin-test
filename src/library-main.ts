import component from "@/components/Button.vue";
import component2 from "@/components/Button2.vue";
import _Vue from 'vue';

function install(Vue: typeof _Vue) {
  Vue.component("MyButton", component);
  Vue.component("MyButton2", component2);
}

export { component, component2, install };

export default component;
