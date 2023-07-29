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

let menuSuperior = {
	template: '<span>MENU</span>'
}

let header = new Vue({
	el:'#header',
	data:{
		title: 'Título do site'
	},
	components:{
		'menu-superior':menuSuperior
	}
})

let sidebar = new Vue({
	el:'#sidebar',
	data:{
		item:'alguma coisa'
	}
})