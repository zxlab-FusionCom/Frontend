import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 创建 Vue 应用实例
const app = createApp(App);
app.use(router);
app.mount("#app");
