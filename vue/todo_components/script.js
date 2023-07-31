Vue.component('todo-adicionar',{
	data:function(){
		return {txt:''}
	},
	methods:{
		add:function(){
			this.$emit('add',this.txt)
		}
	},
	template: `
		<div>
			<input type="text" v-model="txt" />
			<button v-on:click="add">Adicionar</button>
		</div>
	`
})

let lista = {
	props: ['itens'],
	template:`
		<ul><li v-for="item in itens">{{item}}</li></ul>
	`
}

let header = new Vue({
	el:'#header',
	methods:{
		addTodoItem:function(txt){
			sidebar.addItem(txt)
		}
	}
})

let sidebar = new Vue({
	el:'#sidebar',
	data:{
		itens:['Item 1','Item 2','Item 3']
	},
	methods:{
		addItem:function(txt){
			this.itens.push(txt)
		}
	},
	components:{
		lista
	}
})