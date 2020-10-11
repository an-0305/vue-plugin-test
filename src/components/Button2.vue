<template>
  <div>
    <span class="msg">ボタンです</span>
    <v-btn>{{ label }}</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: null
    }
  }
});
</script>

<style lang="scss" scoped>
.msg {
  font-weight: bold;
}
</style>
