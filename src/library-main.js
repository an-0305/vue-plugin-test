import MyButton from "@/components/Button.vue";
import MyButton2 from "@/components/Button2.vue";

const MyButtonPlugin = {
  install: function(Vue) {
    Vue.component("MyButton", MyButton);
    Vue.component("MyButton2", MyButton2);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(MyButtonPlugin);
}

export default MyButtonPlugin;
export { MyButton, MyButton2 };
