// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App.vue'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import utils from './utils'
import router from './router'
import Common from './plugins/common.js'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastClick.attach(document.body);
    }, false);
}
Vue.config.productionTip = false
Vue.use(Common);
Vue.use(VueAwesomeSwiper)

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})

