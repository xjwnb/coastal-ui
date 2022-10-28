import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [Vue()],
  test: {
    // ...
    environment: "jsdom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      packpages: path.resolve(__dirname, "packages"),
      hooks: path.resolve(__dirname, "hooks"),
      types: path.resolve(__dirname, "types"),
      // components: path.resolve(__dirname, "src/components"),
      // styles: path.resolve(__dirname, "src/styles"),
      // plugins: path.resolve(__dirname, "src/plugins"),
      // views: path.resolve(__dirname, "src/views"),
      // layouts: path.resolve(__dirname, "src/layouts"),
      // utils: path.resolve(__dirname, "src/utils"),
      // apis: path.resolve(__dirname, "src/apis"),
      // dirs: path.resolve(__dirname, "src/directives"),
    },
  },
});
