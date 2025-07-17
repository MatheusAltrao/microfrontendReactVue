import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote-2",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./HelloWorld": "./src/components/HelloWorld.vue",
        "./HelloWorldWrapper": "./src/components/HelloWorldWrapper.ts",
      },

      shared: ["vue"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
