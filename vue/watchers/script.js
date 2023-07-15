let app = new Vue({
	el:'#app',
	data:{
		conta:'',
		aviso:'',
		resultado:'',
		timer:null
	},
	methods:{
		fazerConta:function(){
			this.aviso=''
			this.resultado = eval(this.conta)
		}
	},
	watch:{
		conta:function(){
			this.aviso='Digitando...'

			if(this.timer != null){
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(this.fazerConta,1000)
		}
	}
});