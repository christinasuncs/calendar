import { createApp } from "vue"
import router from "@/router"

import App from "./App.vue"

import AppLink from "@/components/AppLink.vue"

// import "@/assets/main.css"

const app = createApp(App)
app.component("AppLink", AppLink)

app.use(router)

app.mount("#app")
