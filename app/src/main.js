import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// const config = {
//     apiKey: 'AIzaSyAO7YMo5t7eJNlzQ1z9R97GULdxj3MVVCs',
//     authDomain: 'tmijob-83bea.firebaseapp.com',
//     databaseURL: 'https://tmijob-83bea.firebaseio.com',
//     projectId: 'tmijob-83bea',
//     storageBucket: 'tmijob-83bea.appspot.com',
//     messagingSenderId: '681361491430'
// }
// firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
