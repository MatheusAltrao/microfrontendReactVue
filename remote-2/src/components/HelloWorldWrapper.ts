import { createApp } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default (container: HTMLElement | null) => {
  if (container) {
    const app = createApp(HelloWorld);
    app.mount(container);
  }
};
