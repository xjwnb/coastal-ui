import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      packpages: path.resolve(__dirname, "packages"),
      hooks: path.resolve(__dirname, "hooks"),
      types: path.resolve(__dirname, "types"),
      // components: path.resolve(__dirname, "components"),
      // styles: path.resolve(__dirname, "src/styles"),
      // plugins: path.resolve(__dirname, "src/plugins"),
      // views: path.resolve(__dirname, "src/views"),
      // layouts: path.resolve(__dirname, "src/layouts"),
      // utils: path.resolve(__dirname, "src/utils"),
      // apis: path.resolve(__dirname, "src/apis"),
      // dirs: path.resolve(__dirname, "src/directives"),
    },

    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
});
