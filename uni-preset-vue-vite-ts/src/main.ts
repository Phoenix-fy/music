import { createSSRApp } from "vue"
import App from "./App.vue"
import { createPinia } from 'pinia'
import secrchDetail from "./pages/search/scarchDetail/searchDetail.vue";
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.component("secrchDetail", secrchDetail);
  app.use(pinia)
  return {
    app,
  };
}
