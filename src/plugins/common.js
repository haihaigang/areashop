let Common = { }

Common.install = function (Vue, options) {
	// 1. 添加全局方法或属性，如: vue-custom-element
	Vue.myGlobalMethod = function () {  
		// 逻辑...
	}
	// 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
	Vue.directive('my-directive', {  
		bind (el, binding, vnode, oldVnode) {
		  // 逻辑...
		}
	})
	// 3. 通过全局 mixin方法添加一些组件选项，如: vuex
	Vue.mixin({
		created: function () {  
	  	// 逻辑...
		}
	})
	Vue.prototype.$myMethod = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
		// 逻辑...
	}
}

export default Common;