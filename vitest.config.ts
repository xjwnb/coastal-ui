import { defineConfig } from "vitest/config";
import Vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    Vue(),
  ],
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
});
