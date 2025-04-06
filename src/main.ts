// Step 1: Import necessary modules and styles
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/BasCss.scss";
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Step 2: Import application components and router
import App from '@/App.vue';
import router from '@/router/index';
import globalComponentA from "./component/global-component-A.vue";
import globalComponentB from "./component/global-component-B.vue";

// Step 3: Define root properties
const rootProps = {
  name: "LogicalReuse",
  version: "1.0.0",
};

// Step 4: Create the Vue application instance
const app = createApp(App, rootProps);

// Step 5: Use Pinia for state management and router for navigation
app.use(createPinia());
app.use(router);

// Step 6: Provide global dependencies
app.provide("bootstrap", "5.0");

// Step 7: Register global components
app.component("global-component-a", globalComponentA)
   .component("global-component-b", globalComponentB);

// Step 8: Define custom directives
app.directive("coma", (el, binding) => {
  console.log(el.tagName.value);
  console.log(binding.value);
});

// Step 9: Configure global properties and settings
app.config.globalProperties.$inject = ["testGlobal"];
app.config.globalProperties.$inject = {
  key: app.version,
};

app.config.idPrefix = "dingxue";
app.config.performance = true;

// Step 10: Define error and warning handlers
app.config.errorHandler = (err) => {
  console.error(err);
};

app.config.warnHandler = (msg) => {
  console.warn(msg);
};

// Step 11: Mount the application to the DOM
app.mount('#app');
