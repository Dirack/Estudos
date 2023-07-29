let postagem = {
	props: ['titulo','corpo'],
	template: '<div><h2>{{titulo}}</h2><p>{{corpo}}</p></div>'
}

let conteudo = new Vue({
	el:'#conteudo',
	data:{

	},
	components:{
		postagem
	}
})