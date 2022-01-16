import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

library.add(faBars, faSave, faTrash);

const app = createApp(App);
app.use(router).use(store).mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
