// declare module '*.vue' {
//   import { ComponentOptions } from 'vue'
//   const componentOptions: ComponentOptions
//   export default componentOptions
// }

/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
