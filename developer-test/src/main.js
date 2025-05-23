import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "@/assets/CSS/Variables.css";
import "@/assets/CSS/Fonts.css";
import "@/assets/CSS/Style.css";
import "@/assets/CSS/Animations.css";

createApp(App).use(store).use(router).mount("#app");
