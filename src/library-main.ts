import component from "@/components/Button.vue";
import component2 from "@/components/Button2.vue";
import _Vue from 'vue';

const MyButton = {
  install: (Vue: typeof _Vue) => {
    Vue.component("MyButton", component);  
  }
}

const MyButton2 = {
  install: (Vue: typeof _Vue) => {
    Vue.component("MyButton2", component2);  
  }
}


export { MyButton, MyButton2 };

