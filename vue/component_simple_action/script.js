Vue.component('contador',{
	data:function(){
		return {
			c:0
		}
	},
	methods:{
		aumentar: function(){
			this.c++
		}
	},
	template:'<div><span>{{c}}x</span> <button v-on:click="aumentar">Aumentar</button></div>'
})

let app = new Vue({
	el:'#app',
	data:{

	},
});