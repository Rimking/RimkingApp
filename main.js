// #ifndef VUE3
import Vue from 'vue'

import App from './App'
import uView from 'uview-ui'
// 使用vView
Vue.use(uView)

// import statusbar from './components/status-bar/status-bar.vue'

// Vue.component('status-bar', statusbar)

Vue.config.productionTip = false



uni.$u.config.unit = 'rpx';

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
