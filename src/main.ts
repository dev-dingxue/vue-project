import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/BasCss.scss"
import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from '@/App.vue'
import router from '@/router/index'

import globalComponentA from "./component/global-component-A.vue"
import globalComponentB from "./component/global-component-B.vue"


const rootProps =  {
    name: "LogicalReuse",
    version: "1.0.0",
}

const app = createApp(App,rootProps)

app.use(createPinia())
app.use(router)

app.provide("bootstrap", "5.0")

app.component("global-component-a", globalComponentA)
    .component("global-component-b", globalComponentB)


app.directive("coma",(el, binding)=>{
    console.log(el.tagName.value)
    console.log(binding.value)
})

app.config.globalProperties.$inject = ["testGlobal"]
app.config.globalProperties.$inject = {
    key:app.version
}

app.config.idPrefix = "dingxue"

app.config.performance = true;

app.config.errorHandler = (err) => {
    console.error(err)
}
app.config.warnHandler = (msg)=>{
    console.warn(msg)
}

app.mount('#app')


