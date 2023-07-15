let app = new Vue({
	el:'#app',
	data:{
		nomeInput:'',
		lista:[]
	},
	methods:{
		add:function(){
			if(this.nomeInput.length > 0){
				this.lista.push(this.nomeInput)
				this.nomeInput=''
			}
		}
	}
});