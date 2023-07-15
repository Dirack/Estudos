let app = new Vue({
	el:'#app',
	data:{
		nomeInput:'',
		aviso:'',
		nomePronto:false,
		lista:[],
		timer:null
	},
	watch:{
		nomeInput:function(){
			if(this.timer != null){
				clearTimeout(this.timer)
			}
			this.aviso='Digitando...'
			this.nomePronto=false
			this.timer = setTimeout(this.ficarPronto,1000)
		}
	},
	methods:{
		ficarPronto: function(){
			this.aviso = ''
			if(this.nomeInput.length > 2){
				this.nomePronto = true
			}
		},
		add:function(){
			this.lista.push(this.nomeInput)
			this.nomeInput=''
			this.nomePronto=false
		}
	},
	computed:{
		totalTexto:function(){
			return "Total de nomes: "+this.lista.length
		}
	}
});