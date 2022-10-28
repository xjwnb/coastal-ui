<script setup lang="ts">
import Button from "../components/Button/src/button.vue";
</script>

<template>
  <div>
    <Button>按钮</Button>
    <Button type="primary">按钮</Button>
    <Button type="success">按钮</Button>
    <Button type="info">按钮</Button>
    <Button type="warning">按钮</Button>
    <Button type="error">按钮</Button>
    <Button type="error" disabled>按钮</Button>
    <Button type="primary" disabled>按钮</Button>
    <Button type="success" disabled>按钮</Button>
    <Button type="info" disabled>按钮</Button>

    <Button size="large">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>

    <Button type="primary" plain>plan</Button>
    <Button type="success" plain>plan</Button>
    <Button type="info" plain>plan</Button>
    <Button type="warning" plain>plan</Button>
    <Button type="error" plain>plan</Button>

    <Button type="success" disabled plain>plan</Button>

    <Button type="success" plain round>plan</Button>

    <Button type="primary">点击</Button>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
