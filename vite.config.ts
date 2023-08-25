import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import test from "@vitejs/plugin-test";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.tsx",
  },
});
