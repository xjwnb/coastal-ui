<script lang="ts" setup name="Button">
import { defineProps, computed, ref, onMounted, reactive } from "vue";
import { TypeProps } from "../../../types/common";
import { useClassName } from "../../../hooks";
// import "./styles/button.scss";

// TypeProps: "primary"  | "success" | "warning" | "danger" | "info";

const _props = withDefaults(
  defineProps<{
    type?: TypeProps;
  }>(),
  {
    type: "default",
  }
);

const cls = useClassName("button");
console.log(_props.type);

const className = computed(() => {
  return [cls.mainName, cls.m("vars"), cls.m(_props.type)];
});

const buttonRef = ref<any>();

onMounted(() => {
  console.dir(buttonRef.value);
  // buttonRef.value
  buttonRef.value?.addEventListener("mouseup", () => {
    console.log("点击弹起");
  });
});

defineExpose(_props);

const xkc = ref("小卡车");
console.log("ref", xkc);

const obj = reactive({
  name: "小卡车",
});
console.log("reactive", obj);
</script>

<template>
  <button ref="buttonRef" :class="className">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
</style>