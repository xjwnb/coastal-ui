<script lang="ts" setup name="Button">
import { defineProps, computed, ref, onMounted, reactive } from "vue";
import { TypeProps, SizeProps } from "./symbol";
import { useClassName } from "hooks";
// import "./styles/button.scss";

// TypeProps: "primary"  | "success" | "warning" | "danger" | "info";

const _props = withDefaults(
  defineProps<{
    type?: TypeProps;
    disabled?: boolean;
    size?: SizeProps;
    plain?: boolean;
    round?: boolean;
  }>(),
  {
    type: "default",
    disabled: false,
    size: "",
    plain: false,
    round: false,
  }
);

const emit = defineEmits(["click"]);

const cls = useClassName("button");

const className = computed(() => {
  return [
    cls.mainName,
    cls.m("vars"),
    cls.m(_props.type),
    cls.is("disabled", _props.disabled),
    cls.m(_props.size),
    cls.is(`${_props.type}_plain`, _props.plain),
    cls.is(`round`, _props.round),
  ];
});

const classNameArr = reactive([...className.value]);

const btnRef = ref<InstanceType<typeof HTMLButtonElement> | null>();

onMounted(() => {
  /* btnRef.value?.addEventListener("mouseup", () => {
    console.log("点击弹起");
    console.log(classNameArr);
    classNameArr.indexOf("ct-button-active") === -1 &&
      classNameArr.push("ct-button-active");
    setTimeout(() => {
      // classNameArr = classNameArr.filter(it => it !== 'ct-button-active');
      let i = classNameArr.indexOf("ct-button-active");
      i !== -1 && classNameArr.splice(i, 1);
    }, 0);
  }); */
});

const onClick = function (e: MouseEvent) {
  emit("click", e);
};

defineExpose({
  ..._props,
});
</script>

<template>
  <button
    ref="btnRef"
    :disabled="_props.disabled"
    :class="classNameArr"
    @click="onClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
</style>
