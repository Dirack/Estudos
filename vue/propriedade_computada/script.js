let app = new Vue({
	el:'#app',
	data:{
		nome: 'Rodolfo'
	},
	computed:{
		nomeInvertido:function(){
			return this.nome.split('').reverse().join('')
		}
	}
});