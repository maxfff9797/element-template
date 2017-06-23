import Vue from 'vue'
import ElementUI from 'element-ui'
import  routes from './routes'
import VueRouter from 'vue-router'
import  store from './store'
const router = new VueRouter({
    routes
});
Vue.use(VueRouter)
Vue.use(ElementUI)
new Vue({
    router,
    store,
}).$mount('#app');
