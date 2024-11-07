import { createSSRApp } from "vue";
import App from "./App.vue";

import secrchDetail from "./pages/search/scarchDetail/searchDetail.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.component("secrchDetail", secrchDetail);

  return {
    app,
  };
}
