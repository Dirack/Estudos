let app = new Vue({
	el:'#app',
	data:{
		busca: '',
		nomes:['Bonieky','Paulo','Antônio','Fulano','Ciclano']
	},
	computed:{
		nomesFiltrados:function(){
			return this.nomes.filter(
				function(nome){
					if(this.busca!=''){
						if(nome.toLowerCase().indexOf(this.busca.toLowerCase())>-1){
							return true
						}else{
							return false
						}
					}else{
						return true
					}
				},this)
		}
	}
});