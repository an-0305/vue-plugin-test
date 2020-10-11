import component from "@/components/Button.vue";
import component2 from "@/components/Button2.vue";

const components = {
  component,
  component2
};

function install(Vue) {
  Vue.component("MyButton", component);
  Vue.component("MyButton2", component2);
}

export { component, component2, install };

export default components;
