let app = new Vue({
	el:'#app',
	data:{
		errorMsg:'',
		errorDivClass:{
			ativo:false,
			warning: false,
			error: false
		}
	},
	methods:{
		showWarning:function(msg){
			this.errorDivClass.ativo = true
			this.errorDivClass.warning = true
			this.errorDivClass.error = false
			this.errorMsg = msg
		},
		showError:function(msg){
			this.errorDivClass.ativo = true
			this.errorDivClass.warning = false
			this.errorDivClass.error = true
			this.errorMsg = msg
		},
		hideError:function(){
			this.errorDivClass.ativo = false
			this.errorDivClass.warning = false
			this.errorDivClass.error = false
			this.errorMsg = ''
		}
	}
});