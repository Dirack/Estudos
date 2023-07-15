let app = new Vue({
	el:'#app',
	data:{
		errorMsg:'',
		errorType:''
	},
	computed:{
		errorDivClass:function(){
			let r = {ativo:false,warning:false,error:false}

			if(this.errorMsg!=''){
				r.ativo=true
			}

			switch(this.errorType){
				case('warning'):
					r.warning=true
					r.error=false
				break
				case('error'):
					r.warning=false
					r.error=true
				break
			}
			return r
		}
	},
	methods:{
		showWarning:function(msg){
			this.errorMsg = msg
			this.errorType = 'warning'
		},
		showError:function(msg){
			this.errorMsg = msg
			this.errorType = 'error'
		},
		hideError:function(){
			this.errorMsg = ''
		}
	}

});