import MyButton from "@/components/Button.vue";
import MyButton2 from "@/components/Button2.vue";

const components = {
  MyButton,
  MyButton2
};

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("MyButton", MyButton);
  Vue.component("MyButton2", MyButton2);
}

const plugin = {
  install
};

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default components;
