import Vue from 'vue'
import App from './App.vue'
import Custom from './Custom.vue'


new Vue({
  el: '#app',
  render: h => h(App),
  components: {Custom}  
})