import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import secrchDetail from "./pages/search/scarchDetail/searchDetail.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.component("secrchDetail", secrchDetail);
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia,
  };
}
