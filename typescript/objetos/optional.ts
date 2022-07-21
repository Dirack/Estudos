function resumo(usuario: {nome:string,idade?:number}){
	if(usuario.idade!=undefined){
		return `Olá, ${usuario.nome}. Vc tem ${usuario.idade} anos`;
	}else{
		return `Olá, ${usuario.nome}.`;
	}
}


let u = {
	nome: 'dirack',
};

console.log(resumo(u));
